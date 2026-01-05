# PowerShell-Script zum Starten des Dev-Servers für Vermieterportal
# Bevorzugt PHP Built-in Server (für API), Fallback: Python (nur statisch, API funktioniert dann nicht)

# Aktiviere virtuelle Umgebung, falls vorhanden
if (Test-Path "$PSScriptRoot\venv") {
    Write-Host "Virtuelle Umgebung gefunden, aktiviere..." -ForegroundColor Green
    & "$PSScriptRoot\venv\Scripts\Activate.ps1"
    Write-Host "Venv aktiviert. Python im PATH: $(Get-Command python -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source)" -ForegroundColor Green
} else {
    Write-Host "Keine virtuelle Umgebung gefunden." -ForegroundColor Yellow
}

# Wechsle in das Verzeichnis der Webseite (nur HTML wird deployed)
Set-Location "C:\_Git\GitHub\Lernportal\Website"

Write-Host "Starte Entwicklungsserver auf http://localhost:8000 ..." -ForegroundColor Cyan
Write-Host "Root: $(Get-Location)" -ForegroundColor DarkGray

# Prüfe, ob PHP verfügbar ist
$php = Get-Command php -ErrorAction SilentlyContinue
if ($php) {
	Write-Host "PHP gefunden: $($php.Source)" -ForegroundColor Green
	Write-Host "API aktiv unter /api/getData.php" -ForegroundColor Green
	php -S localhost:8000
} else {
	# Versuche python (venv), dann python3, dann py (Python Launcher)
	$py = Get-Command python -ErrorAction SilentlyContinue
	if (-not $py) { 
		Write-Host "python nicht gefunden, versuche python3..." -ForegroundColor Yellow
		$py = Get-Command python3 -ErrorAction SilentlyContinue 
	}
	if (-not $py) { 
		Write-Host "python3 nicht gefunden, versuche py..." -ForegroundColor Yellow
		$py = Get-Command py -ErrorAction SilentlyContinue 
	}
	if ($py) {
		Write-Host "Python gefunden: $($py.Source)" -ForegroundColor Green
	Write-Host "PHP nicht gefunden. Starte statischen Python-Server (API /api GETs funktionieren NICHT)." -ForegroundColor Yellow
	& $py.Source -m http.server 8000
	} else {
	Write-Host "Weder PHP noch Python gefunden. Starte PowerShell-basierten statischen Server (API /api GETs funktionieren NICHT)." -ForegroundColor Yellow
		Write-Host "Statischer Server läuft auf http://localhost:8000 (nur statische Dateien; PHP-API nicht verfügbar)" -ForegroundColor Cyan

		# Minimaler statischer HTTP-Server in PowerShell (benutzt HttpListener)
		try {
			$listener = New-Object System.Net.HttpListener
			$prefix = 'http://localhost:8000/'
			$listener.Prefixes.Add($prefix)
			$listener.Start()
			Write-Host "Listening on $prefix - drücken Sie Strg+C zum Beenden" -ForegroundColor Green

			$root = (Get-Location).ProviderPath

			# einfache MIME-Typ-Zuordnung
			$mimetypes = @{
				'.html' = 'text/html; charset=utf-8'; '.htm' = 'text/html; charset=utf-8'
				'.js' = 'application/javascript; charset=utf-8'; '.css' = 'text/css; charset=utf-8'
				'.json' = 'application/json; charset=utf-8'; '.png' = 'image/png'; '.jpg' = 'image/jpeg'
				'.jpeg' = 'image/jpeg'; '.svg' = 'image/svg+xml'; '.gif' = 'image/gif'; '.pdf' = 'application/pdf'
			}

			while ($listener.IsListening) {
				$context = $listener.GetContext()
				Start-Job -ArgumentList $context, $root, $mimetypes -ScriptBlock {
					param($context, $root, $mimetypes)
					try {
						$req = $context.Request
						$res = $context.Response
						$urlPath = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath.TrimStart('/'))
						if ([string]::IsNullOrEmpty($urlPath)) { $urlPath = 'index.html' }
						$localPath = Join-Path $root $urlPath
						# Verhindere Pfad-Traversal
						$fullLocal = (Resolve-Path -LiteralPath $localPath -ErrorAction SilentlyContinue)
						if (-not $fullLocal) {
							$res.StatusCode = 404
							$buf = [System.Text.Encoding]::UTF8.GetBytes("404 - Not Found")
							$res.ContentType = 'text/plain; charset=utf-8'
							$res.OutputStream.Write($buf,0,$buf.Length)
							$res.Close()
							return
						}
						$fullLocal = $fullLocal.ProviderPath
						if (-not ($fullLocal.StartsWith($root))) {
							$res.StatusCode = 403
							$buf = [System.Text.Encoding]::UTF8.GetBytes("403 - Forbidden")
							$res.ContentType = 'text/plain; charset=utf-8'
							$res.OutputStream.Write($buf,0,$buf.Length)
							$res.Close()
							return
						}
						if (Test-Path $fullLocal -PathType Container) {
							$fullLocal = Join-Path $fullLocal 'index.html'
						}
						if (-not (Test-Path $fullLocal)) {
							$res.StatusCode = 404
							$buf = [System.Text.Encoding]::UTF8.GetBytes("404 - Not Found")
							$res.ContentType = 'text/plain; charset=utf-8'
							$res.OutputStream.Write($buf,0,$buf.Length)
							$res.Close()
							return
						}
						$ext = [System.IO.Path]::GetExtension($fullLocal)
						$ctype = $mimetypes[$ext]
						if (-not $ctype) { $ctype = 'application/octet-stream' }
						$bytes = [System.IO.File]::ReadAllBytes($fullLocal)
						$res.ContentType = $ctype
						$res.ContentLength64 = $bytes.Length
						$res.OutputStream.Write($bytes, 0, $bytes.Length)
						$res.Close()
					} catch {
						try { $context.Response.StatusCode = 500; $context.Response.Close() } catch {}
					}
				} | Out-Null
			}
		} catch {
			Write-Error "Fehler beim Starten des PowerShell-Servers: $_"
		} finally {
			if ($listener -and $listener.IsListening) { $listener.Stop(); $listener.Close() }
		}
	}
}

# Hinweis: Der Server läuft im Vordergrund. Drücke Ctrl+C, um ihn zu stoppen.
# http://localhost:8000/index.html