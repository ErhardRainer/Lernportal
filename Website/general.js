// Tailwind-Konfiguration für die Verwendung von Inter-Schrift und primären Farben
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                'primary-blue': '#4F46E5', // Indigo-600 als primäre Farbe
            }
        }
    }
}

// --- 1. JSON-Datenstruktur für alle Lernspiele und Ordner (mit 'type' und 'id') ---
const allItems = [
    // Spiele (type: "game")
    {
        id: "g1",
        type: "game",
        name: "Mathe-Meister",
        icon: "🧮", 
        color: "indigo",
        description: "Üben Sie Addition, Subtraktion und Multiplikation spielerisch, ideal für die Grundschule.",
        link: "#mathe",
        level: "Klasse 1-4",
        hashtags: ["Mathematik", "Rechnen", "Zahlen", "Grundschule", "Addition"]
    },
    {
        id: "g2",
        type: "game",
        name: "Vokabel-Trainer",
        icon: "📚", 
        color: "green",
        description: "Lernen Sie neue Wörter und Redewendungen in verschiedenen Sprachen wie Englisch und Spanisch.",
        link: "#vokabeln",
        level: "Alle Altersgruppen",
        hashtags: ["Sprache", "Vokabeln", "Englisch", "Spanisch", "Lernen"]
    },
    {
        id: "g3",
        type: "game",
        name: "Logik-Knobeleien",
        icon: "🧠", 
        color: "yellow",
        description: "Herausfordernde Rätsel und Denksportaufgaben für scharfe Köpfe und kritisches Denken.",
        link: "#logik",
        level: "Fortgeschritten",
        hashtags: ["Logik", "Rätsel", "Denken", "Kognition", "Schwierig"]
    },
    {
        id: "g4",
        type: "game",
        name: "Weltreise-Quiz",
        icon: "🗺️", 
        color: "red",
        description: "Testen Sie Ihr Wissen über Länder, Flaggen und Hauptstädte weltweit.",
        link: "#geografie",
        level: "Klasse 5-7",
        hashtags: ["Geografie", "Länder", "Hauptstädte", "Kontinente", "Erde"]
    },
    {
        id: "g5",
        type: "game",
        name: "Code-Abenteuer",
        icon: "💻", 
        color: "purple",
        description: "Lernen Sie die Grundlagen der Programmierung mit visuellen Blöcken und Algorithmen.",
        link: "#code",
        level: "Anfänger",
        hashtags: ["Programmieren", "Code", "Informatik", "Algorithmen", "Einführung"]
    },
        {
        id: "g6",
        type: "game",
        name: "Natur-Detektiv",
        icon: "🌱", 
        color: "lime",
        description: "Entdecken Sie die Welt der Pflanzen, Tiere und biologischen Prozesse in Ökosystemen.",
        link: "#natur",
        level: "Klasse 3-6",
        hashtags: ["Biologie", "Natur", "Tiere", "Pflanzen", "Ökosystem"]
    },
        {
        id: "g7",
        type: "game",
        name: "Historisches Quiz",
        icon: "🏛️", 
        color: "stone",
        description: "Reisen Sie durch die Zeit und lernen Sie berühmte Epochen und historische Fakten kennen.",
        link: "#geschichte",
        level: "Klasse 7-10",
        hashtags: ["Geschichte", "Epochen", "Zeitlinie", "Antike", "Mittelalter"]
    },
    {
        id: "g8",
        type: "game",
        name: "Chemie-Labor",
        icon: "🧪", 
        color: "cyan",
        description: "Interaktiver Blick auf das Periodensystem und chemische Reaktionen in der Oberstufe.",
        link: "#chemie",
        level: "Oberstufe",
        hashtags: ["Chemie", "Elemente", "Periodensystem", "Reaktionen", "Wissenschaft"]
    },
    
    // --- Ordner (type: "folder") Definitionen mit 'items' Array ---
    { 
        id: "f1", 
        type: "folder", 
        name: "Mathematik & Naturwissenschaften", 
        icon: "🔬", 
        color: "indigo", 
        description: "Spiele zu Zahlen, Formeln, Biologie und Chemie.", 
        level: "Alle", 
        hashtags: ["MINT", "Science", "Formeln", "Grundschule"], 
        items: ["g1", "g6", "g8"] // IDs der enthaltenen Elemente
    },
    { 
        id: "f2", 
        type: "folder", 
        name: "Sprachen & Geisteswissenschaften", 
        icon: "🌐", 
        color: "green", 
        description: "Vokabeln, Länderkunde und Geschichte.", 
        level: "Alle", 
        hashtags: ["Geisteswissenschaften", "Kultur", "Fremdsprache"], 
        items: ["g2", "g4", "g7"] 
    },
    { 
        id: "f3", 
        type: "folder", 
        name: "Technologie & Logik", 
        icon: "💡", 
        color: "purple", 
        description: "Rätsel, Logikaufgaben und Einführung in die Programmierung.", 
        level: "Alle", 
        hashtags: ["Informatik", "MINT", "Rätsel"], 
        items: ["g3", "g5"] 
    }
];

// --- 2. JSON-Datenstruktur für soziale Medien ---
const socialLinks = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/lernspieleportal",
        // Pfad des Facebook-Icons (Inline SVG)
        iconPath: "M14 13.5H16.5L17.5 9H14V7C14 6.44772 14.4477 6 15 6H17V2.2C16.3 2.1 15.55 2 14.833 2C12.373 2 10.5 3.5 10.5 6.25V9H8V13.5H10.5V22H15.5V13.5H18.5L19.5 9H15.5V6.25C15.5 5.922 15.228 5.65 14.833 5.65H14C13.55 5.65 13.195 5.918 13.195 6.3V9H14V13.5Z"
    },
    {
        name: "Twitter (X)",
        url: "https://www.twitter.com/lernspieleportal",
        // Pfad des Twitter/X-Icons (Inline SVG)
        iconPath: "M22 5.8a8.3 8.3 0 01-2.3.6 4.1 4.1 0 001.8-2.2 8.3 8.3 0 01-2.6 1 4.1 4.1 0 00-7 3.7 11.6 11.6 0 01-8.4-4.2 4.1 4.1 0 001.2 5.5 4.1 4.1 0 01-1.9-.5v.1a4.1 4.1 0 003.3 4 4.1 4.1 0 01-1.8.1 4.1 4.1 0 003.8 2.9 8.3 8.3 0 01-5.1 1.7c-.3 0-.7 0-1 0a11.6 11.6 0 006.3 1.8c7.5 0 11.6-6.2 11.6-11.6v-.5a8.3 8.3 0 002.1-2.2z"
    }
];


// Map zur schnellen Suche von Elementen nach ID
const itemIdMap = new Map(allItems.map(item => [item.id, item]));

// Root-Elemente, die beim Start angezeigt werden (die 3 Ordner)
const rootItems = ["f1", "f2", "f3"]; 

// Navigations-Stack: Speichert den Pfad 
let navigationStack = [{ id: 'root', name: 'Startseite', items: rootItems }];

// --- 3. Navigations-Funktionen ---

// Navigiert direkt zur Startseite (Root)
function navigateToRoot() {
    navigationStack = [{ id: 'root', name: 'Startseite', items: rootItems }];
    renderGames();
    document.getElementById('search-input').value = '';
}

// Navigiert in einen Ordner 
function navigateToFolder(id) {
    const folder = itemIdMap.get(id);
    if (folder && folder.type === 'folder' && folder.items) {
        // Fügt den Ordner dem Stack hinzu
        navigationStack.push({ id: folder.id, name: folder.name, items: folder.items });
        renderGames();
        // Leert das Suchfeld beim Navigieren
        document.getElementById('search-input').value = '';
    }
}

// Navigiert zurück (zum vorherigen Ordner oder zur Startseite)
function navigateBack(targetId) {
    if (navigationStack.length <= 1) return; 

    if (targetId) {
        // Springe zu einem bestimmten Element im Breadcrumb
        const targetIndex = navigationStack.findIndex(item => item.id === targetId);
        if (targetIndex > 0) {
            navigationStack = navigationStack.slice(0, targetIndex + 1);
        }
    } else {
            // Gehe einen Schritt zurück
        navigationStack.pop();
    }
    renderGames();
    document.getElementById('search-input').value = '';
}


// Funktion, die beim Klicken auf einen Hashtag aufgerufen wird, um die Suche zu starten
function searchByTag(tag) {
    const input = document.getElementById('search-input');
    input.value = `#${tag}`; 
    filterGames();
}

// Funktion, die beim Klicken auf ein Level aufgerufen wird, um die Suche zu starten
function searchByLevel(level) {
    const input = document.getElementById('search-input');
    input.value = level; 
    filterGames();
}

// 4. Funktion zum Erstellen der Kachel-HTML
function createGameTile(item) {
    // Kombinierter Suchstring
    const searchString = `${item.name} ${item.description} ${item.level} ${item.hashtags ? item.hashtags.join(' ') : ''}`.toLowerCase();
    // Dedizierter Hashtag-String
    const hashtagData = item.hashtags ? item.hashtags.map(tag => tag.toLowerCase()).join(' ') : ''; 
    
    // Icon-Anpassung für Ordner
    const itemIcon = item.type === 'folder' ? '📁' : item.icon;
    const itemColor = item.color || 'gray';
    
    let contentHtml;

    if (item.type === 'folder') {
        // Ordner-Kachel mit onclick Handler
        contentHtml = `
            <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full transition duration-300 tile-animation border-b-4 border-${itemColor}-500 hover:border-${itemColor}-600 cursor-pointer" onclick="navigateToFolder('${item.id}')">
                <div class="text-5xl mb-4 text-${itemColor}-600">${itemIcon}</div>
                <h3 class="text-xl font-semibold mb-2 text-gray-800">${item.name}</h3>
                <p class="text-gray-500 text-sm flex-grow">${item.description}</p>
                
                <div class="mt-4 pt-4 border-t border-gray-100">
                        <span class="text-xs font-medium text-white bg-${itemColor}-500 px-3 py-1 rounded-full self-start inline-block">Ordner</span>
                        <p class="text-xs text-gray-400 mt-2">${item.items.length} Elemente enthalten</p>
                </div>
            </div>
        `;
    } else {
        // Spiel-Kachel
        const hashtagHtml = item.hashtags.map(tag => 
            `<span class="text-xs font-light text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full mr-1 mb-1 cursor-pointer hover:bg-gray-200 transition duration-150" onclick="event.stopPropagation(); searchByTag('${tag}');">${tag}</span>`
        ).join('');

        contentHtml = `
            <a href="${item.link}" class="block">
                <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full transition duration-300 tile-animation border-b-4 border-${itemColor}-500 hover:border-${itemColor}-600">
                    <div class="text-5xl mb-4 text-${itemColor}-600">${itemIcon}</div>
                    <h3 class="text-xl font-semibold mb-2 text-gray-800">${item.name}</h3>
                    <p class="text-gray-500 text-sm flex-grow">${item.description}</p>
                    
                    <div class="mt-4 pt-4 border-t border-gray-100">
                        <span class="text-xs font-medium text-white bg-${itemColor}-500 px-3 py-1 rounded-full self-start mb-2 inline-block cursor-pointer hover:bg-${itemColor}-600 transition duration-150" onclick="event.preventDefault(); event.stopPropagation(); searchByLevel('${item.level}');">${item.level}</span>
                        <div class="flex flex-wrap mt-2">
                            ${hashtagHtml}
                        </div>
                    </div>
                </div>
            </a>
        `;
    }

    return `<div class="game-tile block" data-search="${searchString}" data-hashtags="${hashtagData}">${contentHtml}</div>`;
}


// 5. Funktion zum Rendern der Kacheln (basiert auf dem Navigations-Stack)
function renderGames(filter = '') {
    const currentFolder = navigationStack[navigationStack.length - 1];
    const container = document.getElementById('game-container');
    const breadcrumbContainer = document.getElementById('breadcrumb-container');
    const noResultsMessage = document.getElementById('no-results-message');

    // Holt die Elemente des aktuellen Ordners
    const currentItems = currentFolder.items.map(id => itemIdMap.get(id)).filter(item => item !== undefined);
    let filteredItems = currentItems;
    let foundCount = 0;

    // --- Filterlogik ---
    if (filter) {
        const filterText = filter.toLowerCase().trim();
        const terms = filterText.split(/\s+/).filter(t => t.length > 0);

        filteredItems = currentItems.filter(item => {
            let isMatch = true;
            const generalSearchData = `${item.name} ${item.description} ${item.level} ${item.hashtags ? item.hashtags.join(' ') : ''}`.toLowerCase();
            const hashtagSearchData = item.hashtags ? item.hashtags.map(tag => tag.toLowerCase()).join(' ') : '';
            
            for (const term of terms) {
                let termMatch = false;

                if (term.startsWith('#')) {
                    const tag = term.substring(1);
                    if (hashtagSearchData.includes(tag)) {
                        termMatch = true;
                    }
                } else {
                    if (generalSearchData.includes(term)) {
                        termMatch = true;
                    }
                }
                
                if (!termMatch) {
                    isMatch = false;
                    break;
                }
            }
            return isMatch;
        });
    }

    // --- Rendern der Kacheln ---
    container.innerHTML = filteredItems.map(createGameTile).join('');
    foundCount = filteredItems.length;


    // --- Breadcrumbs rendern ---
    let breadcrumbHtml = navigationStack.map((nav, index) => {
        const isLast = index === navigationStack.length - 1;
        if (nav.id === 'root') return ''; // Root nicht anzeigen

        return `
            <span class="text-gray-500 mx-2 hidden sm:inline-block">/</span>
            <button 
                class="text-sm font-medium ${isLast ? 'text-primary-blue' : 'text-gray-600 hover:text-primary-blue'}" 
                ${isLast ? 'disabled' : `onclick="navigateBack('${nav.id}')"`}
            >
                ${nav.name}
            </button>
        `;
    }).join('');
    
    // Führe "Startseite" und "Zurück" Button hinzu
    let backButtonHtml = '';
    if (navigationStack.length > 1) {
        backButtonHtml = `
            <button onclick="navigateBack()" class="flex items-center text-sm font-medium text-gray-600 hover:text-primary-blue mb-4 sm:mb-0">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Zurück
            </button>
            ${breadcrumbHtml}
        `;
    } else {
        backButtonHtml = `<p class="text-sm font-medium text-gray-500 mb-4 sm:mb-0">Startseite (Ordneransicht)</p>`;
    }


    breadcrumbContainer.innerHTML = backButtonHtml;


    // --- Meldung bei keinen Ergebnissen anzeigen/ausblenden ---
    if (foundCount === 0 && currentItems.length > 0) {
        noResultsMessage.classList.remove('hidden');
    } else {
        noResultsMessage.classList.add('hidden');
    }
}

// 6. Funktion zum Filtern (ruft renderGames mit Filter auf)
function filterGames() {
    const input = document.getElementById('search-input');
    renderGames(input.value);
}

// 7. Funktion zum Rendern der Social Media Links
function renderSocialLinks() {
    const container = document.getElementById('social-links-container');
    if (!container) return;

    const html = socialLinks.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-primary-blue transition duration-150" aria-label="${link.name}">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="${link.iconPath}"/></svg>
        </a>
    `).join('');

    container.innerHTML = html;
}


// --- Auth Variablen und Funktionen ---
let auth = null;
let currentUserId = null;
let userProfile = null; // { name, email, photoURL }

function openAuthModal() {
    const modal = document.getElementById('auth-modal-overlay');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    renderAuthModalContent();
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal-overlay');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

function renderAuthModalContent() {
    const modalContent = document.getElementById('auth-modal-content');
    if (userProfile) {
        // Angemeldeter Benutzer: Profilansicht
        const initials = userProfile.name ? userProfile.name.charAt(0) : '?';
        modalContent.innerHTML = `
            <div class="text-center">
                <div class="w-20 h-20 rounded-full bg-primary-blue mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
                    ${userProfile.photoURL ? `<img src="${userProfile.photoURL}" alt="${userProfile.name}" class="rounded-full w-full h-full object-cover">` : initials}
                </div>
                <h4 class="text-xl font-semibold text-gray-800">${userProfile.name || 'Angemeldeter Benutzer'}</h4>
                <p class="text-gray-500 text-sm">${userProfile.email || 'ID: ' + currentUserId.substring(0, 8) + '...'}</p>
                <button onclick="signOutUser()" class="mt-6 w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow transition">
                    Abmelden
                </button>
            </div>
        `;
        document.getElementById('auth-modal-title').textContent = "Ihr Profil";
    } else {
        // Abgemeldeter Zustand: Login-Optionen
        modalContent.innerHTML = `
            <p class="text-gray-600 mb-6 text-center">Melden Sie sich an, um Ihren Fortschritt zu speichern.</p>
            <button onclick="signInWithGoogle()" class="w-full py-3 px-4 mb-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg shadow hover:bg-gray-50 flex items-center justify-center transition">
                <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.24 10.278c-.73 0-1.46.06-2.17.18 1.48-1.74 3.65-2.88 6.07-2.88 1.5 0 2.87.52 3.96 1.34L22 6.55A12 12 0 0012.24 2.2C6.98 2.2 2.65 5.76 1.05 10.45l4.35 3.33c.75-2.17 2.62-3.7 4.84-3.7.8 0 1.57.18 2.24.51z" fill="#EA4335"/><path d="M1.05 10.45L5.4 13.78c-.2.62-.31 1.28-.31 1.97 0 4.14 3.4 7.5 7.6 7.5s7.6-3.36 7.6-7.5H12.24V10.278H1.05z" fill="#34A853"/><path d="M12.24 21.7c-4.2 0-7.6-3.36-7.6-7.5 0-.69.1-1.35.3-1.97H22c-.65 3.55-3.6 6.36-7.3 7.35z" fill="#4285F4"/><path d="M22 14.2c0-.7-.1-1.37-.3-2H12.24V10.28h9.76v3.92z" fill="#FBBC05"/></svg>
                Mit Google anmelden (Simuliert)
            </button>
            <button onclick="signInWithFacebook()" class="w-full py-3 px-4 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg shadow hover:bg-gray-50 flex items-center justify-center transition">
                <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.184 0.128H4.816C2.158 0.128 0 2.286 0 4.944v14.112C0 21.714 2.158 24 4.816 24h7.184V14.63h3.018l.452-3.486H12.0V9.013c0-1.008.28-1.696 1.728-1.696h1.848V4.32c-.328-.048-1.46-.144-2.776-.144C11.532 4.176 9.6 5.864 9.6 8.76v2.38H6.576V14.63h3.024V24h6.704C21.842 24 24 21.714 24 19.056V4.944C24 2.286 21.842 0.128 19.184 0.128z" fill="#3b5998"/></svg>
                Mit Facebook anmelden (Simuliert)
            </button>
        `;
        document.getElementById('auth-modal-title').textContent = "Anmelden";
    }
}

// SIMULIERTE Auth Funktionen
function signInWithGoogle() {
    alertUser('Anmeldung mit Google wurde angeklickt.', 'info');
    simulateLogin('Google User', 'google.user@example.com', 'https://placehold.co/150x150/4F46E5/ffffff?text=G');
    closeAuthModal();
}

function signInWithFacebook() {
    alertUser('Anmeldung mit Facebook wurde angeklickt.', 'info');
    simulateLogin('Facebook Fan', 'fb.fan@example.com', 'https://placehold.co/150x150/4F46E5/ffffff?text=F');
    closeAuthModal();
}

function signOutUser() {
    alertUser('Erfolgreich abgemeldet.', 'info');
    simulateSignOut();
    closeAuthModal();
}

// SIMULATION Helpers
function simulateLogin(name, email, photoURL) {
    currentUserId = 'simulated-user-' + Math.random().toString(36).substring(2, 8);
    userProfile = { name, email, photoURL };
    updateAvatarUI();
}

function simulateSignOut() {
    currentUserId = null;
    userProfile = null;
    updateAvatarUI();
}

function updateAvatarUI() {
    const avatarButton = document.getElementById('auth-avatar-button');
    if (!avatarButton) return;

    if (userProfile) {
        // Angemeldet
        const initials = userProfile.name ? userProfile.name.charAt(0) : '?';
        let innerHtml;
        if (userProfile.photoURL) {
            innerHtml = `<img src="${userProfile.photoURL}" alt="${userProfile.name}" class="rounded-full w-full h-full object-cover">`;
        } else {
            innerHtml = `<span class="text-white text-lg font-bold">${initials}</span>`;
        }
        avatarButton.classList.remove('bg-gray-200', 'text-gray-500', 'hover:bg-gray-300');
        avatarButton.classList.add('bg-primary-blue', 'hover:bg-indigo-700', 'shadow-md');
        avatarButton.innerHTML = innerHtml;

    } else {
        // Abgemeldet
        avatarButton.classList.remove('bg-primary-blue', 'hover:bg-indigo-700', 'shadow-md');
        avatarButton.classList.add('bg-gray-200', 'text-gray-500', 'hover:bg-gray-300');
        // Standard Benutzer-Icon (Inline SVG)
        avatarButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>`;
    }
}

// --- Custom Alert System (ersetzt alert()) ---
function alertUser(message, type = 'success') {
    const alertBox = document.getElementById('custom-alert-box');
    const alertText = document.getElementById('custom-alert-text');
    
    if (!alertBox || !alertText) return;

    let bgColor = 'bg-green-500';
    if (type === 'info') bgColor = 'bg-primary-blue';
    if (type === 'error') bgColor = 'bg-red-500';

    alertBox.className = `fixed bottom-4 right-4 z-[60] p-4 rounded-lg shadow-xl text-white ${bgColor} transition-opacity duration-300 opacity-0`;
    alertText.textContent = message;
    alertBox.style.opacity = '1';

    setTimeout(() => {
        alertBox.style.opacity = '0';
    }, 3000);
}

// --- Modal / Popup Funktionen (für Rechtliches etc.) ---

function getPlaceholderContent(title) {
    const placeholder = {
        "Impressum": "Dies ist ein rechtlich vorgeschriebener Text, der Informationen über den Betreiber der Website enthält. (Platzhalter)",
        "Datenschutz": "Unsere Datenschutzbestimmungen erklären, wie wir Ihre Daten verarbeiten und schützen. (Platzhalter)",
        "AGB / Nutzungsbedingungen": "Hier finden Sie die Allgemeinen Geschäftsbedingungen für die Nutzung unseres Portals. (Platzhalter)",
        "Cookie-Einstellungen": "Informationen und Einstellungen zur Verwendung von Cookies auf dieser Website. (Platzhalter)",
        "Das Team": "Wir sind ein kleines Team von Enthusiasten, die leidenschaftlich gerne Lernspiele entwickeln. Erfahren Sie mehr über uns! (Platzhalter)",
        "Kontakt": "Sie erreichen uns per E-Mail unter info@lernspiele-portal.de oder über das Kontaktformular. (Platzhalter)",
        "Karriere": "Interessiert, Teil unseres Teams zu werden? Sehen Sie sich unsere aktuellen Stellenangebote an! (Platzhalter)"
    };
    
    const detailedContent = placeholder[title] || "Für dieses Dokument ist noch kein Inhalt hinterlegt. (Platzhalter)";
    
    let longText = `<p class="mb-4 font-semibold text-lg">${detailedContent}</p>`;
    for (let i = 0; i < 5; i++) {
            longText += `<p class="mb-4">Abschnitt ${i+1}: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>`;
    }
    return longText;
}

function openModal(title, linkText) {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    modalTitle.textContent = title;
    modalContent.innerHTML = getPlaceholderContent(linkText); 
    
    modalOverlay.classList.remove('hidden');
    modalOverlay.classList.add('flex');
    
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    
    modalOverlay.classList.add('hidden');
    modalOverlay.classList.remove('flex');
    
    document.body.style.overflow = '';
}

// 8. Seite initialisieren, wenn das DOM geladen ist
window.onload = async function() {
    renderGames(); // Startet die Anzeige der Root-Elemente
    renderSocialLinks(); // Rendert die Social Media Links
    
    // --- Firebase Initialization ---
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
    const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
    
    if (firebaseConfig && window.firebase) {
        const { initializeApp, getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } = window.firebase;
        
        try {
            const app = initializeApp(firebaseConfig);
            auth = getAuth(app);
            
            // Auth State Listener einrichten
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    currentUserId = user.uid;
                    userProfile = { 
                        name: user.displayName || user.email, 
                        email: user.email, 
                        photoURL: user.photoURL 
                    };
                    console.log("Firebase User signed in:", user.uid);
                } else {
                    currentUserId = null;
                    userProfile = null;
                    console.log("Firebase User signed out.");
                }
                updateAvatarUI(); // UI immer nach Zustandsänderung aktualisieren
            });

            // Initialen Login mit Custom Token oder Anonym
            if (initialAuthToken) {
                await signInWithCustomToken(auth, initialAuthToken);
                console.log("Initial sign-in with custom token successful.");
            } else {
                await signInAnonymously(auth);
                console.log("Initial anonymous sign-in successful.");
            }
        } catch (error) {
            console.error("Firebase initialization or sign-in failed:", error.message);
            // Fallback: Simulation starten
            updateAvatarUI();
        }
    } else {
            console.warn("Firebase configuration or module missing. Running in simulated mode.");
            updateAvatarUI(); // Initialisiere Avatar im abgemeldeten Zustand
    }
};
