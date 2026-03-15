// tenses-data.js - 12 زمن أساسي في اللغة الإنجليزية
const TENSES_DATA = [
    {
        id: 1,
        name: "Present Simple",
        nameAr: "المضارع البسيط",
        level: "beginner",
        icon: "",
        form: "Subject + Verb (s/es) + Object",
        keywords: ["always", "usually", "often", "sometimes", "never", "every day", "every week"],
        explanation: `<span class="english-text">يستخدم المضارع البسيط للتعبير عن:</span>
<span class="english-text">• حقائق عامة (The sun rises in the east)</span>
<span class="english-text">• عادات وأمور متكررة (I wake up early every day)</span>
<span class="english-text">• جداول زمنية (The train leaves at 7 pm)</span>`,
        examples: [
            {
                positive: "<span class='english-text'>I eat breakfast every morning.</span>",
                positiveAr: "<span class='arabic-text'>أتناول الفطور كل صباح.</span>",
                negative: "<span class='english-text'>I don't eat meat.</span>",
                negativeAr: "<span class='arabic-text'>أنا لا آكل اللحوم.</span>",
                question: "<span class='english-text'>Do you like coffee?</span>",
                questionAr: "<span class='arabic-text'>هل تحب القهوة؟</span>"
            },
            {
                positive: "<span class='english-text'>She works in a hospital.</span>",
                positiveAr: "<span class='arabic-text'>هي تعمل في مستشفى.</span>",
                negative: "<span class='english-text'>He doesn't speak Arabic.</span>",
                negativeAr: "<span class='arabic-text'>هو لا يتحدث العربية.</span>",
                question: "<span class='english-text'>Does he play football?</span>",
                questionAr: "<span class='arabic-text'>هل يلعب كرة القدم؟</span>"
            },
            {
                positive: "<span class='english-text'>The sun rises in the east.</span>",
                positiveAr: "<span class='arabic-text'>الشمس تشرق من الشرق.</span>",
                negative: "<span class='english-text'>Cats don't like water.</span>",
                negativeAr: "<span class='arabic-text'>القطط لا تحب الماء.</span>",
                question: "<span class='english-text'>Do birds fly south in winter?</span>",
                questionAr: "<span class='arabic-text'>هل تطير الطيور جنوباً في الشتاء؟</span>"
            }
        ],
        exercises: [
            {
                question: "<span class='english-text'>She _____ (go) to school by bus.</span>",
                options: ["go", "goes", "going", "went"],
                correct: 1,
                explanation: "<span class='english-text'>مع الفاعل المفرد (She) نضيف es للفعل</span>"
            },
            {
                question: "<span class='english-text'>They _____ (not/like) spicy food.</span>",
                options: ["don't like", "doesn't like", "not like", "no like"],
                correct: 0,
                explanation: "<span class='english-text'>في النفي مع They نستخدم don't + المصدر</span>"
            },
            {
                question: "<span class='english-text'>_____ you _____ (speak) English?</span>",
                options: ["Do/speak", "Does/speak", "Are/speaking", "Have/spoken"],
                correct: 0,
                explanation: "<span class='english-text'>في السؤال مع You نستخدم Do + الفاعل + المصدر</span>"
            }
        ]
    },
    {
        id: 2,
        name: "Present Continuous",
        nameAr: "المضارع المستمر",
        level: "beginner",
        icon: "",
        form: "Subject + am/is/are + Verb-ing",
        keywords: ["now", "right now", "at the moment", "today", "this week", "currently"],
        explanation: `<span class="english-text">يستخدم المضارع المستمر للتعبير عن:</span>
<span class="english-text">• شيء يحدث الآن (I am reading now)</span>
<span class="english-text">• خطط مستقبلية قريبة (I am meeting friends tonight)</span>
<span class="english-text">• مواقف مؤقتة (She is staying with us this week)</span>`,
        examples: [
            {
                positive: "<span class='english-text'>I am studying English now.</span>",
                positiveAr: "<span class='arabic-text'>أنا أدرس الإنجليزية الآن.</span>",
                negative: "<span class='english-text'>She is not sleeping at the moment.</span>",
                negativeAr: "<span class='arabic-text'>هي لا تنام في هذه اللحظة.</span>",
                question: "<span class='english-text'>Are you watching TV?</span>",
                questionAr: "<span class='arabic-text'>هل تشاهد التلفاز؟</span>"
            },
            {
                positive: "<span class='english-text'>They are playing football.</span>",
                positiveAr: "<span class='arabic-text'>هم يلعبون كرة القدم.</span>",
                negative: "<span class='english-text'>He isn't working today.</span>",
                negativeAr: "<span class='arabic-text'>هو لا يعمل اليوم.</span>",
                question: "<span class='english-text'>Is it raining outside?</span>",
                questionAr: "<span class='arabic-text'>هل تمطر في الخارج؟</span>"
            },
            {
                positive: "<span class='english-text'>We are waiting for the bus.</span>",
                positiveAr: "<span class='arabic-text'>نحن ننتظر الحافلة.</span>",
                negative: "<span class='english-text'>I am not feeling well.</span>",
                negativeAr: "<span class='arabic-text'>أنا لا أشعر بتحسن.</span>",
                question: "<span class='english-text'>What are you doing?</span>",
                questionAr: "<span class='arabic-text'>ماذا تفعل؟</span>"
            }
        ],
        exercises: [
            {
                question: "<span class='english-text'>She _____ (read) a book now.</span>",
                options: ["read", "reads", "is reading", "are reading"],
                correct: 2,
                explanation: "<span class='english-text'>مع She في المضارع المستمر نستخدم is + verb-ing</span>"
            },
            {
                question: "<span class='english-text'>They _____ (not/watch) TV at the moment.</span>",
                options: ["don't watch", "aren't watching", "isn't watching", "not watching"],
                correct: 1,
                explanation: "<span class='english-text'>النفي مع They: are + not + verb-ing</span>"
            },
            {
                question: "<span class='english-text'>_____ he _____ (come) to the party tonight?</span>",
                options: ["Is/coming", "Are/coming", "Does/come", "Do/come"],
                correct: 0,
                explanation: "<span class='english-text'>السؤال مع He: Is + فاعل + verb-ing</span>"
            }
        ]
    },
    {
        id: 3,
        name: "Present Perfect",
        nameAr: "المضارع التام",
        level: "intermediate",
        icon: "",
        form: "Subject + have/has + Past Participle (V3)",
        keywords: ["just", "already", "yet", "ever", "never", "since", "for", "recently"],
        explanation: `<span class="english-text">يستخدم المضارع التام للتعبير عن:</span>
<span class="english-text">• تجارب حياتية (I have visited Paris)</span>
<span class="english-text">• أحداث حدثت في الماضي ونتائجها مستمرة (I have lost my keys)</span>
<span class="english-text">• أحداث حدثت مؤخراً (She has just arrived)</span>`,
        examples: [
            {
                positive: "<span class='english-text'>I have visited London twice.</span>",
                positiveAr: "<span class='arabic-text'>لقد زرت لندن مرتين.</span>",
                negative: "<span class='english-text'>She hasn't finished her homework yet.</span>",
                negativeAr: "<span class='arabic-text'>هي لم تنه واجبها بعد.</span>",
                question: "<span class='english-text'>Have you ever tried sushi?</span>",
                questionAr: "<span class='arabic-text'>هل سبق لك أن جربت السوشي؟</span>"
            },
            {
                positive: "<span class='english-text'>He has just left the office.</span>",
                positiveAr: "<span class='arabic-text'>لقد غادر المكتب للتو.</span>",
                negative: "<span class='english-text'>We haven't seen that movie.</span>",
                negativeAr: "<span class='arabic-text'>لم نشاهد ذلك الفيلم.</span>",
                question: "<span class='english-text'>Has she called you?</span>",
                questionAr: "<span class='arabic-text'>هل اتصلت بك؟</span>"
            },
            {
                positive: "<span class='english-text'>They have lived here for 10 years.</span>",
                positiveAr: "<span class='arabic-text'>لقد عاشوا هنا لمدة 10 سنوات.</span>",
                negative: "<span class='english-text'>I haven't eaten anything today.</span>",
                negativeAr: "<span class='arabic-text'>لم آكل أي شيء اليوم.</span>",
                question: "<span class='english-text'>Have you finished your work?</span>",
                questionAr: "<span class='arabic-text'>هل أنهيت عملك؟</span>"
            }
        ],
        exercises: [
            {
                question: "<span class='english-text'>She _____ (visit) Paris three times.</span>",
                options: ["visited", "has visited", "have visited", "visits"],
                correct: 1,
                explanation: "<span class='english-text'>مع She في المضارع التام نستخدم has + التصريف الثالث</span>"
            },
            {
                question: "<span class='english-text'>I _____ (not/see) that movie yet.</span>",
                options: ["didn't see", "haven't seen", "hasn't seen", "don't see"],
                correct: 1,
                explanation: "<span class='english-text'>النفي مع I: have + not + التصريف الثالث</span>"
            },
            {
                question: "<span class='english-text'>_____ you ever _____ (eat) Japanese food?</span>",
                options: ["Did/eat", "Have/eaten", "Has/eaten", "Do/eat"],
                correct: 1,
                explanation: "<span class='english-text'>السؤال عن التجارب: Have + فاعل + التصريف الثالث</span>"
            }
        ]
    },
    {
        id: 4,
        name: "Present Perfect Continuous",
        nameAr: "المضارع التام المستمر",
        level: "advanced",
        icon: "",
        form: "Subject + have/has + been + Verb-ing",
        keywords: ["for", "since", "all day", "recently", "lately"],
        explanation: `<span class="english-text">يستخدم المضارع التام المستمر للتعبير عن:</span>
<span class="english-text">• أفعال بدأت في الماضي وما زالت مستمرة (I have been studying for 3 hours)</span>
<span class="english-text">• أفعال انتهت مؤخراً ولها تأثير على الحاضر (She is tired because she has been working)</span>`,
        examples: [
            {
                positive: "<span class='english-text'>I have been waiting for an hour.</span>",
                positiveAr: "<span class='arabic-text'>أنا أنتظر منذ ساعة.</span>",
                negative: "<span class='english-text'>She hasn't been feeling well lately.</span>",
                negativeAr: "<span class='arabic-text'>هي لم تشعر بتحسن مؤخراً.</span>",
                question: "<span class='english-text'>Have you been studying all day?</span>",
                questionAr: "<span class='arabic-text'>هل كنت تدرس طوال اليوم؟</span>"
            },
            {
                positive: "<span class='english-text'>They have been living here since 2020.</span>",
                positiveAr: "<span class='arabic-text'>هم يعيشون هنا منذ 2020.</span>",
                negative: "<span class='english-text'>It hasn't been raining recently.</span>",
                negativeAr: "<span class='arabic-text'>لم تمطر مؤخراً.</span>",
                question: "<span class='english-text'>Has he been working here long?</span>",
                questionAr: "<span class='arabic-text'>هل يعمل هنا منذ فترة طويلة؟</span>"
            },
            {
                positive: "<span class='english-text'>We have been learning English for 2 years.</span>",
                positiveAr: "<span class='arabic-text'>نحن نتعلم الإنجليزية منذ سنتين.</span>",
                negative: "<span class='english-text'>I haven't been sleeping well.</span>",
                negativeAr: "<span class='arabic-text'>لم أنم جيداً.</span>",
                question: "<span class='english-text'>How long have you been waiting?</span>",
                questionAr: "<span class='arabic-text'>منذ متى وأنت تنتظر؟</span>"
            }
        ],
        exercises: [
            {
                question: "<span class='english-text'>She _____ (study) for 3 hours.</span>",
                options: ["has been studying", "have been studying", "is studying", "studies"],
                correct: 0,
                explanation: "<span class='english-text'>مع She: has + been + verb-ing</span>"
            },
            {
                question: "<span class='english-text'>They _____ (not/work) here very long.</span>",
                options: ["haven't been working", "hasn't been working", "aren't working", "don't work"],
                correct: 0,
                explanation: "<span class='english-text'>النفي مع They: have + not + been + verb-ing</span>"
            },
            {
                question: "<span class='english-text'>How long _____ you _____ (wait)?</span>",
                options: ["have/been waiting", "has/been waiting", "are/waiting", "do/wait"],
                correct: 0,
                explanation: "<span class='english-text'>السؤال: How long + have + فاعل + been + verb-ing</span>"
            }
        ]
    },
    {
        id: 5,
        name: "Past Simple",
        nameAr: "الماضي البسيط",
        level: "beginner",
        icon: "",
        form: "Subject + Verb (V2) + Object",
        keywords: ["yesterday", "last week", "ago", "in 2020", "when I was young"],
        explanation: `<span class="english-text">يستخدم الماضي البسيط للتعبير عن:</span>
<span class="english-text">• أحداث انتهت في الماضي (I visited my grandmother yesterday)</span>
<span class="english-text">• عادات في الماضي (I played football when I was a child)</span>
<span class="english-text">• سلسلة من الأحداث في الماضي (I woke up, ate breakfast, and left)</span>`,
        examples: [
            {
                positive: "<span class='english-text'>I visited my grandmother yesterday.</span>",
                positiveAr: "<span class='arabic-text'>زرت جدتي أمس.</span>",
                negative: "<span class='english-text'>She didn't come to the party.</span>",
                negativeAr: "<span class='arabic-text'>هي لم تأت إلى الحفلة.</span>",
                question: "<span class='english-text'>Did you see the movie?</span>",
                questionAr: "<span class='arabic-text'>هل رأيت الفيلم؟</span>"
            },
            {
                positive: "<span class='english-text'>They went to Paris last summer.</span>",
                positiveAr: "<span class='arabic-text'>ذهبوا إلى باريس الصيف الماضي.</span>",
                negative: "<span class='english-text'>He didn't finish his homework.</span>",
                negativeAr: "<span class='arabic-text'>هو لم ينه واجبه.</span>",
                question: "<span class='english-text'>What did you eat for dinner?</span>",
                questionAr: "<span class='arabic-text'>ماذا أكلت على العشاء؟</span>"
            },
            {
                positive: "<span class='english-text'>We bought a new car.</span>",
                positiveAr: "<span class='arabic-text'>اشترينا سيارة جديدة.</span>",
                negative: "<span class='english-text'>I didn't sleep well last night.</span>",
                negativeAr: "<span class='arabic-text'>لم أنم جيداً الليلة الماضية.</span>",
                question: "<span class='english-text'>Did they arrive on time?</span>",
                questionAr: "<span class='arabic-text'>هل وصلوا في الوقت المحدد؟</span>"
            }
        ],
        exercises: [
            {
                question: "<span class='english-text'>She _____ (go) to the cinema last night.</span>",
                options: ["go", "goes", "went", "gone"],
                correct: 2,
                explanation: "<span class='english-text'>في الماضي البسيط مع الأفعال الشاذة نستخدم التصريف الثاني</span>"
            },
            {
                question: "<span class='english-text'>They _____ (not/see) the accident.</span>",
                options: ["didn't saw", "didn't see", "not saw", "don't see"],
                correct: 1,
                explanation: "<span class='english-text'>النفي: did + not + المصدر</span>"
            },
            {
                question: "<span class='english-text'>_____ you _____ (call) me yesterday?</span>",
                options: ["Did/call", "Did/called", "Have/called", "Were/calling"],
                correct: 0,
                explanation: "<span class='english-text'>السؤال: Did + فاعل + المصدر</span>"
            }
        ]
    },
    {
        id: 6,
        name: "Past Continuous",
        nameAr: "الماضي المستمر",
        level: "intermediate",
        icon: "",
        form: "Subject + was/were + Verb-ing",
        keywords: ["while", "when", "at 8pm last night", "at that time", "all day yesterday"],
        explanation: `<span class="english-text">يستخدم الماضي المستمر للتعبير عن:</span>
<span class="english-text">• حدث كان مستمراً في وقت محدد في الماضي (I was watching TV at 8pm)</span>
<span class="english-text">• حدثين كانا يحدثان في نفس الوقت في الماضي (While I was cooking, he was reading)</span>
<span class="english-text">• حدث طويل قطعه حدث قصير (I was sleeping when the phone rang)</span>`,
        examples: [
            {
                positive: "<span class='english-text'>I was watching TV at 8pm last night.</span>",
                positiveAr: "<span class='arabic-text'>كنت أشاهد التلفاز الساعة 8 مساء أمس.</span>",
                negative: "<span class='english-text'>She wasn't sleeping when I called.</span>",
                negativeAr: "<span class='arabic-text'>لم تكن نائمة عندما اتصلت.</span>",
                question: "<span class='english-text'>What were you doing at 9pm?</span>",
                questionAr: "<span class='arabic-text'>ماذا كنت تفعل الساعة 9 مساء؟</span>"
            },
            {
                positive: "<span class='english-text'>They were playing football when it started raining.</span>",
                positiveAr: "<span class='arabic-text'>كانوا يلعبون كرة القدم عندما بدأ المطر.</span>",
                negative: "<span class='english-text'>He wasn't listening to the teacher.</span>",
                negativeAr: "<span class='arabic-text'>لم يكن يستمع للمعلم.</span>",
                question: "<span class='english-text'>Were you sleeping when I called?</span>",
                questionAr: "<span class='arabic-text'>هل كنت نائماً عندما اتصلت؟</span>"
            },
            {
                positive: "<span class='english-text'>While I was cooking, he was reading.</span>",
                positiveAr: "<span class='arabic-text'>بينما كنت أطبخ، كان هو يقرأ.</span>",
                negative: "<span class='english-text'>We weren't expecting this news.</span>",
                negativeAr: "<span class='arabic-text'>لم نكن نتوقع هذه الأخبار.</span>",
                question: "<span class='english-text'>Was it raining when you left?</span>",
                questionAr: "<span class='arabic-text'>هل كانت تمطر عندما غادرت؟</span>"
            }
        ],
        exercises: [
            {
                question: "<span class='english-text'>I _____ (watch) TV when you called.</span>",
                options: ["watched", "was watching", "were watching", "have watched"],
                correct: 1,
                explanation: "<span class='english-text'>حدث طويل قطعه حدث قصير: was/were + verb-ing</span>"
            },
            {
                question: "<span class='english-text'>They _____ (not/sleep) at midnight.</span>",
                options: ["didn't sleep", "weren't sleeping", "wasn't sleeping", "not sleeping"],
                correct: 1,
                explanation: "<span class='english-text'>النفي مع They: were + not + verb-ing</span>"
            },
            {
                question: "<span class='english-text'>What _____ you _____ (do) at 8pm?</span>",
                options: ["were/doing", "was/doing", "did/do", "have/done"],
                correct: 0,
                explanation: "<span class='english-text'>السؤال: What + were + فاعل + verb-ing</span>"
            }
        ]
    },
    {
        id: 7,
        name: "Past Perfect",
        nameAr: "الماضي التام",
        level: "advanced",
        icon: "",
        form: "Subject + had + Past Participle (V3)",
        keywords: ["before", "after", "by the time", "already", "never", "until then"],
        explanation: `<span class="english-text">يستخدم الماضي التام للتعبير عن:</span>
<span class="english-text">• حدث وقع قبل حدث آخر في الماضي (When I arrived, the train had left)</span>
<span class="english-text">• حدث انتهى قبل وقت محدد في الماضي (She had finished her work by 6pm)</span>`,
        examples: [
            {
                positive: "<span class='english-text'>When I arrived, they had already left.</span>",
                positiveAr: "<span class='arabic-text'>عندما وصلت، كانوا قد غادروا بالفعل.</span>",
                negative: "<span class='english-text'>She hadn't finished her homework before dinner.</span>",
                negativeAr: "<span class='arabic-text'>هي لم تكن قد أنهت واجبها قبل العشاء.</span>",
                question: "<span class='english-text'>Had you ever visited London before?</span>",
                questionAr: "<span class='arabic-text'>هل سبق لك أن زرت لندن من قبل؟</span>"
            },
            {
                positive: "<span class='english-text'>He had studied English before moving to the US.</span>",
                positiveAr: "<span class='arabic-text'>كان قد درس الإنجليزية قبل الانتقال إلى أمريكا.</span>",
                negative: "<span class='english-text'>I hadn't eaten anything all day.</span>",
                negativeAr: "<span class='arabic-text'>لم أكن قد أكلت أي شيء طوال اليوم.</span>",
                question: "<span class='english-text'>Had she called you before you left?</span>",
                questionAr: "<span class='arabic-text'>هل كانت قد اتصلت بك قبل أن تغادر؟</span>"
            },
            {
                positive: "<span class='english-text'>By the time we arrived, the movie had started.</span>",
                positiveAr: "<span class='arabic-text'>عندما وصلنا، كان الفيلم قد بدأ.</span>",
                negative: "<span class='english-text'>They hadn't seen each other for years.</span>",
                negativeAr: "<span class='arabic-text'>لم يكونوا قد رأوا بعضهم منذ سنوات.</span>",
                question: "<span class='english-text'>What had you done before that?</span>",
                questionAr: "<span class='arabic-text'>ماذا كنت قد فعلت قبل ذلك؟</span>"
            }
        ],
        exercises: [
            {
                question: "<span class='english-text'>When I arrived, they _____ (already/leave).</span>",
                options: ["already left", "had already left", "have already left", "were already leaving"],
                correct: 1,
                explanation: "<span class='english-text'>حدث قبل حدث آخر في الماضي: had + التصريف الثالث</span>"
            },
            {
                question: "<span class='english-text'>She _____ (not/finish) her work by 5pm.</span>",
                options: ["didn't finish", "hadn't finished", "hasn't finished", "wasn't finishing"],
                correct: 1,
                explanation: "<span class='english-text'>النفي: had + not + التصريف الثالث</span>"
            },
            {
                question: "<span class='english-text'>_____ you _____ (see) that movie before?</span>",
                options: ["Did/see", "Had/seen", "Have/seen", "Were/seeing"],
                correct: 1,
                explanation: "<span class='english-text'>السؤال عن تجربة قبل وقت محدد في الماضي</span>"
            }
        ]
    },
    {
        id: 8,
        name: "Past Perfect Continuous",
        nameAr: "الماضي التام المستمر",
        level: "advanced",
        icon: "",
        form: "Subject + had + been + Verb-ing",
        keywords: ["for", "since", "before", "until", "all day", "for hours"],
        explanation: `<span class="english-text">يستخدم الماضي التام المستمر للتعبير عن:</span>
<span class="english-text">• حدث كان مستمراً لفترة قبل حدث آخر في الماضي (They had been waiting for an hour when the bus arrived)</span>
<span class="english-text">• سبب لشيء في الماضي (She was tired because she had been working)</span>`,
        examples: [
            {
                positive: "<span class='english-text'>They had been waiting for an hour when the bus arrived.</span>",
                positiveAr: "<span class='arabic-text'>كانوا ينتظرون لمدة ساعة عندما وصلت الحافلة.</span>",
                negative: "<span class='english-text'>She hadn't been feeling well before the exam.</span>",
                negativeAr: "<span class='arabic-text'>لم تكن تشعر بتحسن قبل الامتحان.</span>",
                question: "<span class='english-text'>Had you been studying long before the test?</span>",
                questionAr: "<span class='arabic-text'>هل كنت تدرس لفترة طويلة قبل الاختبار؟</span>"
            },
            {
                positive: "<span class='english-text'>He was tired because he had been working all day.</span>",
                positiveAr: "<span class='arabic-text'>كان متعباً لأنه كان يعمل طوال اليوم.</span>",
                negative: "<span class='english-text'>It hadn't been raining before we left.</span>",
                negativeAr: "<span class='arabic-text'>لم تكن تمطر قبل أن نغادر.</span>",
                question: "<span class='english-text'>How long had they been living there?</span>",
                questionAr: "<span class='arabic-text'>منذ متى كانوا يعيشون هناك؟</span>"
            },
            {
                positive: "<span class='english-text'>I had been reading for two hours when you called.</span>",
                positiveAr: "<span class='arabic-text'>كنت أقرأ لمدة ساعتين عندما اتصلت.</span>",
                negative: "<span class='english-text'>We hadn't been waiting long before they arrived.</span>",
                negativeAr: "<span class='arabic-text'>لم نكن ننتظر طويلاً قبل أن يصلوا.</span>",
                question: "<span class='english-text'>Had she been working here long?</span>",
                questionAr: "<span class='arabic-text'>هل كانت تعمل هنا منذ فترة طويلة؟</span>"
            }
        ],
        exercises: [
            {
                question: "<span class='english-text'>They _____ (wait) for 30 minutes when the train arrived.</span>",
                options: ["waited", "had been waiting", "were waiting", "have been waiting"],
                correct: 1,
                explanation: "<span class='english-text'>حدث مستمر قبل حدث آخر: had + been + verb-ing</span>"
            },
            {
                question: "<span class='english-text'>She was tired because she _____ (work) all day.</span>",
                options: ["worked", "had been working", "was working", "has been working"],
                correct: 1,
                explanation: "<span class='english-text'>سبب لشيء في الماضي: had + been + verb-ing</span>"
            },
            {
                question: "<span class='english-text'>How long _____ you _____ (wait) before the bus came?</span>",
                options: ["had/been waiting", "have/been waiting", "were/waiting", "did/wait"],
                correct: 0,
                explanation: "<span class='english-text'>السؤال: How long + had + فاعل + been + verb-ing</span>"
            }
        ]
    },
    {
        id: 9,
        name: "Future Simple",
        nameAr: "المستقبل البسيط",
        level: "beginner",
        icon: "",
        form: "Subject + will + Verb (base form)",
        keywords: ["tomorrow", "next week", "soon", "in the future", "later"],
        explanation: `<span class="english-text">يستخدم المستقبل البسيط للتعبير عن:</span>
<span class="english-text">• قرارات لحظية (I'll answer the phone)</span>
<span class="english-text">• توقعات (It will rain tomorrow)</span>
<span class="english-text">• وعود (I will help you)</span>
<span class="english-text">• حقائق مستقبلية (The sun will rise at 6am)</span>`,
        examples: [
            {
                positive: "<span class='english-text'>I will call you tomorrow.</span>",
                positiveAr: "<span class='arabic-text'>سأتصل بك غداً.</span>",
                negative: "<span class='english-text'>She won't come to the party.</span>",
                negativeAr: "<span class='arabic-text'>هي لن تأتي إلى الحفلة.</span>",
                question: "<span class='english-text'>Will you be there?</span>",
                questionAr: "<span class='arabic-text'>هل ستكون هناك؟</span>"
            },
            {
                positive: "<span class='english-text'>They will arrive at 8pm.</span>",
                positiveAr: "<span class='arabic-text'>سيصلون الساعة 8 مساء.</span>",
                negative: "<span class='english-text'>He won't like this movie.</span>",
                negativeAr: "<span class='arabic-text'>هو لن يعجبه هذا الفيلم.</span>",
                question: "<span class='english-text'>What will you do tomorrow?</span>",
                questionAr: "<span class='arabic-text'>ماذا ستفعل غداً؟</span>"
            },
            {
                positive: "<span class='english-text'>I think it will rain later.</span>",
                positiveAr: "<span class='arabic-text'>أعتقد أنها ستمطر لاحقاً.</span>",
                negative: "<span class='english-text'>We won't be late.</span>",
                negativeAr: "<span class='arabic-text'>لن نتأخر.</span>",
                question: "<span class='english-text'>When will they arrive?</span>",
                questionAr: "<span class='arabic-text'>متى سيصلون؟</span>"
            }
        ],
        exercises: [
            {
                question: "<span class='english-text'>I _____ (call) you later.</span>",
                options: ["call", "will call", "am calling", "going to call"],
                correct: 1,
                explanation: "<span class='english-text'>في المستقبل البسيط نستخدم will + المصدر</span>"
            },
            {
                question: "<span class='english-text'>She _____ (not/come) to the meeting.</span>",
                options: ["won't come", "doesn't come", "isn't coming", "not come"],
                correct: 0,
                explanation: "<span class='english-text'>النفي: will + not = won't + المصدر</span>"
            },
            {
                question: "<span class='english-text'>_____ they _____ (arrive) on time?</span>",
                options: ["Will/arrive", "Do/arrive", "Are/arriving", "Have/arrived"],
                correct: 0,
                explanation: "<span class='english-text'>السؤال: Will + فاعل + المصدر</span>"
            }
        ]
    },
    {
        id: 10,
        name: "Future Continuous",
        nameAr: "المستقبل المستمر",
        level: "intermediate",
        icon: "",
        form: "Subject + will + be + Verb-ing",
        keywords: ["at this time tomorrow", "this time next week", "in the future"],
        explanation: `<span class="english-text">يستخدم المستقبل المستمر للتعبير عن:</span>
<span class="english-text">• حدث سيكون مستمراً في وقت محدد في المستقبل (I will be sleeping at midnight)</span>
<span class="english-text">• أحداث مستقبلية مؤكدة (She will be arriving tomorrow)</span>`,
        examples: [
            {
                positive: "<span class='english-text'>I will be sleeping at midnight.</span>",
                positiveAr: "<span class='arabic-text'>سأكون نائماً عند منتصف الليل.</span>",
                negative: "<span class='english-text'>She won't be working tomorrow.</span>",
                negativeAr: "<span class='arabic-text'>لن تكون تعمل غداً.</span>",
                question: "<span class='english-text'>Will you be using the car tonight?</span>",
                questionAr: "<span class='arabic-text'>هل ستستخدم السيارة الليلة؟</span>"
            },
            {
                positive: "<span class='english-text'>This time next week, I'll be flying to Paris.</span>",
                positiveAr: "<span class='arabic-text'>في مثل هذا الوقت الأسبوع القادم، سأكون مسافراً إلى باريس.</span>",
                negative: "<span class='english-text'>He won't be joining us for dinner.</span>",
                negativeAr: "<span class='arabic-text'>لن ينضم إلينا على العشاء.</span>",
                question: "<span class='english-text'>What will you be doing at 8pm?</span>",
                questionAr: "<span class='arabic-text'>ماذا ستفعل الساعة 8 مساء؟</span>"
            },
            {
                positive: "<span class='english-text'>They will be waiting for us at the airport.</span>",
                positiveAr: "<span class='arabic-text'>سيكونون في انتظارنا في المطار.</span>",
                negative: "<span class='english-text'>I won't be attending the meeting.</span>",
                negativeAr: "<span class='arabic-text'>لن أحضر الاجتماع.</span>",
                question: "<span class='english-text'>Will she be coming to the party?</span>",
                questionAr: "<span class='arabic-text'>هل ستأتي إلى الحفلة؟</span>"
            }
        ],
        exercises: [
            {
                question: "<span class='english-text'>At 8pm, I _____ (watch) a movie.</span>",
                options: ["will watch", "will be watching", "am watching", "watch"],
                correct: 1,
                explanation: "<span class='english-text'>حدث مستمر في وقت محدد في المستقبل: will + be + verb-ing</span>"
            },
            {
                question: "<span class='english-text'>She _____ (not/work) tomorrow.</span>",
                options: ["won't work", "won't be working", "isn't working", "doesn't work"],
                correct: 1,
                explanation: "<span class='english-text'>النفي: will + not + be + verb-ing</span>"
            },
            {
                question: "<span class='english-text'>What _____ you _____ (do) at 10am?</span>",
                options: ["will/do", "will/be doing", "are/doing", "do/do"],
                correct: 1,
                explanation: "<span class='english-text'>السؤال: What + will + فاعل + be + verb-ing</span>"
            }
        ]
    },
    {
        id: 11,
        name: "Future Perfect",
        nameAr: "المستقبل التام",
        level: "advanced",
        icon: "",
        form: "Subject + will + have + Past Participle (V3)",
        keywords: ["by", "by the time", "before", "in two years"],
        explanation: `<span class="english-text">يستخدم المستقبل التام للتعبير عن:</span>
<span class="english-text">• حدث سينتهي قبل وقت محدد في المستقبل (I will have finished my work by 5pm)</span>
<span class="english-text">• إنجازات مستقبلية (By next year, I will have graduated)</span>`,
        examples: [
            {
                positive: "<span class='english-text'>I will have finished my work by 5pm.</span>",
                positiveAr: "<span class='arabic-text'>سأكون قد أنهيت عملي بحلول الساعة 5 مساء.</span>",
                negative: "<span class='english-text'>She won't have arrived by then.</span>",
                negativeAr: "<span class='arabic-text'>لن تكون قد وصلت بحلول ذلك الوقت.</span>",
                question: "<span class='english-text'>Will you have finished before dinner?</span>",
                questionAr: "<span class='arabic-text'>هل ستكون قد انتهيت قبل العشاء؟</span>"
            },
            {
                positive: "<span class='english-text'>By next month, I will have saved enough money.</span>",
                positiveAr: "<span class='arabic-text'>بحلول الشهر القادم، سأكون قد وفرت ما يكفي من المال.</span>",
                negative: "<span class='english-text'>They won't have built the house by winter.</span>",
                negativeAr: "<span class='arabic-text'>لن يكونوا قد بنوا المنزل بحلول الشتاء.</span>",
                question: "<span class='english-text'>How many books will you have read by the end of the year?</span>",
                questionAr: "<span class='arabic-text'>كم كتاباً ستكون قد قرأت بنهاية العام؟</span>"
            },
            {
                positive: "<span class='english-text'>She will have graduated by 2025.</span>",
                positiveAr: "<span class='arabic-text'>ستكون قد تخرجت بحلول 2025.</span>",
                negative: "<span class='english-text'>I won't have finished the project by Friday.</span>",
                negativeAr: "<span class='arabic-text'>لن أكون قد أنهيت المشروع بحلول الجمعة.</span>",
                question: "<span class='english-text'>Will they have arrived before the meeting starts?</span>",
                questionAr: "<span class='arabic-text'>هل سيكونون قد وصلوا قبل بدء الاجتماع؟</span>"
            }
        ],
        exercises: [
            {
                question: "<span class='english-text'>By 6pm, I _____ (finish) my homework.</span>",
                options: ["will finish", "will have finished", "have finished", "finish"],
                correct: 1,
                explanation: "<span class='english-text'>حدث سينتهي قبل وقت محدد في المستقبل: will + have + التصريف الثالث</span>"
            },
            {
                question: "<span class='english-text'>She _____ (not/arrive) by the time we leave.</span>",
                options: ["won't arrive", "won't have arrived", "hasn't arrived", "doesn't arrive"],
                correct: 1,
                explanation: "<span class='english-text'>النفي: will + not + have + التصريف الثالث</span>"
            },
            {
                question: "<span class='english-text'>_____ you _____ (finish) the report by Friday?</span>",
                options: ["Will/have finished", "Will/finish", "Have/finished", "Are/finishing"],
                correct: 0,
                explanation: "<span class='english-text'>السؤال: Will + فاعل + have + التصريف الثالث</span>"
            }
        ]
    },
    {
        id: 12,
        name: "Future Perfect Continuous",
        nameAr: "المستقبل التام المستمر",
        level: "advanced",
        icon: "",
        form: "Subject + will + have + been + Verb-ing",
        keywords: ["by", "for", "by the time", "for years"],
        explanation: `<span class="english-text">يستخدم المستقبل التام المستمر للتعبير عن:</span>
<span class="english-text">• حدث سيكون قد استمر لفترة قبل وقت محدد في المستقبل (By December, I will have been working here for 5 years)</span>
<span class="english-text">• مدة حدث مستقبلي (She will have been studying for 3 hours by the time we arrive)</span>`,
        examples: [
            {
                positive: "<span class='english-text'>By December, I will have been working here for 5 years.</span>",
                positiveAr: "<span class='arabic-text'>بحلول ديسمبر، سأكون قد عملت هنا لمدة 5 سنوات.</span>",
                negative: "<span class='english-text'>She won't have been waiting long by the time we arrive.</span>",
                negativeAr: "<span class='arabic-text'>لن تكون قد انتظرت طويلاً بحلول وقت وصولنا.</span>",
                question: "<span class='english-text'>How long will you have been studying English by next year?</span>",
                questionAr: "<span class='arabic-text'>كم من الوقت ستكون قد درست الإنجليزية بحلول العام القادم؟</span>"
            },
            {
                positive: "<span class='english-text'>By 2025, they will have been living here for a decade.</span>",
                positiveAr: "<span class='arabic-text'>بحلول 2025، سيكونوا قد عاشوا هنا لمدة عقد.</span>",
                negative: "<span class='english-text'>I won't have been sleeping long when you call.</span>",
                negativeAr: "<span class='arabic-text'>لن أكون قد نمت طويلاً عندما تتصل.</span>",
                question: "<span class='english-text'>Will you have been working here for 10 years by 2025?</span>",
                questionAr: "<span class='arabic-text'>هل ستكون قد عملت هنا لمدة 10 سنوات بحلول 2025؟</span>"
            },
            {
                positive: "<span class='english-text'>By the time we arrive, she will have been cooking for hours.</span>",
                positiveAr: "<span class='arabic-text'>بحلول وقت وصولنا، ستكون قد طبخت لساعات.</span>",
                negative: "<span class='english-text'>They won't have been traveling for long before they stop.</span>",
                negativeAr: "<span class='arabic-text'>لن يكونوا قد سافروا طويلاً قبل أن يتوقفوا.</span>",
                question: "<span class='english-text'>How long will they have been waiting by the time the bus comes?</span>",
                questionAr: "<span class='arabic-text'>كم من الوقت سيكونون قد انتظروا بحلول وقت وصول الحافلة؟</span>"
            }
        ],
        exercises: [
            {
                question: "<span class='english-text'>By next month, I _____ (work) here for 2 years.</span>",
                options: ["will have been working", "will work", "will have worked", "have been working"],
                correct: 0,
                explanation: "<span class='english-text'>حدث سيستمر حتى وقت محدد في المستقبل: will + have + been + verb-ing</span>"
            },
            {
                question: "<span class='english-text'>She _____ (not/live) here long by then.</span>",
                options: ["won't have been living", "won't live", "hasn't lived", "doesn't live"],
                correct: 0,
                explanation: "<span class='english-text'>النفي: will + not + have + been + verb-ing</span>"
            },
            {
                question: "<span class='english-text'>How long _____ you _____ (study) by the time the exam starts?</span>",
                options: ["will/have been studying", "will/study", "have/studied", "are/studying"],
                correct: 0,
                explanation: "<span class='english-text'>السؤال عن المدة: How long + will + فاعل + have + been + verb-ing</span>"
            }
        ]
    }
];

// دوال المساعدة
function getTensesByLevel(level) {
    if (level === 'all') return TENSES_DATA;
    return TENSES_DATA.filter(tense => tense.level === level);
}

function getTenseById(id) {
    return TENSES_DATA.find(tense => tense.id === id);
}

function getSavedTenses(savedIds) {
    return TENSES_DATA.filter(tense => savedIds.includes(tense.id));
}

// التحقق من التحميل
console.log('✅ tenses-data.js loaded with', TENSES_DATA.length, 'أزمنة');
