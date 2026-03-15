// words-data.js - الملف الرئيسي الذي يجمع بيانات المستويات الثلاثة
// تأكد من تحميل beginner-data.js, intermediate-data.js, advanced-data.js قبل هذا الملف

// دمج البيانات من الملفات الثلاثة
const WORDS_DATA = {
    beginner: typeof BEGINNER_WORDS !== 'undefined' ? BEGINNER_WORDS : [],
    intermediate: typeof INTERMEDIATE_WORDS !== 'undefined' ? INTERMEDIATE_WORDS : [],
    advanced: typeof ADVANCED_WORDS !== 'undefined' ? ADVANCED_WORDS : []
};

// التحقق من التحميل
console.log('✅ WORDS_DATA الرئيسي تم تحميله');
console.log('📊 إجمالي الكلمات:',
    (WORDS_DATA.beginner?.length || 0) +
    (WORDS_DATA.intermediate?.length || 0) +
    (WORDS_DATA.advanced?.length || 0), 'كلمة'
);
console.log('📊 توزيع المستويات:', {
    مبتدئ: WORDS_DATA.beginner?.length || 0,
    متوسط: WORDS_DATA.intermediate?.length || 0,
    متقدم: WORDS_DATA.advanced?.length || 0
});

// دوال المساعدة (Helper Functions)
function getWordsByLevel(level) {
    return WORDS_DATA[level] || [];
}

function searchWords(query) {
    query = query.toLowerCase();
    let results = [];

    for (let level in WORDS_DATA) {
        const matches = WORDS_DATA[level].filter(item =>
            item.word.toLowerCase().includes(query) ||
            item.arabic.includes(query)
        );
        results = results.concat(matches);
    }

    return results;
}

function getRandomWord() {
    const allWords = [...WORDS_DATA.beginner, ...WORDS_DATA.intermediate, ...WORDS_DATA.advanced];
    return allWords[Math.floor(Math.random() * allWords.length)];
}

function getRandomWordByLevel(level) {
    const words = WORDS_DATA[level] || [];
    return words[Math.floor(Math.random() * words.length)];
}

function getRandomWordByCategory(category) {
    const allWords = [...WORDS_DATA.beginner, ...WORDS_DATA.intermediate, ...WORDS_DATA.advanced];
    const filtered = allWords.filter(word => word.category === category);
    return filtered[Math.floor(Math.random() * filtered.length)];
}

function getAllCategories() {
    const categories = new Set();

    for (let level in WORDS_DATA) {
        WORDS_DATA[level].forEach(word => {
            if (word.category) categories.add(word.category);
        });
    }

    return Array.from(categories).sort();
}

function getWordsByCategory(category) {
    let results = [];

    for (let level in WORDS_DATA) {
        const matches = WORDS_DATA[level].filter(word => word.category === category);
        results = results.concat(matches);
    }

    return results;
}

function getStats() {
    return {
        total: (WORDS_DATA.beginner?.length || 0) +
               (WORDS_DATA.intermediate?.length || 0) +
               (WORDS_DATA.advanced?.length || 0),
        beginner: WORDS_DATA.beginner?.length || 0,
        intermediate: WORDS_DATA.intermediate?.length || 0,
        advanced: WORDS_DATA.advanced?.length || 0,
        categories: getAllCategories().length
    };
}

// تصدير للاستخدام في المتصفح
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        WORDS_DATA,
        getWordsByLevel,
        searchWords,
        getRandomWord,
        getRandomWordByLevel,
        getRandomWordByCategory,
        getAllCategories,
        getWordsByCategory,
        getStats
    };
    }
