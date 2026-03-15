const GRAMMAR_DATA = [
  // ===== ARTICLES =====
  {id:1, cat:"articles", title:"A / An", sub:"نكرة — للمفرد", color:"#6366f1",
   rule:"نستخدم A قبل الأصوات الساكنة، و An قبل الأصوات المتحركة (a, e, i, o, u).",
   formula:"a + consonant sound | an + vowel sound",
   examples:[
     {en:"I have a cat.",ar:"لدي قطة."},
     {en:"She is an engineer.",ar:"هي مهندسة."},
     {en:"He ate an apple.",ar:"أكل تفاحة."},
     {en:"It was a unique idea.",ar:"كانت فكرة فريدة."},
   ],
   tip:"a unique — تُنطق 'yu' فهي صوت ساكن.",
   tags:["مبتدئ"]},

  {id:2, cat:"articles", title:"The", sub:"معرّف — للمعلوم", color:"#6366f1",
   rule:"نستخدم The مع الأسماء المحددة أو التي سبق ذكرها أو المعروفة للجميع.",
   formula:"the + specific noun",
   examples:[
     {en:"The sun rises in the east.",ar:"الشمس تشرق في الشرق."},
     {en:"Close the door please.",ar:"أغلق الباب من فضلك."},
     {en:"I saw a dog. The dog was big.",ar:"رأيت كلباً. الكلب كان ضخماً."},
     {en:"The Nile is the longest river.",ar:"النيل هو أطول نهر."},
   ],
   tip:"لا نستخدم The مع البلدان عادةً، إلا الجمع: the USA.",
   tags:["مبتدئ"]},

  // ===== PREPOSITIONS =====
  {id:3, cat:"prepositions", title:"In / On / At — الزمان", sub:"حروف الجر للوقت", color:"#ec4899",
   rule:"In للشهر والسنة والفصل، On لليوم والتاريخ، At للوقت المحدد.",
   formula:"in + month/year | on + day/date | at + time",
   examples:[
     {en:"I was born in 1999.",ar:"وُلدت في عام 1999."},
     {en:"The meeting is on Monday.",ar:"الاجتماع يوم الاثنين."},
     {en:"She arrives at 8 AM.",ar:"تصل الساعة 8 صباحاً."},
     {en:"It snows in winter.",ar:"تثلج في الشتاء."},
   ],
   tip:"at night — الليل استثناء، نقول at وليس in.",
   tags:["مبتدئ"]},

  {id:4, cat:"prepositions", title:"In / On / At — المكان", sub:"حروف الجر للموقع", color:"#ec4899",
   rule:"At للنقطة المحددة، On للسطح، In للداخل.",
   formula:"at (point) | on (surface) | in (enclosed space)",
   examples:[
     {en:"She lives in Cairo.",ar:"تعيش في القاهرة."},
     {en:"The book is on the table.",ar:"الكتاب على الطاولة."},
     {en:"Wait for me at the door.",ar:"انتظرني عند الباب."},
     {en:"There is milk in the fridge.",ar:"يوجد حليب في الثلاجة."},
   ],
   tip:"at school / at work / at home — أماكن الروتين تأتي مع at.",
   tags:["مبتدئ"]},

  // ===== TENSES =====
  {id:5, cat:"tenses", title:"Present Simple", sub:"المضارع البسيط", color:"#10b981",
   rule:"للعادات والحقائق والروتين اليومي. مع he/she/it نضيف s أو es للفعل.",
   formula:"I/you/we/they + V1 | he/she/it + V1s",
   examples:[
     {en:"I drink coffee every morning.",ar:"أشرب القهوة كل صباح."},
     {en:"She works at a hospital.",ar:"هي تعمل في مستشفى."},
     {en:"The earth goes around the sun.",ar:"الأرض تدور حول الشمس."},
     {en:"He doesn't like spicy food.",ar:"هو لا يحب الأكل الحار."},
   ],
   tip:"Does/Do في الأسئلة، doesn't/don't في النفي.",
   tags:["مبتدئ"]},

  {id:6, cat:"tenses", title:"Present Continuous", sub:"المضارع المستمر", color:"#10b981",
   rule:"لما يحدث الآن في لحظة الكلام، أو في المستقبل القريب المخطط.",
   formula:"am/is/are + verb-ing",
   examples:[
     {en:"I am studying right now.",ar:"أنا أدرس الآن."},
     {en:"She is talking on the phone.",ar:"هي تتحدث على الهاتف."},
     {en:"They are leaving tomorrow.",ar:"سيغادرون غداً."},
     {en:"What are you doing?",ar:"ماذا تفعل؟"},
   ],
   tip:"الأفعال الحالة مثل know, love, want لا تأتي بصيغة ing.",
   tags:["مبتدئ"]},

  {id:7, cat:"tenses", title:"Past Simple", sub:"الماضي البسيط", color:"#10b981",
   rule:"لأحداث انتهت في وقت محدد في الماضي. الأفعال المنتظمة تأخذ ed.",
   formula:"subject + V2 (regular: +ed | irregular: V2)",
   examples:[
     {en:"I watched a movie last night.",ar:"شاهدت فيلماً أمس بالليل."},
     {en:"She went to Paris in 2022.",ar:"ذهبت إلى باريس عام 2022."},
     {en:"He didn't come to class.",ar:"لم يأتِ إلى الفصل."},
     {en:"Did you eat breakfast?",ar:"هل أكلت الفطور؟"},
   ],
   tip:"did/didn't للأسئلة والنفي — الفعل يرجع للمصدر بعدهما.",
   tags:["مبتدئ"]},

  {id:8, cat:"tenses", title:"Present Perfect", sub:"المضارع التام", color:"#10b981",
   rule:"لأحداث في الماضي لها علاقة بالحاضر، أو تجارب حياتية، أو أحداث حديثة.",
   formula:"have/has + V3 (past participle)",
   examples:[
     {en:"I have visited Japan twice.",ar:"زرت اليابان مرتين."},
     {en:"She has just finished her work.",ar:"هي انتهت للتو من عملها."},
     {en:"Have you ever eaten sushi?",ar:"هل أكلت السوشي من قبل؟"},
     {en:"He has lived here for 5 years.",ar:"يعيش هنا منذ 5 سنوات."},
   ],
   tip:"for = للمدة (for 3 years) | since = من نقطة البداية (since 2020).",
   tags:["متوسط"]},

  {id:9, cat:"tenses", title:"Future Simple", sub:"المستقبل البسيط", color:"#10b981",
   rule:"للتوقعات والوعود والقرارات الفورية والحقائق المستقبلية.",
   formula:"will + V1 (base form)",
   examples:[
     {en:"I will call you tomorrow.",ar:"سأتصل بك غداً."},
     {en:"It will rain today.",ar:"ستمطر اليوم."},
     {en:"She won't be late.",ar:"لن تتأخر."},
     {en:"Will you help me?",ar:"هل ستساعدني؟"},
   ],
   tip:"Going to للخطط المرسومة، will للقرارات اللحظية.",
   tags:["مبتدئ"]},

  // ===== CONDITIONALS =====
  {id:10, cat:"conditionals", title:"Zero Conditional", sub:"شرط — حقائق علمية", color:"#f59e0b",
   rule:"للحقائق العامة والعلمية. نتيجة ثابتة دائماً عند وقوع الشرط.",
   formula:"If + present simple, present simple",
   examples:[
     {en:"If you heat water, it boils.",ar:"إذا سخّنت الماء يغلي."},
     {en:"If it rains, the ground gets wet.",ar:"إذا أمطرت تبتل الأرض."},
     {en:"Plants die if they don't get water.",ar:"النباتات تموت إن لم تحصل على ماء."},
     {en:"If you mix red and blue, you get purple.",ar:"إذا خلطت الأحمر والأزرق تحصل على البنفسجي."},
   ],
   tip:"يمكن استخدام When بدل If في الشرط الصفري.",
   tags:["متوسط"]},

  {id:11, cat:"conditionals", title:"First Conditional", sub:"شرط — محتمل الحدوث", color:"#f59e0b",
   rule:"لأشياء ممكنة وقريبة الحدوث في المستقبل.",
   formula:"If + present simple, will + V1",
   examples:[
     {en:"If it rains, I will stay home.",ar:"إذا أمطرت سأبقى في البيت."},
     {en:"She will pass if she studies.",ar:"ستنجح إذا درست."},
     {en:"If you're tired, you can rest.",ar:"إذا كنت متعباً يمكنك الراحة."},
     {en:"I'll call you if I'm late.",ar:"سأتصل بك إذا تأخرت."},
   ],
   tip:"لا تستخدم will بعد if في نفس الجملة.",
   tags:["متوسط"]},

  {id:12, cat:"conditionals", title:"Second Conditional", sub:"شرط — غير واقعي", color:"#f59e0b",
   rule:"لمواقف خيالية أو غير واقعية في الحاضر أو المستقبل.",
   formula:"If + past simple, would + V1",
   examples:[
     {en:"If I were rich, I would travel.",ar:"لو كنت غنياً لسافرت."},
     {en:"She would help if she knew.",ar:"كانت ستساعد لو عرفت."},
     {en:"If I had wings, I would fly.",ar:"لو كان لي جناحان لطرت."},
     {en:"What would you do if you lost your phone?",ar:"ماذا كنت ستفعل لو فقدت هاتفك؟"},
   ],
   tip:"نستخدم were مع الجميع: If I were / If she were — ليس was.",
   tags:["متوسط"]},

  {id:13, cat:"conditionals", title:"Third Conditional", sub:"شرط — ماضٍ افتراضي", color:"#f59e0b",
   rule:"للتحدث عن ماضٍ مختلف لم يحدث، والندم أو التخيل.",
   formula:"If + past perfect, would have + V3",
   examples:[
     {en:"If she had studied, she would have passed.",ar:"لو درست لكانت اجتازت الامتحان."},
     {en:"He would have called if he had known.",ar:"كان سيتصل لو كان يعرف."},
     {en:"If I had left earlier, I wouldn't have been late.",ar:"لو غادرت مبكراً لما تأخرت."},
     {en:"Would you have gone if I had invited you?",ar:"هل كنت ستذهب لو دعوتك؟"},
   ],
   tip:"الشرط الثالث للندم — ما حدث لا يتغير لكن نتخيل لو كان غير ذلك.",
   tags:["متقدم"]},

  // ===== PASSIVE =====
  {id:14, cat:"passive", title:"Passive Voice", sub:"المبني للمجهول", color:"#8b5cf6",
   rule:"نستخدمه حين الفاعل مجهول أو غير مهم، أو نريد التركيز على المفعول به.",
   formula:"subject + be (am/is/are/was/were) + V3",
   examples:[
     {en:"The letter was sent yesterday.",ar:"أُرسلت الرسالة أمس."},
     {en:"English is spoken worldwide.",ar:"الإنجليزية تُتحدث حول العالم."},
     {en:"The car has been repaired.",ar:"تم إصلاح السيارة."},
     {en:"The project will be completed soon.",ar:"سيتم إنجاز المشروع قريباً."},
   ],
   tip:"لتحويل جملة: المفعول به يصبح فاعلاً + be + V3 + by (اختياري).",
   tags:["متوسط"]},

  // ===== MODAL VERBS =====
  {id:15, cat:"modal", title:"Can / Could", sub:"قدرة وطلب مؤدب", color:"#06b6d4",
   rule:"Can للقدرة في الحاضر، Could للماضي أو الطلب المؤدب.",
   formula:"can/could + base verb (V1)",
   examples:[
     {en:"I can speak three languages.",ar:"أستطيع التحدث بثلاث لغات."},
     {en:"She could swim when she was five.",ar:"كانت تستطيع السباحة وهي بعمر خمس سنوات."},
     {en:"Could you help me please?",ar:"هل يمكنك مساعدتي؟"},
     {en:"Can I use your phone?",ar:"هل يمكنني استخدام هاتفك؟"},
   ],
   tip:"Could أكثر أدباً من Can في الطلبات.",
   tags:["مبتدئ"]},

  {id:16, cat:"modal", title:"Should / Must", sub:"نصيحة والتزام", color:"#06b6d4",
   rule:"Should للنصيحة والتوصية، Must للإلزام الضروري.",
   formula:"should/must + base verb (V1)",
   examples:[
     {en:"You should sleep early.",ar:"يجب عليك النوم مبكراً."},
     {en:"She must submit the report today.",ar:"عليها تسليم التقرير اليوم."},
     {en:"You shouldn't eat junk food.",ar:"لا ينبغي أن تأكل الوجبات السريعة."},
     {en:"You must wear a seatbelt.",ar:"يجب عليك ارتداء حزام الأمان."},
   ],
   tip:"Must = إلزام داخلي | Have to = إلزام خارجي (قانون أو قاعدة).",
   tags:["مبتدئ"]},

  {id:17, cat:"modal", title:"Will / Would", sub:"مستقبل وتوقع", color:"#06b6d4",
   rule:"Will للمستقبل والوعود، Would للماضي المعتاد أو الطلب المؤدب.",
   formula:"will/would + base verb (V1)",
   examples:[
     {en:"I will call you tomorrow.",ar:"سأتصل بك غداً."},
     {en:"Would you like some tea?",ar:"هل تريد بعض الشاي؟"},
     {en:"She would always sing in the morning.",ar:"كانت دائماً تغني في الصباح."},
     {en:"I won't be late again.",ar:"لن أتأخر مجدداً."},
   ],
   tip:"Would you like = طريقة مؤدبة للعرض والطلب.",
   tags:["متوسط"]},

  {id:18, cat:"modal", title:"May / Might", sub:"احتمال وإذن", color:"#06b6d4",
   rule:"May للاحتمال المتوسط أو طلب الإذن رسمياً، Might للاحتمال الأضعف.",
   formula:"may/might + base verb (V1)",
   examples:[
     {en:"It may rain tomorrow.",ar:"قد تمطر غداً."},
     {en:"She might be late.",ar:"ربما تتأخر."},
     {en:"May I come in?",ar:"هل يمكنني الدخول؟"},
     {en:"He might not know the answer.",ar:"قد لا يعرف الإجابة."},
   ],
   tip:"May = 50% احتمال | Might = أقل من 50%.",
   tags:["متوسط"]},

  // ===== PRONOUNS =====
  {id:19, cat:"pronouns", title:"Subject Pronouns", sub:"ضمائر الفاعل", color:"#ef4444",
   rule:"تأتي في بداية الجملة كفاعل للفعل.",
   formula:"I / you / he / she / it / we / they",
   examples:[
     {en:"I love learning English.",ar:"أنا أحب تعلم الإنجليزية."},
     {en:"He is my best friend.",ar:"هو أفضل صديق لي."},
     {en:"They live in Dubai.",ar:"هم يعيشون في دبي."},
     {en:"We study together every day.",ar:"نحن ندرس معاً كل يوم."},
   ],
   tip:"I دائماً بحرف كبير حتى في منتصف الجملة.",
   tags:["مبتدئ"]},

  {id:20, cat:"pronouns", title:"Object Pronouns", sub:"ضمائر المفعول", color:"#ef4444",
   rule:"تأتي بعد الفعل أو حرف الجر كمفعول به.",
   formula:"me / you / him / her / it / us / them",
   examples:[
     {en:"She loves him.",ar:"هي تحبه."},
     {en:"Call me tomorrow.",ar:"اتصل بي غداً."},
     {en:"I can help them.",ar:"أستطيع مساعدتهم."},
     {en:"He gave her a gift.",ar:"أعطاها هدية."},
   ],
   tip:"بعد حروف الجر دائماً object pronouns: with me, for him.",
   tags:["مبتدئ"]},

  {id:21, cat:"pronouns", title:"Possessive", sub:"ضمائر الملكية", color:"#ef4444",
   rule:"Possessive adjectives قبل الاسم، Possessive pronouns بدون اسم بعدها.",
   formula:"my/your/his/her/our/their + noun | mine/yours/his/hers/ours/theirs",
   examples:[
     {en:"This is my book.",ar:"هذا كتابي."},
     {en:"Is this pen yours?",ar:"هل هذا القلم لك؟"},
     {en:"Her car is new.",ar:"سيارتها جديدة."},
     {en:"The decision is ours.",ar:"القرار لنا."},
   ],
   tip:"it's = it is | its = ملكية — لا تخلط بينهما!",
   tags:["مبتدئ"]},

  // ===== QUESTIONS =====
  {id:22, cat:"questions", title:"Yes/No Questions", sub:"أسئلة نعم أو لا", color:"#16a34a",
   rule:"نبدأ بالفعل المساعد قبل الفاعل.",
   formula:"Do/Does/Did/Is/Are/Was/Were + subject + verb?",
   examples:[
     {en:"Do you speak Arabic?",ar:"هل تتحدث العربية؟"},
     {en:"Does she work here?",ar:"هل تعمل هنا؟"},
     {en:"Did you eat breakfast?",ar:"هل أكلت الفطور؟"},
     {en:"Is he coming tonight?",ar:"هل هو قادم الليلة؟"},
   ],
   tip:"في المضارع: Do مع I/you/we/they | Does مع he/she/it.",
   tags:["مبتدئ"]},

  {id:23, cat:"questions", title:"Wh- Questions", sub:"أسئلة الاستفسار", color:"#16a34a",
   rule:"تبدأ بكلمة استفهام ثم الفعل المساعد ثم الفاعل.",
   formula:"Wh + auxiliary + subject + verb?",
   examples:[
     {en:"Where do you live?",ar:"أين تعيش؟"},
     {en:"What time does the class start?",ar:"متى تبدأ الحصة؟"},
     {en:"Why did she leave early?",ar:"لماذا غادرت مبكراً؟"},
     {en:"How long have you studied English?",ar:"كم مدة دراستك للإنجليزية؟"},
   ],
   tip:"Who كفاعل لا تحتاج do/does: Who called you? ليس Who did call you?",
   tags:["مبتدئ"]},

  // ===== ADJECTIVES =====
  {id:24, cat:"adjectives", title:"Comparative", sub:"المقارنة بين اثنين", color:"#db2777",
   rule:"للمقارنة بين شيئين. الصفات القصيرة: er + than. الصفات الطويلة: more + than.",
   formula:"adj + er + than | more + adj + than",
   examples:[
     {en:"She is taller than her brother.",ar:"هي أطول من أخيها."},
     {en:"This phone is more expensive than that one.",ar:"هذا الهاتف أغلى من ذاك."},
     {en:"He runs faster than me.",ar:"يركض أسرع مني."},
     {en:"Today is hotter than yesterday.",ar:"اليوم أحر من أمس."},
   ],
   tip:"good → better | bad → worse | far → farther (شاذة).",
   tags:["مبتدئ"]},

  {id:25, cat:"adjectives", title:"Superlative", sub:"المقارنة بين ثلاثة+", color:"#db2777",
   rule:"للمقارنة بين ثلاثة أشياء أو أكثر. نضيف the + est أو the most.",
   formula:"the + adj + est | the most + adj",
   examples:[
     {en:"This is the most beautiful city.",ar:"هذه أجمل مدينة."},
     {en:"He is the tallest in the class.",ar:"هو الأطول في الفصل."},
     {en:"It's the cheapest option.",ar:"هذا أرخص خيار."},
     {en:"She is the most talented student.",ar:"هي أكثر الطلاب موهبة."},
   ],
   tip:"الصفات التي تنتهي بـ y: happy → happiest | easy → easiest.",
   tags:["مبتدئ"]},

  // ===== GERUND =====
  {id:26, cat:"gerund", title:"Gerund vs Infinitive", sub:"verb+ing أو to+verb", color:"#0891b2",
   rule:"بعض الأفعال تتبعها صيغة ing وبعضها to + المصدر.",
   formula:"enjoy/avoid/finish + ing | want/need/decide + to + V1",
   examples:[
     {en:"I enjoy reading books.",ar:"أستمتع بقراءة الكتب."},
     {en:"She decided to leave early.",ar:"قررت المغادرة مبكراً."},
     {en:"He avoided making mistakes.",ar:"تجنب ارتكاب الأخطاء."},
     {en:"I want to improve my English.",ar:"أريد تحسين إنجليزيتي."},
   ],
   tip:"بعد حروف الجر دائماً ing: Thank you for helping me.",
   tags:["متوسط"]},

  // ===== REPORTED SPEECH =====
  {id:27, cat:"reported", title:"Reported Speech", sub:"الكلام المنقول", color:"#7c3aed",
   rule:"ننقل كلام شخص آخر بدون اقتباس مباشر مع تغيير الأزمنة والضمائر.",
   formula:"said (that) + [tense one step back]",
   examples:[
     {en:"\"I am tired.\" → He said he was tired.",ar:"\"أنا متعب\" ← قال إنه كان متعباً."},
     {en:"\"I will help.\" → She said she would help.",ar:"\"سأساعد\" ← قالت إنها ستساعد."},
     {en:"\"Are you ready?\" → He asked if I was ready.",ar:"سأل إذا كنت مستعداً."},
     {en:"\"Where do you live?\" → She asked where I lived.",ar:"سألت أين أعيش."},
   ],
   tip:"الحقائق العامة لا تتغير: He said the earth is round.",
   tags:["متقدم"]},

  // ===== COUNTABLE =====
  {id:28, cat:"nouns", title:"Countable & Uncountable", sub:"أسماء معدودة وغير معدودة", color:"#059669",
   rule:"الأسماء المعدودة قابلة للعد والجمع. غير المعدودة لها قواعد خاصة.",
   formula:"many/few + countable | much/little + uncountable",
   examples:[
     {en:"I have a few books but little time.",ar:"لدي بضعة كتب لكن وقتاً قليلاً."},
     {en:"How much water do you need?",ar:"كم من الماء تحتاج؟"},
     {en:"How many students are there?",ar:"كم عدد الطلاب؟"},
     {en:"She gave me good advice.",ar:"أعطتني نصيحة جيدة."},
   ],
   tip:"advice / information / news — لا تُجمع أبداً.",
   tags:["متوسط"]},

  // ===== EXTRA RULES (29-60) =====
  {id:29,cat:"أزمنة",title:"Past Continuous",sub:"كنت أفعل",color:"#6366f1",level:"متوسط",
   rule:"تصف فعلاً كان مستمراً في وقت محدد في الماضي.",
   formula:"was/were + verb-ing",
   examples:[
     {en:"I was studying when she called.",ar:"كنت أدرس عندما اتصلت."},
     {en:"They were playing football at 5pm.",ar:"كانوا يلعبون الكرة الساعة 5."},
     {en:"He was cooking dinner all evening.",ar:"كان يطبخ العشاء طوال المساء."},
     {en:"What were you doing yesterday?",ar:"ماذا كنت تفعل أمس؟"}
   ],
   tip:"استخدمها لوصف خلفية حدث ماضٍ آخر."},

  {id:30,cat:"أزمنة",title:"Past Perfect",sub:"كنت قد فعلت",color:"#8b5cf6",level:"متقدم",
   rule:"تصف فعلاً اكتمل قبل فعل آخر في الماضي.",
   formula:"had + past participle",
   examples:[
     {en:"I had finished before she arrived.",ar:"كنت قد انتهيت قبل أن تصل."},
     {en:"They had left when I got there.",ar:"كانوا قد غادروا عندما وصلت."},
     {en:"He had never seen snow before.",ar:"لم يكن قد رأى الثلج من قبل."},
     {en:"Had you eaten before the meeting?",ar:"هل كنت قد أكلت قبل الاجتماع؟"}
   ],
   tip:"الترتيب: had + past participle — دائماً."},

  {id:31,cat:"أزمنة",title:"Future Continuous",sub:"سأكون أفعل",color:"#06b6d4",level:"متوسط",
   rule:"تصف فعلاً سيكون مستمراً في وقت محدد في المستقبل.",
   formula:"will be + verb-ing",
   examples:[
     {en:"I will be working at 8am tomorrow.",ar:"سأكون أعمل الساعة 8 صباحاً غداً."},
     {en:"She will be travelling all week.",ar:"ستكون تسافر طوال الأسبوع."},
     {en:"Will you be joining the meeting?",ar:"هل ستكون تحضر الاجتماع؟"},
     {en:"They will be studying for exams.",ar:"سيكونون يدرسون للامتحانات."}
   ],
   tip:"مفيدة للتخطيط والتنسيق المستقبلي."},

  {id:32,cat:"أزمنة",title:"Future Perfect",sub:"سأكون قد فعلت",color:"#10b981",level:"متقدم",
   rule:"تصف فعلاً سيكتمل قبل وقت محدد في المستقبل.",
   formula:"will have + past participle",
   examples:[
     {en:"I will have finished by 6pm.",ar:"سأكون قد انتهيت بحلول الساعة 6."},
     {en:"She will have graduated by June.",ar:"ستكون قد تخرجت بحلول يونيو."},
     {en:"Will you have read it by then?",ar:"هل ستكون قد قرأته بحلول ذلك الوقت؟"},
     {en:"They will have saved enough money.",ar:"سيكونون قد ادخروا ما يكفي من المال."}
   ],
   tip:"تستخدم مع by + وقت مستقبلي."},

  {id:33,cat:"مساعدة",title:"Used to",sub:"كان يفعل دائماً",color:"#f59e0b",level:"متوسط",
   rule:"تصف عادة أو حالة منتهية في الماضي.",
   formula:"used to + base verb",
   examples:[
     {en:"I used to wake up early.",ar:"كنت أستيقظ مبكراً دائماً."},
     {en:"She used to live in London.",ar:"كانت تعيش في لندن."},
     {en:"Did you use to play football?",ar:"هل كنت تلعب كرة القدم؟"},
     {en:"He didn't use to like vegetables.",ar:"لم يكن يحب الخضروات."}
   ],
   tip:"في السؤال والنفي: use to (بدون d)."},

  {id:34,cat:"مساعدة",title:"Would — Past Habit",sub:"درب ماضٍ",color:"#ec4899",level:"متوسط",
   rule:"تصف تصرفاً متكرراً في الماضي (لكن ليس الحالات الثابتة).",
   formula:"would + base verb",
   examples:[
     {en:"Every summer, we would go camping.",ar:"كل صيف كنا نذهب للتخييم."},
     {en:"She would always bring gifts.",ar:"كانت دائماً تحضر هدايا."},
     {en:"He would wake up and exercise.",ar:"كان يستيقظ ويمارس الرياضة."},
     {en:"They would meet every Friday.",ar:"كانوا يلتقون كل جمعة."}
   ],
   tip:"لا تستخدم would مع الحالات الثابتة (كان يحب، كان يعيش)."},

  {id:35,cat:"شرط",title:"Mixed Conditional",sub:"شرط مختلط",color:"#6366f1",level:"متقدم",
   rule:"يجمع بين زمنين مختلفين — غالباً الماضي والحاضر.",
   formula:"If + past perfect, would + base verb",
   examples:[
     {en:"If I had studied, I would be a doctor.",ar:"لو كنت قد درست، لكنت طبيباً الآن."},
     {en:"If she had slept, she wouldn't be tired.",ar:"لو كانت قد نامت، لما كانت متعبة."},
     {en:"If we had saved, we would be rich.",ar:"لو كنا قد ادخرنا، لكنا أثرياء."},
     {en:"If he had tried, he would be successful.",ar:"لو كان قد حاول، لكان ناجحاً."}
   ],
   tip:"الجزء الأول ماضٍ (past perfect) والثاني حاضر (would + base)."},

  {id:36,cat:"ضمائر",title:"Reflexive Pronouns",sub:"ضمائر الإرجاع",color:"#10b981",level:"مبتدئ",
   rule:"تشير إلى الفاعل نفسه وتنتهي بـ self أو selves.",
   formula:"myself / yourself / himself / herself / itself / ourselves / yourselves / themselves",
   examples:[
     {en:"I hurt myself.",ar:"آذيت نفسي."},
     {en:"She taught herself English.",ar:"علّمت نفسها الإنجليزية."},
     {en:"They enjoyed themselves.",ar:"استمتعوا بأنفسهم."},
     {en:"He did it himself.",ar:"فعلها بنفسه."}
   ],
   tip:"by + reflexive = وحده: He did it by himself."},

  {id:37,cat:"أسئلة",title:"Question Tags",sub:"أسئلة التأكيد",color:"#f59e0b",level:"متوسط",
   rule:"سؤال قصير يُضاف لنهاية الجملة للتأكيد أو التحقق.",
   formula:"positive sentence + negative tag? / negative sentence + positive tag?",
   examples:[
     {en:"It's cold today, isn't it?",ar:"الجو بارد اليوم، أليس كذلك؟"},
     {en:"You can swim, can't you?",ar:"تستطيع السباحة، أليس كذلك؟"},
     {en:"She didn't call, did she?",ar:"لم تتصل، أليس كذلك؟"},
     {en:"They aren't ready, are they?",ar:"ليسوا جاهزين، أليس كذلك؟"}
   ],
   tip:"إذا الجملة موجبة الـ tag سالب، والعكس صحيح."},

  {id:38,cat:"صفات",title:"Order of Adjectives",sub:"ترتيب الصفات",color:"#8b5cf6",level:"متقدم",
   rule:"عند استخدام أكثر من صفة، هناك ترتيب محدد.",
   formula:"Opinion > Size > Age > Shape > Color > Origin > Material + Noun",
   examples:[
     {en:"A beautiful small old round red French wooden table.",ar:"طاولة خشبية فرنسية حمراء مستديرة قديمة صغيرة جميلة."},
     {en:"A big black German car.",ar:"سيارة ألمانية سوداء كبيرة."},
     {en:"A lovely little old house.",ar:"منزل قديم صغير جميل."},
     {en:"Three large round blue glasses.",ar:"ثلاثة أكواب زرقاء مستديرة كبيرة."}
   ],
   tip:"تذكر: OSASCOMP — Opinion, Size, Age, Shape, Color, Origin, Material, Purpose."},

  {id:39,cat:"أزمنة",title:"Present Perfect Continuous",sub:"لا زلت أفعل",color:"#06b6d4",level:"متقدم",
   rule:"تصف فعلاً بدأ في الماضي ولا يزال مستمراً.",
   formula:"have/has + been + verb-ing",
   examples:[
     {en:"I have been studying for 3 hours.",ar:"أنا أدرس منذ 3 ساعات."},
     {en:"She has been working here since 2020.",ar:"هي تعمل هنا منذ 2020."},
     {en:"It has been raining all day.",ar:"المطر ينزل طوال اليوم."},
     {en:"We have been waiting for an hour.",ar:"نحن ننتظر منذ ساعة."}
   ],
   tip:"استخدم for للمدة وsince للنقطة الزمنية."},

  {id:40,cat:"حروف الجر",title:"Prepositions of Movement",sub:"حروف جر الحركة",color:"#ec4899",level:"مبتدئ",
   rule:"تصف الحركة والاتجاه.",
   formula:"to / from / into / out of / through / across / along / towards",
   examples:[
     {en:"She walked into the room.",ar:"دخلت إلى الغرفة مشياً."},
     {en:"He ran across the street.",ar:"ركض عبر الشارع."},
     {en:"They drove through the tunnel.",ar:"قادوا السيارة عبر النفق."},
     {en:"Walk along the river.",ar:"امشِ على طول النهر."}
   ],
   tip:"into تعني الدخول، out of تعني الخروج."},

  {id:41,cat:"معرّف",title:"Zero Article",sub:"بدون أداة تعريف",color:"#6366f1",level:"متوسط",
   rule:"لا نستخدم a/an/the مع بعض الأسماء.",
   formula:"No article + plural nouns / uncountable nouns / proper nouns",
   examples:[
     {en:"Cats are independent animals.",ar:"القطط حيوانات مستقلة."},
     {en:"Water is essential for life.",ar:"الماء ضروري للحياة."},
     {en:"She lives in London.",ar:"هي تعيش في لندن."},
     {en:"I love music.",ar:"أنا أحب الموسيقى."}
   ],
   tip:"لا تستخدم the مع الأسماء العلم والجماهير من الأسماء غير المعدودة."},

  {id:42,cat:"مجهول",title:"Passive — Perfect Tenses",sub:"مجهول الأزمنة التامة",color:"#10b981",level:"متقدم",
   rule:"تستخدم في الأزمنة التامة مع has/have/had been.",
   formula:"have/has/had + been + past participle",
   examples:[
     {en:"The report has been submitted.",ar:"تم تقديم التقرير."},
     {en:"The project had been completed.",ar:"كان المشروع قد اكتمل."},
     {en:"The files have been deleted.",ar:"تم حذف الملفات."},
     {en:"The plan had been approved.",ar:"كانت الخطة قد اعتُمدت."}
   ],
   tip:"has/have been = present perfect passive / had been = past perfect passive."},

  {id:43,cat:"مساعدة",title:"Need to / Don't need to",sub:"الضرورة وعدمها",color:"#f59e0b",level:"مبتدئ",
   rule:"need to تعبّر عن الضرورة، don't need to عن عدم الضرورة.",
   formula:"need to + base verb / don't need to + base verb",
   examples:[
     {en:"You need to submit the form.",ar:"تحتاج إلى تقديم النموذج."},
     {en:"You don't need to worry.",ar:"لا تحتاج إلى القلق."},
     {en:"Do I need to bring anything?",ar:"هل أحتاج إلى إحضار أي شيء؟"},
     {en:"She doesn't need to attend.",ar:"هي لا تحتاج إلى الحضور."}
   ],
   tip:"don't need to ≠ mustn't — الأول اختياري، الثاني محظور."},

  {id:44,cat:"أسماء",title:"Compound Nouns",sub:"الأسماء المركبة",color:"#8b5cf6",level:"متوسط",
   rule:"اسمان أو أكثر يُكوّنان كلمة ذات معنى جديد.",
   formula:"Noun + Noun / Adjective + Noun / Verb + Noun",
   examples:[
     {en:"toothpaste, sunglasses, notebook",ar:"معجون أسنان، نظارات شمسية، دفتر."},
     {en:"traffic light, bus stop",ar:"إشارة مرور، موقف الحافلة."},
     {en:"swimming pool, washing machine",ar:"حمام سباحة، غسالة."},
     {en:"bedroom, airport, footprint",ar:"غرفة نوم، مطار، أثر قدم."}
   ],
   tip:"بعضها كلمة واحدة، وبعضها منفصل، وبعضها بشرطة — راجع القاموس."},

  {id:45,cat:"Gerund",title:"Gerund as Subject",sub:"الجرند كفاعل",color:"#06b6d4",level:"متوسط",
   rule:"يمكن استخدام الجرند (verb+ing) كفاعل للجملة.",
   formula:"Verb-ing + is/are + ...",
   examples:[
     {en:"Reading improves vocabulary.",ar:"القراءة تحسّن المفردات."},
     {en:"Swimming is great exercise.",ar:"السباحة رياضة رائعة."},
     {en:"Overthinking causes stress.",ar:"الإفراط في التفكير يسبب التوتر."},
     {en:"Learning never stops.",ar:"التعلم لا يتوقف."}
   ],
   tip:"الجرند يُعامَل كاسم مفرد — يأتي بعده is وليس are."},

  {id:46,cat:"أزمنة",title:"Be going to",sub:"مخطط مسبقاً",color:"#ec4899",level:"مبتدئ",
   rule:"تعبّر عن خطة أو نية مسبقة أو شيء واضح سيحدث.",
   formula:"am/is/are + going to + base verb",
   examples:[
     {en:"I'm going to study tonight.",ar:"سأدرس الليلة (خطة)."},
     {en:"It's going to rain, look at those clouds.",ar:"سيمطر، انظر إلى تلك السحب."},
     {en:"Are you going to call him?",ar:"هل ستتصل به؟"},
     {en:"She's going to open a business.",ar:"هي ستفتح مشروعاً."}
   ],
   tip:"will = قرار لحظي / going to = خطة مسبقة."},

  {id:47,cat:"معرّف",title:"The — Unique Things",sub:"الشيء الوحيد",color:"#6366f1",level:"مبتدئ",
   rule:"نستخدم the مع الأشياء الفريدة من نوعها.",
   formula:"the + unique noun",
   examples:[
     {en:"The sun rises in the east.",ar:"الشمس تشرق من الشرق."},
     {en:"The moon is beautiful tonight.",ar:"القمر جميل الليلة."},
     {en:"He is the president.",ar:"هو الرئيس."},
     {en:"Turn off the light.",ar:"أطفئ الضوء (الوحيد في الغرفة)."}
   ],
   tip:"إذا كان الشيء واحداً في السياق أو في الكون — استخدم the."},

  {id:48,cat:"حروف الجر",title:"Prepositions after Adjectives",sub:"حروف جر بعد الصفات",color:"#10b981",level:"متوسط",
   rule:"بعض الصفات تأتي دائماً مع حروف جر محددة.",
   formula:"Adjective + preposition",
   examples:[
     {en:"I'm excited about the trip.",ar:"أنا متحمس للرحلة."},
     {en:"She's good at maths.",ar:"هي جيدة في الرياضيات."},
     {en:"He's afraid of heights.",ar:"هو خائف من الأماكن المرتفعة."},
     {en:"We're proud of you.",ar:"نحن فخورون بك."}
   ],
   tip:"لا توجد قاعدة ثابتة — احفظ كل صفة مع حرف الجر."},

  {id:49,cat:"أزمنة",title:"Present Simple — Passive",sub:"مضارع مجهول",color:"#f59e0b",level:"متوسط",
   rule:"المضارع البسيط في صيغة المجهول.",
   formula:"am/is/are + past participle",
   examples:[
     {en:"English is spoken worldwide.",ar:"اللغة الإنجليزية تُتكلم في جميع أنحاء العالم."},
     {en:"The mail is delivered daily.",ar:"البريد يُوصَّل يومياً."},
     {en:"Mistakes are made by everyone.",ar:"الأخطاء يرتكبها الجميع."},
     {en:"The store is closed on Sundays.",ar:"المتجر مغلق أيام الأحد."}
   ],
   tip:"am/is/are حسب الفاعل + past participle دائماً."},

  {id:50,cat:"مساعدة",title:"Ought to",sub:"يجب / ينبغي",color:"#8b5cf6",level:"متوسط",
   rule:"تعبّر عن واجب أخلاقي أو نصيحة — مثل should.",
   formula:"ought to + base verb",
   examples:[
     {en:"You ought to apologize.",ar:"يجب عليك أن تعتذر."},
     {en:"She ought to rest more.",ar:"ينبغي لها أن ترتاح أكثر."},
     {en:"We ought to help each other.",ar:"ينبغي لنا أن نساعد بعضنا."},
     {en:"He ought to be more careful.",ar:"ينبغي له أن يكون أكثر حذراً."}
   ],
   tip:"ought to تُستخدم للواجب الأخلاقي، should للنصيحة."},

  {id:51,cat:"صفات",title:"Adverbs of Degree",sub:"ظروف الدرجة",color:"#06b6d4",level:"متوسط",
   rule:"تُعدّل الصفات والأفعال وتدل على الدرجة.",
   formula:"adverb + adjective/verb",
   examples:[
     {en:"It's extremely cold today.",ar:"الجو بارد جداً اليوم."},
     {en:"She's fairly good at singing.",ar:"هي جيدة إلى حد ما في الغناء."},
     {en:"I'm absolutely sure.",ar:"أنا متأكد تماماً."},
     {en:"He's quite tired.",ar:"هو متعب نوعاً ما."}
   ],
   tip:"الترتيب: quite < fairly < very < extremely < absolutely."},

  {id:52,cat:"أسماء",title:"Countable vs Uncountable",sub:"معدود وغير معدود",color:"#ec4899",level:"مبتدئ",
   rule:"بعض الأسماء معدودة وبعضها غير معدودة — لكل قواعده.",
   formula:"countable: a/an, many, few | uncountable: much, little, some",
   examples:[
     {en:"I have a few apples.",ar:"عندي بعض التفاح."},
     {en:"There isn't much water.",ar:"لا يوجد ماء كثير."},
     {en:"Can I have some milk?",ar:"هل يمكنني الحصول على بعض الحليب؟"},
     {en:"She has many friends.",ar:"لديها أصدقاء كثيرون."}
   ],
   tip:"some تُستخدم مع الاثنين في الجمل الإيجابية والطلبات."},

  {id:53,cat:"مجهول",title:"Passive — Reporting Verbs",sub:"مجهول أفعال الرواية",color:"#6366f1",level:"متقدم",
   rule:"تُستخدم مع أفعال مثل say, believe, report للتعبير عن رأي عام.",
   formula:"It is said/believed/reported + that clause",
   examples:[
     {en:"It is said that he is very rich.",ar:"يُقال إنه ثري جداً."},
     {en:"It is believed that aliens exist.",ar:"يُعتقد أن الكائنات الفضائية موجودة."},
     {en:"It is reported that prices will rise.",ar:"تُفيد التقارير بأن الأسعار ستارتفع."},
     {en:"He is said to be a genius.",ar:"يُقال إنه عبقري."}
   ],
   tip:"هناك صيغتان: It is said that... / He is said to..."},

  {id:54,cat:"Gerund",title:"Verb + Gerund or Infinitive",sub:"جرند أم مصدر؟",color:"#10b981",level:"متوسط",
   rule:"بعض الأفعال تأتي بعدها gerund وبعضها infinitive وبعضها الاثنان.",
   formula:"enjoy/avoid/suggest + gerund | want/decide/plan + infinitive",
   examples:[
     {en:"I enjoy reading books.",ar:"أنا أستمتع بقراءة الكتب."},
     {en:"She decided to leave early.",ar:"قررت المغادرة مبكراً."},
     {en:"Avoid making the same mistake.",ar:"تجنب ارتكاب نفس الخطأ."},
     {en:"He wants to improve.",ar:"هو يريد التحسن."}
   ],
   tip:"قائمة الأفعال + gerund: enjoy, avoid, suggest, finish, consider, keep."},

  {id:55,cat:"شرط",title:"Unless",sub:"إلا إذا",color:"#f59e0b",level:"متوسط",
   rule:"unless = if not — تستخدم لبيان الشرط السلبي.",
   formula:"Unless + present simple, will + base verb",
   examples:[
     {en:"Unless you study, you'll fail.",ar:"إلا إذا درست، ستفشل."},
     {en:"She won't come unless invited.",ar:"لن تأتي إلا إذا دُعيت."},
     {en:"Unless it rains, we'll go out.",ar:"إلا إذا أمطرت، سنخرج."},
     {en:"I'll stay unless you need me.",ar:"سأبقى إلا إذا احتجتني."}
   ],
   tip:"لا تستخدم unless مع النفي — unless you don't go ❌ / unless you go ✓."},

  {id:56,cat:"ضمائر",title:"Each other / One another",sub:"بعضهم البعض",color:"#8b5cf6",level:"متوسط",
   rule:"each other لشخصين، one another لأكثر من شخصين.",
   formula:"subject + verb + each other / one another",
   examples:[
     {en:"They love each other.",ar:"هما يحبان بعضهما البعض."},
     {en:"The team supported one another.",ar:"دعم أفراد الفريق بعضهم البعض."},
     {en:"We help each other daily.",ar:"نساعد بعضنا البعض يومياً."},
     {en:"The students encouraged one another.",ar:"شجّع الطلاب بعضهم البعض."}
   ],
   tip:"في الاستخدام الحديث، each other تُستخدم للاثنين والجمع."},

  {id:57,cat:"أسئلة",title:"Indirect Questions",sub:"أسئلة غير مباشرة",color:"#06b6d4",level:"متوسط",
   rule:"أسئلة مدمجة في جمل أطول — أكثر أدباً وشكلية.",
   formula:"Could you tell me + where/what/how + subject + verb",
   examples:[
     {en:"Could you tell me where the station is?",ar:"هل يمكنك إخباري أين المحطة؟"},
     {en:"I wonder what time it is.",ar:"أتساءل ما هو الوقت."},
     {en:"Do you know if she'll come?",ar:"هل تعرف إذا كانت ستأتي؟"},
     {en:"Can you tell me how to get there?",ar:"هل يمكنك إخباري كيف أصل هناك؟"}
   ],
   tip:"لاحظ ترتيب الكلمات: لا نقلب الفاعل والفعل كما في الأسئلة العادية."},

  {id:58,cat:"معرّف",title:"A vs An",sub:"متى نستخدم a أو an",color:"#ec4899",level:"مبتدئ",
   rule:"a قبل الأصوات الساكنة، an قبل الأصوات المتحركة.",
   formula:"a + consonant sound | an + vowel sound",
   examples:[
     {en:"a car, a university (يو = صوت ساكن)",ar:"سيارة، جامعة."},
     {en:"an apple, an hour (h صامتة)",ar:"تفاحة، ساعة."},
     {en:"an honest man.",ar:"رجل صادق."},
     {en:"a European country.",ar:"دولة أوروبية."}
   ],
   tip:"القاعدة على الصوت وليس الحرف — university تبدأ بصوت يو."},

  {id:59,cat:"أزمنة",title:"Simple vs Continuous",sub:"الفرق الأساسي",color:"#6366f1",level:"مبتدئ",
   rule:"Simple للعادات والحقائق، Continuous للأفعال الجارية الآن.",
   formula:"simple: V/V+s | continuous: am/is/are + V-ing",
   examples:[
     {en:"I work every day. / I'm working now.",ar:"أعمل كل يوم. / أنا أعمل الآن."},
     {en:"She drinks coffee. / She's drinking coffee.",ar:"هي تشرب القهوة. / هي تشرب القهوة الآن."},
     {en:"It rains here. / It's raining.",ar:"يمطر هنا. / إنه يمطر."},
     {en:"They play football. / They're playing.",ar:"يلعبون الكرة. / يلعبون الآن."}
   ],
   tip:"كلمات المضارع المستمر: now, at the moment, currently, look!, listen!"},

  {id:60,cat:"مساعدة",title:"Shall",sub:"اقتراح / عرض",color:"#10b981",level:"مبتدئ",
   rule:"تُستخدم shall للاقتراح والعرض — خاصة مع I وWe.",
   formula:"Shall I/we + base verb?",
   examples:[
     {en:"Shall I open the window?",ar:"هل أفتح النافذة؟"},
     {en:"Shall we go for a walk?",ar:"هل نذهب للمشي؟"},
     {en:"Shall I help you?",ar:"هل أساعدك؟"},
     {en:"Shall we start?",ar:"هل نبدأ؟"}
   ],
   tip:"في الإنجليزية الحديثة shall نادر — غالباً يستبدلونه بـ should أو will."},
  // ===== EXTRA RULES (29-60) =====

  // REPORTED SPEECH
  {id:29, cat:"reported", title:"Reported Speech — Statements", sub:"الكلام المنقول — الجمل الخبرية", color:"#8b5cf6",
   rule:"لنقل كلام شخص آخر نحول الضمائر والأزمنة: Present → Past, will → would, can → could.",
   formula:"He said (that) + [shifted tense]",
   examples:[
     {en:"He said, 'I am tired.' → He said that he was tired.", ar:"قال 'أنا متعب' → قال إنه كان متعباً."},
     {en:"She said, 'I will call.' → She said she would call.", ar:"قالت 'سأتصل' → قالت إنها ستتصل."},
     {en:"They said, 'We can help.' → They said they could help.", ar:"قالوا 'نستطيع المساعدة' → قالوا إنهم يستطيعون المساعدة."},
     {en:"He said, 'I have finished.' → He said he had finished.", ar:"قال 'انتهيت' → قال إنه كان قد انتهى."}
   ],
   tip:"الكلام المنقول يحتاج تحويل الزمن درجة واحد للخلف.",
   tags:["reported","متوسط"]},

  // REPORTED SPEECH QUESTIONS
  {id:30, cat:"reported", title:"Reported Questions", sub:"الأسئلة المنقولة", color:"#8b5cf6",
   rule:"لنقل سؤال: yes/no → asked if/whether، سؤال بـ wh → asked + wh-word، والجملة تصبح خبرية (فاعل + فعل).",
   formula:"He asked if/whether + [statement order] | He asked wh-word + [statement order]",
   examples:[
     {en:"'Are you ready?' → He asked if I was ready.", ar:"'هل أنت مستعد؟' → سألني إذا كنت مستعداً."},
     {en:"'Where do you live?' → She asked where I lived.", ar:"'أين تسكن؟' → سألت أين أسكن."},
     {en:"'Can you help?' → He asked if I could help.", ar:"'هل تستطيع المساعدة؟' → سأل إذا كنت أستطيع."},
     {en:"'What time is it?' → She asked what time it was.", ar:"'كم الساعة؟' → سألت كم كانت الساعة."}
   ],
   tip:"في الأسئلة المنقولة لا يوجد علامة استفهام ولا قلب للجملة.",
   tags:["reported","متقدم"]},

  // COUNTABLE VS UNCOUNTABLE
  {id:31, cat:"nouns", title:"Countable vs Uncountable Nouns", sub:"الأسماء المعدودة وغير المعدودة", color:"#ec4899",
   rule:"Countable = يمكن عدها (a book, two books). Uncountable = لا تُعد (water, advice, information). مع uncountable لا نستخدم a/an أو أرقام مباشرة.",
   formula:"some/any/much/little + uncountable | many/few + countable",
   examples:[
     {en:"I need some water. (NOT: a water)", ar:"أحتاج بعض الماء. (ليس: ماءاً)"},
     {en:"She gave me some advice. (NOT: an advice)", ar:"أعطتني بعض النصائح. (ليس: نصيحة)"},
     {en:"There are many students here.", ar:"هناك كثير من الطلاب هنا."},
     {en:"There isn't much time left.", ar:"لم يبقَ وقت كثير."}
   ],
   tip:"information, news, advice, furniture, money, equipment — كلها uncountable.",
   tags:["nouns","مبتدئ"]},

  // SOME / ANY
  {id:32, cat:"معرّف", title:"Some vs Any", sub:"بعض في الإيجاب والنفي والسؤال", color:"#6366f1",
   rule:"Some في الجمل الإيجابية وعروض الطلب. Any في الجمل النفية والأسئلة العادية.",
   formula:"(+) some | (-) any | (?) any / some (offers)",
   examples:[
     {en:"I have some money.", ar:"معي بعض المال."},
     {en:"I don't have any money.", ar:"ليس معي أي مال."},
     {en:"Do you have any questions?", ar:"هل لديك أي أسئلة؟"},
     {en:"Would you like some coffee?", ar:"هل تريد بعض القهوة؟"}
   ],
   tip:"في العروض والطلبات نستخدم some حتى في السؤال.",
   tags:["معرّف","مبتدئ"]},

  // MUCH / MANY / A LOT
  {id:33, cat:"معرّف", title:"Much / Many / A lot of", sub:"كمية الأشياء", color:"#6366f1",
   rule:"Much مع uncountable في النفي والسؤال. Many مع countable في النفي والسؤال. A lot of في الإيجاب مع كليهما.",
   formula:"much + uncountable | many + countable | a lot of + both",
   examples:[
     {en:"I don't have much time.", ar:"ليس لدي وقت كثير."},
     {en:"How many students are there?", ar:"كم عدد الطلاب؟"},
     {en:"She has a lot of friends.", ar:"لديها الكثير من الأصدقاء."},
     {en:"There isn't much water left.", ar:"لم يتبق الكثير من الماء."}
   ],
   tip:"في الكلام غير الرسمي يمكن استخدام a lot of في كل الأحوال.",
   tags:["معرّف","مبتدئ"]},

  // PRESENT PERFECT CONTINUOUS
  {id:34, cat:"أزمنة", title:"Present Perfect Continuous", sub:"المضارع التام المستمر", color:"#f59e0b",
   rule:"يصف فعلاً بدأ في الماضي ومستمر حتى الآن، مع التركيز على المدة أو الاستمرارية.",
   formula:"have/has + been + verb-ing",
   examples:[
     {en:"I have been studying for two hours.", ar:"كنت أدرس منذ ساعتين."},
     {en:"She has been working here since 2020.", ar:"كانت تعمل هنا منذ 2020."},
     {en:"They have been waiting for an hour.", ar:"كانوا ينتظرون منذ ساعة."},
     {en:"It has been raining all day.", ar:"كانت الأمطار تهطل طوال اليوم."}
   ],
   tip:"استخدم for مع المدة (for 3 hours) وsince مع نقطة البداية (since Monday).",
   tags:["أزمنة","متوسط"]},

  // PAST CONTINUOUS
  {id:35, cat:"أزمنة", title:"Past Continuous", sub:"الماضي المستمر", color:"#f59e0b",
   rule:"يصف فعلاً كان مستمراً في وقت محدد في الماضي، أو فعلاً استُقطع بحدث آخر.",
   formula:"was/were + verb-ing",
   examples:[
     {en:"I was reading when she called.", ar:"كنت أقرأ عندما اتصلت هي."},
     {en:"They were sleeping at midnight.", ar:"كانوا نائمين عند منتصف الليل."},
     {en:"While he was cooking, the phone rang.", ar:"بينما كان يطبخ، رنّ الهاتف."},
     {en:"We were watching TV all evening.", ar:"كنا نشاهد التلفاز طوال المساء."}
   ],
   tip:"Past Simple يصف الحدث القاطع، Past Continuous يصف الفعل المستمر في الخلفية.",
   tags:["أزمنة","متوسط"]},

  // PAST PERFECT
  {id:36, cat:"أزمنة", title:"Past Perfect", sub:"الماضي التام", color:"#f59e0b",
   rule:"يصف فعلاً اكتمل قبل فعل آخر في الماضي. نستخدمه لترتيب حدثين ماضيين.",
   formula:"had + past participle (V3)",
   examples:[
     {en:"She had left before I arrived.", ar:"كانت قد غادرت قبل أن أصل."},
     {en:"He had studied hard, so he passed.", ar:"كان قد درس بجد، لذا نجح."},
     {en:"By 2020, they had built 100 schools.", ar:"بحلول 2020، كانوا قد بنوا 100 مدرسة."},
     {en:"I hadn't eaten, so I was hungry.", ar:"لم أكن قد أكلت، لذا كنت جائعاً."}
   ],
   tip:"Past Perfect = had + V3، يأتي قبل Simple Past في الترتيب الزمني.",
   tags:["أزمنة","متقدم"]},

  // FUTURE CONTINUOUS
  {id:37, cat:"أزمنة", title:"Future Continuous", sub:"المستقبل المستمر", color:"#f59e0b",
   rule:"يصف فعلاً سيكون مستمراً في وقت محدد في المستقبل.",
   formula:"will be + verb-ing",
   examples:[
     {en:"At 8pm, I will be studying.", ar:"في الساعة 8 مساءً، سأكون أدرس."},
     {en:"Tomorrow this time, she will be flying.", ar:"غداً في هذا الوقت، ستكون تطير."},
     {en:"They will be working all day.", ar:"سيكونون يعملون طوال اليوم."},
     {en:"Will you be using the car tonight?", ar:"هل ستكون تستخدم السيارة الليلة؟"}
   ],
   tip:"مفيد للتحدث عن نشاط سيكون جارياً في لحظة مستقبلية محددة.",
   tags:["أزمنة","متقدم"]},

  // FUTURE PERFECT
  {id:38, cat:"أزمنة", title:"Future Perfect", sub:"المستقبل التام", color:"#f59e0b",
   rule:"يصف فعلاً سيكتمل قبل وقت أو حدث محدد في المستقبل.",
   formula:"will have + past participle (V3)",
   examples:[
     {en:"By Friday, I will have finished the project.", ar:"بحلول الجمعة، سأكون قد أنهيت المشروع."},
     {en:"She will have graduated by next year.", ar:"ستكون قد تخرجت بحلول العام القادم."},
     {en:"They will have left by the time you arrive.", ar:"سيكونون قد غادروا بحلول وصولك."},
     {en:"Will you have eaten by 7pm?", ar:"هل ستكون قد أكلت بحلول الساعة 7 مساءً؟"}
   ],
   tip:"by + time يستخدم كثيراً مع Future Perfect.",
   tags:["أزمنة","متقدم"]},

  // WISH
  {id:39, cat:"شرط", title:"Wish Sentences", sub:"جمل التمني", color:"#ef4444",
   rule:"Wish للتعبير عن تمني خلاف الواقع. الحاضر/المستقبل → Past Simple. الماضي → Past Perfect. المستقبل مع رغبة التغيير → would.",
   formula:"wish + past simple (present wish) | wish + had + V3 (past wish) | wish + would (future wish)",
   examples:[
     {en:"I wish I spoke French.", ar:"أتمنى لو كنت أتكلم الفرنسية."},
     {en:"She wishes she had studied harder.", ar:"تتمنى لو كانت قد درست أكثر."},
     {en:"I wish it would stop raining.", ar:"أتمنى لو توقفت الأمطار."},
     {en:"He wishes he were taller.", ar:"يتمنى لو كان أطول."}
   ],
   tip:"بعد wish نستخدم were (مش was) مع كل الضمائر في الكلام الرسمي.",
   tags:["شرط","متقدم"]},

  // USED TO
  {id:40, cat:"أزمنة", title:"Used to / Would", sub:"العادات والحالات في الماضي", color:"#f59e0b",
   rule:"Used to للحديث عن عادة أو حالة كانت في الماضي ولم تعد موجودة. Would للعادات الماضية فقط (ليس الحالات).",
   formula:"used to + base verb | would + base verb (habits only)",
   examples:[
     {en:"I used to live in Paris.", ar:"كنت أسكن في باريس."},
     {en:"She used to be shy.", ar:"كانت خجولة."},
     {en:"We would walk to school every day.", ar:"كنا نمشي إلى المدرسة كل يوم."},
     {en:"He didn't use to like coffee.", ar:"لم يكن يحب القهوة."}
   ],
   tip:"would لا يصلح للحالات الثابتة: I would be shy ❌ — used to be shy ✓.",
   tags:["أزمنة","متوسط"]},

  // BE GOING TO VS WILL
  {id:41, cat:"أزمنة", title:"Will vs Be Going To", sub:"الفرق بين طريقتي التعبير عن المستقبل", color:"#f59e0b",
   rule:"Will للقرارات اللحظية والوعود والتنبؤات. Be going to للخطط المسبقة والمؤشرات الواضحة.",
   formula:"will + base verb | am/is/are + going to + base verb",
   examples:[
     {en:"I'll have the salad, please. (instant decision)", ar:"سآخذ السلطة من فضلك. (قرار فوري)"},
     {en:"I'm going to visit Paris next month. (plan)", ar:"سأزور باريس الشهر القادم. (خطة)"},
     {en:"Look at those clouds — it's going to rain!", ar:"انظر إلى تلك السحب — ستمطر!"},
     {en:"I promise I will call you.", ar:"أعدك بأنني سأتصل بك."}
   ],
   tip:"الخطط المحددة مسبقاً = going to. القرارات الفورية = will.",
   tags:["أزمنة","متوسط"]},

  // RELATIVE CLAUSES
  {id:42, cat:"أسئلة", title:"Relative Clauses", sub:"الجمل الوصفية", color:"#22c55e",
   rule:"نستخدم who للأشخاص، which للأشياء، that للاثنين، where للأماكن، whose للملكية.",
   formula:"noun + who/which/that/where/whose + clause",
   examples:[
     {en:"The man who called is my teacher.", ar:"الرجل الذي اتصل هو معلمي."},
     {en:"The book which I read was amazing.", ar:"الكتاب الذي قرأته كان رائعاً."},
     {en:"This is the city where I grew up.", ar:"هذه هي المدينة التي نشأت فيها."},
     {en:"The student whose bag was lost cried.", ar:"الطالب الذي ضاعت حقيبته بكى."}
   ],
   tip:"يمكن حذف that/which/who عندما تكون مفعولاً به وليس فاعلاً.",
   tags:["أسئلة","متوسط"]},

  // INFINITIVE VS GERUND
  {id:43, cat:"Gerund", title:"Verb + Infinitive or Gerund", sub:"أفعال تأتي بعدها المصدر أو اسم الفعل", color:"#10b981",
   rule:"بعض الأفعال تأتي + to (infinitive)، وبعضها + ing (gerund)، وبعضها الاثنين مع فرق في المعنى.",
   formula:"verb + to-inf | verb + gerund (-ing)",
   examples:[
     {en:"I want to learn English. (infinitive)", ar:"أريد تعلم الإنجليزية. (مصدر)"},
     {en:"I enjoy reading books. (gerund)", ar:"أستمتع بقراءة الكتب. (اسم فعل)"},
     {en:"I stopped to drink water. (in order to)", ar:"توقفت لأشرب الماء. (بهدف)"},
     {en:"I stopped drinking coffee. (quit)", ar:"توقفت عن شرب القهوة. (توقف)"}
   ],
   tip:"want/need/decide/plan/hope → infinitive | enjoy/avoid/finish/mind → gerund.",
   tags:["Gerund","متوسط"]},

  // ARTICLES THE
  {id:44, cat:"articles", title:"The — Definite Article", sub:"أداة التعريف", color:"#6366f1",
   rule:"نستخدم the عند الإشارة إلى شيء محدد أو معروف للطرفين، أو الشيء الوحيد من نوعه، أو عند ذكره للمرة الثانية.",
   formula:"the + noun (specific/known/unique)",
   examples:[
     {en:"Close the door please. (specific)", ar:"أغلق الباب من فضلك. (محدد)"},
     {en:"The sun rises in the east.", ar:"الشمس تشرق من الشرق."},
     {en:"I saw a dog. The dog was big.", ar:"رأيت كلباً. الكلب كان كبيراً."},
     {en:"The Nile is the longest river.", ar:"النيل هو أطول نهر."}
   ],
   tip:"لا نستخدم the مع: اللغات، الرياضات، الوجبات، معظم أسماء البلدان.",
   tags:["articles","مبتدئ"]},

  // MODALS — ABILITY
  {id:45, cat:"مساعدة", title:"Can / Could — Ability & Permission", sub:"القدرة والإذن", color:"#3b82f6",
   rule:"Can للقدرة في الحاضر وطلب/منح الإذن غير الرسمي. Could للقدرة في الماضي والطلب المهذب.",
   formula:"can/could + base verb",
   examples:[
     {en:"I can swim very well.", ar:"أستطيع السباحة جيداً."},
     {en:"She could read at age four.", ar:"كانت تستطيع القراءة في سن الرابعة."},
     {en:"Can I use your phone?", ar:"هل يمكنني استخدام هاتفك؟"},
     {en:"Could you help me, please?", ar:"هل يمكنك مساعدتي من فضلك؟"}
   ],
   tip:"Could أكثر أدباً من Can في طلب الإذن.",
   tags:["مساعدة","مبتدئ"]},

  // MODALS — OBLIGATION
  {id:46, cat:"مساعدة", title:"Must / Have to / Should", sub:"الالتزام والنصيحة", color:"#3b82f6",
   rule:"Must التزام داخلي أو قوي. Have to التزام خارجي. Should نصيحة أو توصية.",
   formula:"must/have to/should + base verb",
   examples:[
     {en:"You must stop at red lights.", ar:"يجب أن تقف عند الضوء الأحمر."},
     {en:"I have to submit the report today.", ar:"يجب أن أقدم التقرير اليوم."},
     {en:"You should drink more water.", ar:"يجب أن تشرب المزيد من الماء."},
     {en:"She doesn't have to come.", ar:"ليس عليها الحضور."}
   ],
   tip:"Must not = ممنوع. Don't have to = ليس ضرورياً (فرق مهم!).",
   tags:["مساعدة","متوسط"]},

  // MODALS — DEDUCTION
  {id:47, cat:"مساعدة", title:"Must / Can't / Might — Deduction", sub:"الاستنتاج والاحتمال", color:"#3b82f6",
   rule:"Must للاستنتاج المنطقي القوي. Can't للاستنتاج السلبي. Might/May للاحتمال غير المؤكد.",
   formula:"must/can't/might + be/have + V3",
   examples:[
     {en:"He must be tired. (I'm almost sure)", ar:"لا بد أنه متعب. (متأكد تقريباً)"},
     {en:"She can't be serious!", ar:"لا يمكن أن تكون جادة!"},
     {en:"It might rain tonight.", ar:"ربما تمطر الليلة."},
     {en:"He must have forgotten.", ar:"لا بد أنه نسي."}
   ],
   tip:"للاستنتاج عن الماضي: must have + V3 | can't have + V3.",
   tags:["مساعدة","متقدم"]},

  // EMPHASIS — DO/DOES/DID
  {id:48, cat:"أزمنة", title:"Emphatic Do / Does / Did", sub:"التوكيد بـ do", color:"#f59e0b",
   rule:"نستخدم do/does/did في الجمل الإيجابية للتأكيد والتوكيد وللرد على الشك.",
   formula:"do/does/did + base verb (for emphasis)",
   examples:[
     {en:"I do like coffee. (emphasis)", ar:"أنا أحب القهوة فعلاً."},
     {en:"She does work hard.", ar:"هي تعمل بجد فعلاً."},
     {en:"He did call you yesterday.", ar:"هو اتصل بك بالأمس فعلاً."},
     {en:"I did finish my homework!", ar:"أنا أنهيت واجبي فعلاً!"}
   ],
   tip:"مفيد جداً للرد على اتهام أو شك: 'You don't study' — 'I DO study!'",
   tags:["أزمنة","متوسط"]},

  // QUESTION TAGS
  {id:49, cat:"أسئلة", title:"Question Tags", sub:"ذيل السؤال", color:"#22c55e",
   rule:"يُضاف في نهاية الجملة للتأكيد أو طلب الموافقة. إذا كانت الجملة مثبتة يكون الذيل منفياً والعكس.",
   formula:"(+) sentence, + (−) tag? | (−) sentence, + (+) tag?",
   examples:[
     {en:"It's hot today, isn't it?", ar:"الجو حار اليوم، أليس كذلك؟"},
     {en:"You don't like fish, do you?", ar:"أنت لا تحب السمك، أليس كذلك؟"},
     {en:"She can swim, can't she?", ar:"هي تستطيع السباحة، أليس كذلك؟"},
     {en:"They haven't left, have they?", ar:"لم يغادروا، أليس كذلك؟"}
   ],
   tip:"I am late, aren't I? (ليس: amn't I) — هذا استثناء مشهور.",
   tags:["أسئلة","متوسط"]},

  // SO / NEITHER
  {id:50, cat:"أسئلة", title:"So / Neither — Agreement", sub:"الموافقة والمشاركة", color:"#22c55e",
   rule:"So للموافقة على إيجاب. Neither/Nor للموافقة على نفي.",
   formula:"So + auxiliary + subject | Neither/Nor + auxiliary + subject",
   examples:[
     {en:"I'm hungry. So am I.", ar:"أنا جائع. أنا أيضاً."},
     {en:"She can drive. So can he.", ar:"هي تستطيع القيادة. هو أيضاً."},
     {en:"I don't like spicy food. Neither do I.", ar:"لا أحب الطعام الحار. أنا أيضاً."},
     {en:"He hasn't finished. Neither have they.", ar:"لم ينتهِ. هم أيضاً."}
   ],
   tip:"So/Neither + مساعد + فاعل (ليس فعل عادي).",
   tags:["أسئلة","متوسط"]},

  // CAUSATIVE HAVE/GET
  {id:51, cat:"مجهول", title:"Causative Have / Get", sub:"جعل شخص يفعل شيئاً", color:"#ef4444",
   rule:"نستخدم have/get للتعبير عن أننا جعلنا شخصاً يفعل شيئاً لنا أو رتبنا لذلك.",
   formula:"have + object + V3 | get + object + to-infinitive",
   examples:[
     {en:"I had my car repaired.", ar:"أصلحت سيارتي (جعلت أحدهم يصلحها)."},
     {en:"She got her hair cut.", ar:"قصّت شعرها (ذهبت لتقصيره)."},
     {en:"He had his suit cleaned.", ar:"نظّف بدلته (أرسلها للتنظيف)."},
     {en:"I'll get someone to fix it.", ar:"سأجعل أحداً يصلحه."}
   ],
   tip:"have + obj + V3 أكثر رسمية. get + obj + to-V أكثر شيوعاً في الكلام.",
   tags:["مجهول","متقدم"]},

  // INVERSION
  {id:52, cat:"أسئلة", title:"Inversion with Negatives", sub:"القلب مع النفي", color:"#22c55e",
   rule:"عند بدء الجملة بـ never/rarely/seldom/not only/hardly/scarcely يحدث قلب (مساعد + فاعل).",
   formula:"Negative adverb + auxiliary + subject + verb",
   examples:[
     {en:"Never have I seen such beauty.", ar:"لم أرَ قط مثل هذا الجمال."},
     {en:"Rarely does she complain.", ar:"نادراً ما تشكو."},
     {en:"Not only did he apologize, but he also helped.", ar:"لم يعتذر فحسب، بل ساعد أيضاً."},
     {en:"Hardly had I slept when the alarm rang.", ar:"بالكاد نمت حتى رنّ المنبه."}
   ],
   tip:"يستخدم في الكتابة الرسمية والأدبية للتأكيد.",
   tags:["أسئلة","متقدم"]},

  // CLEFT SENTENCES
  {id:53, cat:"أسئلة", title:"Cleft Sentences — It is/was", sub:"جمل التركيز", color:"#22c55e",
   rule:"نستخدم It is/was + اسم/ضمير + that/who للتركيز على جزء معين من الجملة.",
   formula:"It is/was + [focus] + that/who + rest of sentence",
   examples:[
     {en:"It was Ahmed who broke the window.", ar:"أحمد هو من كسر النافذة."},
     {en:"It is your attitude that matters.", ar:"موقفك هو ما يهم."},
     {en:"It was yesterday that I saw her.", ar:"أمس هو عندما رأيتها."},
     {en:"It is hard work that leads to success.", ar:"العمل الجاد هو ما يؤدي إلى النجاح."}
   ],
   tip:"طريقة قوية لتسليط الضوء على معلومة محددة في الجملة.",
   tags:["أسئلة","متقدم"]},

  // PARTICIPLE CLAUSES
  {id:54, cat:"Gerund", title:"Participle Clauses", sub:"جمل الاسم الفاعل", color:"#10b981",
   rule:"نستخدم V-ing أو V3 بديلاً عن جملة فرعية لتقليل التكرار وجعل الجملة أكثر أناقة.",
   formula:"V-ing clause (active) | V3 clause (passive)",
   examples:[
     {en:"Seeing the danger, he stopped. (= When he saw)", ar:"لمّا رأى الخطر، توقف."},
     {en:"Tired of waiting, she left.", ar:"متعبة من الانتظار، غادرت."},
     {en:"Having finished, I went to bed.", ar:"بعد أن انتهيت، ذهبت إلى النوم."},
     {en:"Shocked by the news, he sat down.", ar:"مصدوماً من الخبر، جلس."}
   ],
   tip:"فاعل الجملتين يجب أن يكون نفسه لاستخدام participle clause.",
   tags:["Gerund","متقدم"]},

  // LINKING WORDS — CONTRAST
  {id:55, cat:"معرّف", title:"Linking Words — Contrast", sub:"أدوات الربط للتناقض", color:"#6366f1",
   rule:"Although/Even though + جملة كاملة. Despite/In spite of + اسم/gerund. However/Nevertheless في بداية الجملة.",
   formula:"Although + clause | Despite + noun/gerund | However, + sentence",
   examples:[
     {en:"Although it was raining, we went out.", ar:"على الرغم من المطر، خرجنا."},
     {en:"Despite being tired, she kept working.", ar:"على الرغم من تعبها، استمرت في العمل."},
     {en:"He studied hard. However, he failed.", ar:"درس بجد. ومع ذلك، رسب."},
     {en:"In spite of the noise, I slept well.", ar:"على الرغم من الضجيج، نمت جيداً."}
   ],
   tip:"Although و Despite لا تُستخدمان معاً: Although despite ❌.",
   tags:["معرّف","متوسط"]},

  // LINKING WORDS — REASON & RESULT
  {id:56, cat:"معرّف", title:"Linking Words — Reason & Result", sub:"أدوات السبب والنتيجة", color:"#6366f1",
   rule:"Because/Since/As للسبب. Therefore/So/As a result/Consequently للنتيجة. Due to/Because of + اسم.",
   formula:"because + clause | therefore + clause | due to + noun",
   examples:[
     {en:"He was late because of the traffic.", ar:"تأخر بسبب الازدحام المروري."},
     {en:"Since it was late, we left.", ar:"بما أنه كان متأخراً، غادرنا."},
     {en:"She studied hard. Therefore, she passed.", ar:"درست بجد. لذلك، نجحت."},
     {en:"Due to rain, the match was cancelled.", ar:"بسبب المطر، أُلغيت المباراة."}
   ],
   tip:"Because of و Due to + اسم فقط. Because + جملة كاملة.",
   tags:["معرّف","متوسط"]},

  // PASSIVE — ADVANCED
  {id:57, cat:"مجهول", title:"Passive with Modals", sub:"المجهول مع الأفعال المساعدة", color:"#ef4444",
   rule:"نضع الفعل المساعد قبل be + V3 للحصول على المجهول مع modals.",
   formula:"modal + be + V3",
   examples:[
     {en:"The report must be submitted today.", ar:"يجب تقديم التقرير اليوم."},
     {en:"This can be done easily.", ar:"يمكن القيام بهذا بسهولة."},
     {en:"The project should be completed.", ar:"ينبغي إكمال المشروع."},
     {en:"Mistakes might be made.", ar:"ربما تُرتكب أخطاء."}
   ],
   tip:"modal + be + V3 للحاضر | modal + have been + V3 للماضي.",
   tags:["مجهول","متقدم"]},

  // FRONTING
  {id:58, cat:"أسئلة", title:"Fronting for Emphasis", sub:"التقديم للتأكيد", color:"#22c55e",
   rule:"نضع عنصراً في بداية الجملة بدلاً من مكانه الطبيعي للتركيز عليه.",
   formula:"[fronted element] + subject + verb",
   examples:[
     {en:"This book, I really love.", ar:"هذا الكتاب، أنا أحبه حقاً."},
     {en:"Slowly she opened the door.", ar:"ببطء فتحت الباب."},
     {en:"That I will never forget.", ar:"ذلك لن أنساه أبداً."},
     {en:"Happy he was not.", ar:"سعيداً لم يكن."}
   ],
   tip:"الـ Fronting شائع في الكتابة الأدبية والخطابة لإعطاء التأثير الدرامي.",
   tags:["أسئلة","متقدم"]},

  // SUBJUNCTIVE
  {id:59, cat:"شرط", title:"Subjunctive Mood", sub:"صيغة التمني والاقتراح", color:"#ef4444",
   rule:"نستخدم المصدر (base form) بعد أفعال: suggest/recommend/insist/demand/propose + that.",
   formula:"suggest/recommend/insist + that + subject + base verb",
   examples:[
     {en:"I suggest that he study harder.", ar:"أقترح أن يدرس بجد أكثر."},
     {en:"She recommended that he be promoted.", ar:"أوصت بترقيته."},
     {en:"The doctor insisted that she rest.", ar:"أصرّ الطبيب على أن ترتاح."},
     {en:"It is vital that everyone attend.", ar:"من الضروري أن يحضر الجميع."}
   ],
   tip:"في الأمريكي: suggest he study. في البريطاني: suggest he should study.",
   tags:["شرط","متقدم"]},

  // ELLIPSIS & SUBSTITUTION
  {id:60, cat:"معرّف", title:"Ellipsis & Substitution", sub:"الحذف والإحلال", color:"#6366f1",
   rule:"Ellipsis = حذف جزء واضح من السياق. Substitution = استبدال كلمة بـ one/do so/that.",
   formula:"use 'so', 'do so', 'one/ones', 'that' to avoid repetition",
   examples:[
     {en:"'Are you coming?' 'I hope so.'", ar:"'هل ستأتي؟' 'آمل ذلك.'"},
     {en:"'Did she call?' 'Yes, she did.' (= called)", ar:"'هل اتصلت؟' 'نعم.' (حذف called)"},
     {en:"I need a pen. Do you have one?", ar:"أحتاج قلماً. هل معك واحد؟"},
     {en:"She studied hard and so did he.", ar:"درست بجد وكذلك فعل هو."}
   ],
   tip:"تجنب التكرار باستخدام so/do so/one يجعل كلامك أكثر طبيعية.",
   tags:["معرّف","متقدم"]}

];
