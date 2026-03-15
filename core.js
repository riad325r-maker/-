// =============================================
//  CineLingua - Core System (Modular)
//  Theme, Language, UI Injection, Firebase
// =============================================

// --- 1. TRANSLATIONS (i18n) ---
const translations = {
    ar: {
        siteName: "CineLingua", home: "الرئيسية", lessons: "الكلمات", tenses: "الأزمنة", stories: "القصص",
        quiz: "الاختبارات", download: "تحميل", settings: "الإعدادات", appearance: "المظهر",
        language: "اللغة", notifications: "الإشعارات", lightMode: "فاتح", darkMode: "داكن",
        langArabic: "العربية", langEnglish: "English", notifStatus: "حالة الإشعارات",
        notifGranted: "مفعّلة ✓", notifDenied: "محظورة", notifDefault: "غير محددة",
        enableNotif: "تفعيل الإشعارات", notifEnabled: "الإشعارات مفعّلة",
        search: "ابحث...", save: "حفظ", saved: "محفوظة", listen: "استماع",
        // Additional labels used in pages
        verbs: "الأفعال", grammar: "الجرامر", appDownload: "تحميل التطبيق",
        heroTitle: "تعلم الإنجليزية بذكاء مع CineLingua",
        heroDesc: "منصة تعليمية متكاملة تساعدك على تعلم الإنجليزية من خلال كلمات، قصص، أزمنة، واختبارات تفاعلية",
        heroStart: "ابدأ الآن",
        lessonsDesc: "تعلم المفردات الأساسية والمتقدمة مع النطق الصحيح والأمثلة التطبيقية",
        storiesDesc: "اقرأ قصصاً قصيرة ممتعة مع أسئلة تفاعلية وحسّن فهمك للغة",
        tensesDesc: "تعلم أزمنة اللغة الإنجليزية مع شرح مبسط وأمثلة وتمارين تفاعلية",
        quizDesc: "اختبر مستواك واكتشف نقاط قوتك وضعفك من خلال اختبارات متنوعة",
        lessonsTitle: "الكلمات والجمل", level: "المستوى:",
        all: "الكل", beginner: "مبتدئ", intermediate: "متوسط", advanced: "متقدم",
        storiesTitle: "القصص القصيرة", showTranslation: "إظهار الترجمة", read: "اقرأ",
        tensesTitle: "الأزمنة في الإنجليزية", learn: "تعلم المزيد",
        quizTitle: "الاختبارات", quizFinished: "انتهى الاختبار!", retry: "إعادة المحاولة",
        verbsTitle: "الأفعال وتصاريفها", grammarTitle: "قواعد اللغة الإنجليزية",
        downloadDesc: "استمتع بتجربة تعلم أسرع وأسهل من خلال تطبيق الأندرويد",
        downloadNow: "تحميل APK الآن", howToInstall: "كيفية التثبيت:",
        step1: "قم بتحميل ملف APK من الزر أعلاه.", step2: "افتح الملف الذي تم تحميله.",
        step3: "إذا ظهر تحذير \"تثبيت من مصادر غير معروفة\"، قم بتفعيله من الإعدادات.",
        step4: "اضغط على \"تثبيت\" واستمتع بالتطبيق!"
    },
    en: {
        siteName: "CineLingua", home: "Home", lessons: "Words", tenses: "Tenses", stories: "Stories",
        quiz: "Quiz", download: "Download", settings: "Settings", appearance: "Appearance",
        language: "Language", notifications: "Notifications", lightMode: "Light", darkMode: "Dark",
        langArabic: "Arabic", langEnglish: "English", notifStatus: "Notification Status",
        notifGranted: "Enabled ✓", notifDenied: "Blocked", notifDefault: "Not Set",
        enableNotif: "Enable Notifications", notifEnabled: "Notifications Enabled",
        search: "Search...", save: "Save", saved: "Saved", listen: "Listen",
        verbs: "Verbs", grammar: "Grammar", appDownload: "Download App",
        heroTitle: "Learn English Smartly with CineLingua",
        heroDesc: "A comprehensive educational platform that helps you learn English through words, stories, tenses, and interactive quizzes",
        heroStart: "Start Now",
        lessonsDesc: "Learn basic and advanced vocabulary with correct pronunciation and applied examples",
        storiesDesc: "Read fun short stories with interactive questions and improve your language comprehension",
        tensesDesc: "Learn English tenses with simplified explanation, examples and interactive exercises",
        quizDesc: "Test your level and discover your strengths and weaknesses through various tests",
        lessonsTitle: "Words & Phrases", level: "Level:",
        all: "All", beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced",
        storiesTitle: "Short Stories", showTranslation: "Show Translation", read: "Read",
        tensesTitle: "English Tenses", learn: "Learn More",
        quizTitle: "Quizzes", quizFinished: "Quiz Finished!", retry: "Retry",
        verbsTitle: "Verbs & Conjugations", grammarTitle: "English Grammar Rules",
        downloadDesc: "Enjoy a faster and easier learning experience through the Android app",
        downloadNow: "Download APK Now", howToInstall: "How to Install:",
        step1: "Download the APK file from the button above.", step2: "Open the downloaded file.",
        step3: "If an \"Install from unknown sources\" warning appears, enable it from settings.",
        step4: "Click \"Install\" and enjoy the app!"
    }
};

let currentLanguage = localStorage.getItem('cl-language') || 'ar';

function t(key) {
    return (translations[currentLanguage] && translations[currentLanguage][key]) || key;
}

function applyLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('cl-language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    updateSettingsUI();
    // Dispatch event for pages to update their specific content
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// --- 2. THEME MANAGEMENT ---
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cl-theme', theme);
    updateSettingsUI();
}

// --- 3. UI INJECTION (Navbar & Settings) ---
function injectCommonUI() {
    const activePage = window.location.pathname.split('/').pop() || 'index.html';

    const navbarHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a class="logo" href="index.html"><i class="fas fa-film"></i> CineLingua</a>
            <button class="menu-toggle" onclick="toggleMenu()"><i class="fas fa-bars"></i></button>
            <ul class="nav-menu" id="navMenu">
                <li><a href="index.html" class="${activePage==='index.html'?'active':''}" data-i18n="home">${t('home')}</a></li>
                <li><a href="lessons.html" class="${activePage==='lessons.html'?'active':''}" data-i18n="lessons">${t('lessons')}</a></li>
                <li><a href="stories.html" class="${activePage==='stories.html'?'active':''}" data-i18n="stories">${t('stories')}</a></li>
                <li><a href="tenses.html" class="${activePage==='tenses.html'?'active':''}" data-i18n="tenses">${t('tenses')}</a></li>
                <li><a href="quiz.html" class="${activePage==='quiz.html'?'active':''}" data-i18n="quiz">${t('quiz')}</a></li>
                <li><a href="verbs.html" class="${activePage==='verbs.html'?'active':''}" data-i18n="verbs">${t('verbs')}</a></li>
                <li><a href="grammar.html" class="${activePage==='grammar.html'?'active':''}" data-i18n="grammar">${t('grammar')}</a></li>
                <li><a href="download.html" class="${activePage==='download.html'?'active':''}" data-i18n="download">${t('download')}</a></li>
            </ul>
            <div class="nav-right">
                <button class="settings-btn" onclick="openSettings()"><i class="fas fa-cog"></i></button>
            </div>
        </div>
    </nav>`;

    const settingsHTML = `
    <div id="settingsOverlay" class="settings-overlay" onclick="closeSettings()"></div>
    <div id="settingsPanel" class="settings-panel">
        <div class="settings-header">
            <div class="settings-header-left">
                <div class="settings-header-icon"><i class="fas fa-sliders-h"></i></div>
                <div>
                    <div class="settings-header-title" data-i18n="settings">${t('settings')}</div>
                    <div class="settings-header-sub">CineLingua</div>
                </div>
            </div>
            <button class="settings-close" onclick="closeSettings()"><i class="fas fa-times"></i></button>
        </div>
        <div class="settings-body">
            <div class="settings-section">
                <div class="settings-section-title"><i class="fas fa-palette"></i> <span data-i18n="appearance">${t('appearance')}</span></div>
                <div class="settings-theme-row">
                    <button class="settings-theme-btn" id="theme-light" onclick="setTheme('light')">
                        <div class="settings-theme-preview light-preview"><div class="preview-bar"></div><div class="preview-card"></div></div>
                        <i class="fas fa-sun"></i> <span data-i18n="lightMode">${t('lightMode')}</span>
                    </button>
                    <button class="settings-theme-btn" id="theme-dark" onclick="setTheme('dark')">
                        <div class="settings-theme-preview dark-preview"><div class="preview-bar"></div><div class="preview-card"></div></div>
                        <i class="fas fa-moon"></i> <span data-i18n="darkMode">${t('darkMode')}</span>
                    </button>
                </div>
            </div>
            <div class="settings-section">
                <div class="settings-section-title"><i class="fas fa-globe"></i> <span data-i18n="language">${t('language')}</span></div>
                <div class="settings-lang-row">
                    <button class="settings-lang-btn" id="lang-ar" onclick="applyLanguage('ar')">
                        <span class="lang-flag">🌙</span>
                        <div class="lang-info"><span class="lang-name">العربية</span><span class="lang-native">Arabic</span></div>
                        <i class="fas fa-check lang-check"></i>
                    </button>
                    <button class="settings-lang-btn" id="lang-en" onclick="applyLanguage('en')">
                        <span class="lang-flag">🌐</span>
                        <div class="lang-info"><span class="lang-name">English</span><span class="lang-native">الإنجليزية</span></div>
                        <i class="fas fa-check lang-check"></i>
                    </button>
                </div>
            </div>
            <div class="settings-section">
                <div class="settings-section-title"><i class="fas fa-bell"></i> <span data-i18n="notifications">${t('notifications')}</span></div>
                <div class="settings-notif-card">
                    <div class="settings-notif-top">
                        <span class="settings-notif-label" data-i18n="notifStatus">${t('notifStatus')}</span>
                        <span id="notifStatusBadge" class="notif-status-badge default"></span>
                    </div>
                    <button id="notifEnableBtn" class="notif-enable-btn" onclick="requestNotifPermission()">
                        <i class="fas fa-bell"></i> <span data-i18n="enableNotif">${t('enableNotif')}</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="settings-footer">CineLingua • v2.1</div>
    </div>`;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML + settingsHTML);
}

function updateSettingsUI() {
    const theme = localStorage.getItem('cl-theme') || 'light';
    const lang = currentLanguage;

    document.querySelectorAll('.settings-theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.id === `theme-${theme}`);
    });
    document.querySelectorAll('.settings-lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.id === `lang-${lang}`);
    });

    const badge = document.getElementById('notifStatusBadge');
    if (badge) {
        const perm = Notification.permission;
        badge.className = 'notif-status-badge ' + perm;
        badge.textContent = perm === 'granted' ? t('notifGranted') : perm === 'denied' ? t('notifDenied') : t('notifDefault');
    }

    refreshNotifStatus();
}

function openSettings() {
    document.getElementById('settingsOverlay').classList.add('show');
    document.getElementById('settingsPanel').classList.add('show');
}
function closeSettings() {
    document.getElementById('settingsOverlay').classList.remove('show');
    document.getElementById('settingsPanel').classList.remove('show');
}
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('show');
}

// --- 4. NOTIFICATIONS ---
async function requestNotifPermission() {
    if (!('Notification' in window)) return;
    const result = await Notification.requestPermission();
    refreshNotifStatus();
    if (result === 'granted') {
        // Trigger welcome notification
        if ('serviceWorker' in navigator) {
            const reg = await navigator.serviceWorker.ready;
            reg.showNotification('CineLingua 🎓', {
                body: currentLanguage === 'ar' ? 'تم تفعيل الإشعارات بنجاح!' : 'Notifications enabled successfully!',
                icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                vibrate: [200, 100, 200]
            });
        }
    }
}

function refreshNotifStatus() {
    const badge = document.getElementById('notifStatusBadge');
    const btn = document.getElementById('notifEnableBtn');
    if (!badge || !btn) return;

    const perm = Notification.permission;
    badge.className = 'notif-status-badge ' + perm;
    badge.textContent = perm === 'granted' ? t('notifGranted') : perm === 'denied' ? t('notifDenied') : t('notifDefault');

    if (perm === 'granted' || perm === 'denied') {
        btn.disabled = true;
        btn.querySelector('span').textContent = perm === 'granted' ? t('notifEnabled') : t('notifDenied');
    } else {
        btn.disabled = false;
        btn.querySelector('span').textContent = t('enableNotif');
    }
}

// --- 5. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    injectCommonUI();
    setTheme(localStorage.getItem('cl-theme') || 'light');
    applyLanguage(currentLanguage);
});
