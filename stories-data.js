// =====================================================
//  CineLingua — Stories Data
//  30 قصة موزعة على 6 مستويات CEFR
//  5 قصص لكل مستوى: A1 · A2 · B1 · B2 · C1 · C2
// =====================================================

const STORIES_DATA = [

  // ════════════════════════════════════════
  //  A1 — مبتدئ مطلق (5 قصص)
  // ════════════════════════════════════════
  {
    id: 1, level: 'a1', difficulty: 'A1',
    title: 'My Family',
    image: 'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg',
    arabic: 'عائلتي صغيرة. لدي أب وأم وأخت واحدة. اسم أبي عمر وهو طبيب. اسم أمي سارة وهي معلمة. اسم أختي لينا وهي طالبة. نحن نعيش في بيت كبير ونحب بعضنا كثيراً.',
    content: `My family is small. I have a father, a mother, and one sister.
My father's name is Omar. He is a doctor.
My mother's name is Sara. She is a teacher.
My sister's name is Lina. She is a student at school.
We live in a big house. We love each other very much.`,
    questions: [
      { question: "What is the father's job?", options: ['Teacher', 'Doctor', 'Engineer', 'Driver'], correct: 1, explanation: "The story says: 'He is a doctor.'" },
      { question: "How many sisters does the writer have?", options: ['None', 'One', 'Two', 'Three'], correct: 1, explanation: "The story says: 'I have... one sister.'" },
      { question: "Where does the family live?", options: ['In a flat', 'In a small house', 'In a big house', 'At school'], correct: 2, explanation: "The story says: 'We live in a big house.'" },
    ]
  },
  {
    id: 2, level: 'a1', difficulty: 'A1',
    title: 'My Day',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600',
    arabic: 'أستيقظ كل يوم في الساعة السابعة. أغسل وجهي وآكل الإفطار. أذهب إلى المدرسة بالحافلة. أتعلم الرياضيات والإنجليزية. أعود إلى البيت في الساعة الثانية. آكل الغداء ثم ألعب. أنام في الساعة العاشرة.',
    content: `I wake up every day at seven o'clock. I wash my face and eat breakfast.
I go to school by bus. I learn maths and English.
I come home at two o'clock. I have lunch and then I play.
I go to sleep at ten o'clock.`,
    questions: [
      { question: "What time does the writer wake up?", options: ["6 o'clock", "7 o'clock", "8 o'clock", "9 o'clock"], correct: 1, explanation: "The story says: 'I wake up every day at seven o'clock.'" },
      { question: "How does the writer go to school?", options: ['By car', 'On foot', 'By bus', 'By bicycle'], correct: 2, explanation: "The story says: 'I go to school by bus.'" },
      { question: "What does the writer do after lunch?", options: ['Sleep', 'Study', 'Play', 'Watch TV'], correct: 2, explanation: "The story says: 'I have lunch and then I play.'" },
    ]
  },
  {
    id: 3, level: 'a1', difficulty: 'A1',
    title: 'The Cat and the Dog',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600',
    arabic: 'لدي قطة صغيرة اسمها ميمي. ميمي بيضاء وجميلة وتأكل السمك. لجاري كلب اسمه ريكس. ريكس كبير وأسود. في البداية لم يحبا بعضهما، لكنهما الآن أصدقاء جيدون.',
    content: `I have a small cat. Her name is Mimi. Mimi is white and beautiful. She eats fish.
My neighbour has a dog. His name is Rex. Rex is big and black.
At first, Mimi and Rex did not like each other.
But now they are good friends.`,
    questions: [
      { question: "What colour is Mimi?", options: ['Black', 'Orange', 'White', 'Brown'], correct: 2, explanation: "The story says: 'Mimi is white.'" },
      { question: "What does Mimi eat?", options: ['Meat', 'Milk', 'Fish', 'Bread'], correct: 2, explanation: "The story says: 'She eats fish.'" },
      { question: "Are Mimi and Rex friends now?", options: ['No, they fight', 'Yes, they are good friends', "We don't know", 'They never met'], correct: 1, explanation: "The story says: 'now they are good friends.'" },
    ]
  },
  {
    id: 4, level: 'a1', difficulty: 'A1',
    title: 'My Bedroom',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
    arabic: 'غرفتي صغيرة لكنها جميلة. فيها سرير ومكتب وخزانة. اللون المفضل لدي هو الأزرق لذلك الجدران زرقاء. على مكتبي كتب وقلم. أحب غرفتي كثيراً وأنظفها كل يوم.',
    content: `My bedroom is small but beautiful. It has a bed, a desk, and a wardrobe.
My favourite colour is blue, so the walls are blue.
On my desk, I have books and a pen.
I love my bedroom very much. I clean it every day.`,
    questions: [
      { question: "What colour are the walls in the bedroom?", options: ['Green', 'Red', 'Blue', 'Yellow'], correct: 2, explanation: "The story says: 'the walls are blue.'" },
      { question: "What is on the desk?", options: ['A computer and a phone', 'Books and a pen', 'A lamp and toys', 'Nothing'], correct: 1, explanation: "The story says: 'On my desk, I have books and a pen.'" },
      { question: "How often does the writer clean the bedroom?", options: ['Once a week', 'Every month', 'Every day', 'Never'], correct: 2, explanation: "The story says: 'I clean it every day.'" },
    ]
  },
  {
    id: 5, level: 'a1', difficulty: 'A1',
    title: 'At the Park',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600',
    arabic: 'نذهب كل يوم جمعة إلى الحديقة. الحديقة كبيرة وجميلة. فيها أشجار وورود وملعب للأطفال. ألعب بالكرة مع أخي. أمي تجلس على العشب وتشرب الشاي. نحن سعداء في الحديقة.',
    content: `We go to the park every Friday. The park is big and beautiful.
It has trees, flowers, and a playground for children.
I play football with my brother.
My mother sits on the grass and drinks tea.
We are happy at the park.`,
    questions: [
      { question: "When do they go to the park?", options: ['Every day', 'Every Friday', 'Every Sunday', 'Every month'], correct: 1, explanation: "The story says: 'We go to the park every Friday.'" },
      { question: "What does the writer do at the park?", options: ['Reads books', 'Plays football', 'Drinks tea', 'Sleeps'], correct: 1, explanation: "The story says: 'I play football with my brother.'" },
      { question: "What does the mother do?", options: ['Plays with the children', 'Walks around', 'Sits and drinks tea', 'Reads a book'], correct: 2, explanation: "The story says: 'My mother sits on the grass and drinks tea.'" },
    ]
  },

  // ════════════════════════════════════════
  //  A2 — مبتدئ (5 قصص)
  // ════════════════════════════════════════
  {
    id: 6, level: 'a2', difficulty: 'A2',
    title: 'A Day at the Market',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600',
    arabic: 'ذهبت أمي إلى السوق أمس. اشترت خضروات وفواكه طازجة. كانت الطماطم رخيصة لكن الموز كان غالياً. التقت بصديقتها هناك وتحدثتا طويلاً. عادت إلى البيت وطبخت حساءً لذيذاً للعشاء.',
    content: `My mother went to the market yesterday. She bought fresh vegetables and fruit.
The tomatoes were cheap, but the bananas were expensive.
She met her friend there, and they talked for a long time.
She came back home and cooked a delicious soup for dinner.`,
    questions: [
      { question: "When did the mother go to the market?", options: ['Today', 'Tomorrow', 'Yesterday', 'Last week'], correct: 2, explanation: "The story says: 'went to the market yesterday.'" },
      { question: "Which food was expensive?", options: ['Tomatoes', 'Soup', 'Vegetables', 'Bananas'], correct: 3, explanation: "The story says: 'the bananas were expensive.'" },
      { question: "What did the mother cook for dinner?", options: ['Rice', 'Pizza', 'Soup', 'Chicken'], correct: 2, explanation: "The story says: 'cooked a delicious soup for dinner.'" },
    ]
  },
  {
    id: 7, level: 'a2', difficulty: 'A2',
    title: 'The New School',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600',
    arabic: 'انتقلت نورا إلى مدينة جديدة الشهر الماضي. كانت خائفة من المدرسة الجديدة. في اليوم الأول جلست وحدها. لكن ريم جاءت وجلست بجانبها وقالت: "مرحباً، أنا ريم. هل أنت جديدة؟" أصبحتا صديقتين جيدتين.',
    content: `Nora moved to a new city last month. She was scared of the new school.
On the first day, she sat alone in the classroom.
But a girl called Reem came and sat next to her.
Reem smiled and said: "Hello, I'm Reem. Are you new here?"
They became good friends.`,
    questions: [
      { question: "How did Nora feel about the new school?", options: ['Excited', 'Bored', 'Scared', 'Happy'], correct: 2, explanation: "The story says: 'She was scared of the new school.'" },
      { question: "What did Reem do when she saw Nora?", options: ['Walked away', 'Sat next to her', 'Called the teacher', 'Laughed'], correct: 1, explanation: "The story says: 'Reem came and sat next to her.'" },
      { question: "What is the main message of the story?", options: ['New cities are dangerous', 'Kindness can start friendships', 'School is boring', 'Moving is easy'], correct: 1, explanation: "Reem's simple act of kindness led to a friendship." },
    ]
  },
  {
    id: 8, level: 'a2', difficulty: 'A2',
    title: 'The Lost Phone',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600',
    arabic: 'نسي أحمد هاتفه في الحافلة. بحث عنه في كل مكان لكنه لم يجده. كان حزيناً جداً. في اليوم التالي اتصل به رجل غريب وقال: "وجدت هاتفك. تعال وخذه." ذهب أحمد وشكر الرجل الطيب كثيراً.',
    content: `Ahmed forgot his phone on the bus. He looked for it everywhere, but he could not find it.
He was very sad.
The next day, a stranger called him. He said: "I found your phone on the bus. Come and take it."
Ahmed went and got his phone back. He thanked the kind man very much.`,
    questions: [
      { question: "Where did Ahmed forget his phone?", options: ['At school', 'At home', 'On the bus', 'In a shop'], correct: 2, explanation: "The story says: 'forgot his phone on the bus.'" },
      { question: "Who called Ahmed the next day?", options: ['His mother', 'His teacher', 'A friend', 'A stranger'], correct: 3, explanation: "The story says: 'a stranger called him.'" },
      { question: "What is the lesson of this story?", options: ['Always carry your phone', 'Honesty is important', 'Buses are dangerous', 'Never travel alone'], correct: 1, explanation: "The stranger returned the phone honestly — showing that honesty matters." },
    ]
  },
  {
    id: 9, level: 'a2', difficulty: 'A2',
    title: 'Learning to Cook',
    image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=600',
    arabic: 'قررت ريم تعلم الطبخ الصيف الماضي. شاهدت فيديوهات على الإنترنت وجربت وصفات بسيطة. في البداية فشلت وأحرقت الطعام مرتين. لكنها لم تستسلم. بعد شهر استطاعت طبخ وجبة كاملة لعائلتها وكانوا سعداء جداً.',
    content: `Reem decided to learn cooking last summer. She watched videos online and tried simple recipes.
At first, she failed and burned the food twice.
But she did not give up. After one month, she was able to cook a full meal for her family.
They were very happy.`,
    questions: [
      { question: "How did Reem learn to cook?", options: ['From her mother', 'At school', 'By watching online videos', 'From a book'], correct: 2, explanation: "The story says: 'She watched videos online.'" },
      { question: "What happened when she first tried to cook?", options: ['It was perfect', 'She burned the food twice', 'Her family helped her', 'She gave up'], correct: 1, explanation: "The story says: 'she failed and burned the food twice.'" },
      { question: "What is the main lesson of this story?", options: ['Cooking is easy', 'Giving up is fine', 'Practice makes perfect', 'Online videos are useless'], correct: 2, explanation: "Reem failed but kept trying until she succeeded — practice makes perfect." },
    ]
  },
  {
    id: 10, level: 'a2', difficulty: 'A2',
    title: 'A Rainy Day',
    image: 'https://images.unsplash.com/photo-1428592953211-077101b2021b?w=600',
    arabic: 'في يوم ممطر، بقي كريم في البيت. شاهد فيلماً ثم قرأ كتاباً. في المساء أراد الخروج لكن المطر كان شديداً. جلس عند النافذة ونظر إلى الشارع. رأى طفلاً صغيراً يلعب في المطر ويضحك. ابتسم كريم وتمنى لو يلعب معه.',
    content: `On a rainy day, Kareem stayed at home. He watched a film and then read a book.
In the evening, he wanted to go out, but the rain was very heavy.
He sat by the window and looked at the street.
He saw a small child playing in the rain and laughing.
Kareem smiled and wished he could play with him.`,
    questions: [
      { question: "Why did Kareem stay at home?", options: ['He was sick', 'He had homework', 'It was raining', 'He was tired'], correct: 2, explanation: "The story is set on a rainy day and the rain was too heavy to go out." },
      { question: "What did Kareem do first at home?", options: ['Read a book', 'Watched a film', 'Slept', 'Cooked'], correct: 1, explanation: "The story says: 'He watched a film and then read a book.'" },
      { question: "How did the child in the street feel?", options: ['Sad and cold', 'Scared', 'Happy and laughing', 'Angry'], correct: 2, explanation: "The story says: 'playing in the rain and laughing.'" },
    ]
  },

  // ════════════════════════════════════════
  //  B1 — متوسط (5 قصص)
  // ════════════════════════════════════════
  {
    id: 11, level: 'b1', difficulty: 'B1',
    title: 'The Power of Habit',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600',
    arabic: 'يقول العلماء إن العادات تتشكل في الدماغ بعد التكرار الكثير. عندما نكرر فعلاً يومياً يصبح تلقائياً. لهذا يصعب تغيير العادات السيئة. لكن يمكن بناء عادات جديدة بالصبر. ابدأ بتغييرات صغيرة وستلاحظ الفرق بعد أسابيع قليلة.',
    content: `Scientists say that habits form in the brain after being repeated many times.
When we repeat a certain action every day, it becomes automatic.
This is why it is difficult to break bad habits.
However, the good news is that we can build new habits with patience and practice.
Start with small changes, and you will notice the difference after just a few weeks.`,
    questions: [
      { question: "According to the text, what makes an action become automatic?", options: ['Thinking about it', 'Repeating it daily', 'Reading about it', 'Watching others'], correct: 1, explanation: "The text says: 'When we repeat a certain action every day, it becomes automatic.'" },
      { question: "What does the writer suggest to build new habits?", options: ['Make big changes immediately', 'Give up completely', 'Start with small changes', 'Ask for help'], correct: 2, explanation: "The text says: 'Start with small changes.'" },
      { question: "What is the overall tone of this text?", options: ['Pessimistic', 'Informative and encouraging', 'Angry', 'Humorous'], correct: 1, explanation: "The text presents facts and ends with practical advice — informative and encouraging." },
    ]
  },
  {
    id: 12, level: 'b1', difficulty: 'B1',
    title: "The Painter's Dream",
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
    arabic: 'كانت ليلى تحب الرسم منذ طفولتها، لكن والديها أرادا منها أن تصبح طبيبة. التحقت بكلية الطب لكنها لم تكن سعيدة. بعد ثلاث سنوات تركت الطب والتحقت بمدرسة الفنون. غضب والداها أولاً لكنهما شعرا بالفخر عندما رأوا لوحاتها في معرض.',
    content: `Layla had loved painting since childhood, but her parents wanted her to become a doctor.
She entered medical school, but she was not happy there.
After three years, she decided to leave medicine and join an art school.
Her parents were angry at first, but when they saw her beautiful paintings exhibited at a gallery, they apologised and felt proud.`,
    questions: [
      { question: "Why was Layla unhappy at medical school?", options: ['It was too difficult', 'It was not her passion', 'She had no friends', 'It was far from home'], correct: 1, explanation: "Layla loved painting, not medicine — it was not her passion." },
      { question: "What changed the parents' minds?", options: ["Layla's arguments", 'Her good grades', 'Seeing her paintings at a gallery', 'A letter from school'], correct: 2, explanation: "The text says: 'when they saw her beautiful paintings exhibited at a gallery.'" },
      { question: "What is the main theme of this story?", options: ['Always obey your parents', 'Follow your passion despite opposition', 'Art is better than science', 'Medicine is too hard'], correct: 1, explanation: "Layla followed her dream despite family pressure and eventually succeeded." },
    ]
  },
  {
    id: 13, level: 'b1', difficulty: 'B1',
    title: 'Too Much Screen Time',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600',
    arabic: 'وجد الباحثون أن قضاء أكثر من أربع ساعات يومياً على الهاتف يرتبط بالقلق والاكتئاب. كما يؤثر على النوم لأن الضوء الأزرق يخدع الدماغ. ينصح الخبراء بتخصيص أوقات بلا شاشات، خاصة قبل النوم بساعة.',
    content: `Researchers have found that spending more than four hours a day on a phone is linked to anxiety and depression in young people.
It also affects sleep quality because blue light from screens tricks the brain into thinking it is daytime.
Experts recommend setting screen-free times, especially one hour before bed.
Small changes in screen habits can lead to significant improvements in mood and sleep.`,
    questions: [
      { question: "What does blue light from screens do?", options: ['Helps the eyes relax', 'Improves concentration', "Tricks the brain about the time of day", 'Has no effect'], correct: 2, explanation: "The text says: 'blue light tricks the brain into thinking it is daytime.'" },
      { question: "How many hours of phone use per day is linked to anxiety?", options: ['More than 2', 'More than 3', 'More than 4', 'More than 6'], correct: 2, explanation: "The text says: 'more than four hours a day.'" },
      { question: "What do experts suggest?", options: ['Stop using phones forever', 'Use phones only for work', 'Set screen-free times before bed', 'Buy a new phone'], correct: 2, explanation: "The text says: 'setting screen-free times, especially one hour before bed.'" },
    ]
  },
  {
    id: 14, level: 'b1', difficulty: 'B1',
    title: 'The Unexpected Friendship',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600',
    arabic: 'كان سامي وداود لا يتحدثان رغم جلوسهما في نفس الفصل لسنة كاملة. سامي كان هادئاً يحب الكتب وداود كان صاخباً يحب الرياضة. لكن في مشروع جماعي اضطرا للعمل معاً. اكتشفا أنهما يشتركان في حب الموسيقى وأصبحا أفضل أصدقاء.',
    content: `Sami and Daoud never spoke, even though they sat in the same classroom for a whole year.
Sami was quiet and loved books. Daoud was loud and loved sports.
But during a group project, they had to work together.
They discovered they both loved music, and they became best friends.
Sometimes the most unexpected people become the most important ones in your life.`,
    questions: [
      { question: "Why did Sami and Daoud never speak before?", options: ['They disliked each other', 'They seemed too different', 'They were in different classes', 'They were shy'], correct: 1, explanation: "One loved books and quiet; the other loved sports and noise — they seemed too different." },
      { question: "What made them talk for the first time?", options: ['A music class', 'A school trip', 'A group project', 'A sports match'], correct: 2, explanation: "The text says: 'during a group project, they had to work together.'" },
      { question: "What did they discover they had in common?", options: ['Love of books', 'Love of sports', 'Love of music', 'Love of science'], correct: 2, explanation: "The text says: 'They discovered they both loved music.'" },
    ]
  },
  {
    id: 15, level: 'b1', difficulty: 'B1',
    title: 'The Old Photograph',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600',
    arabic: 'وجدت منى صندوقاً قديماً في غرفة جدتها. كان فيه صور قديمة. في إحداها رأت امرأة شابة جميلة تبتسم. سألت جدتها: "من هذه؟" ابتسمت جدتها وقالت: "أنا، قبل خمسين عاماً." نظرت منى إلى الصورة ثم إلى جدتها وأدركت كم مرت السنوات بسرعة.',
    content: `Mona found an old box in her grandmother's room. It was full of old photographs.
In one of them, she saw a beautiful young woman smiling.
She asked her grandmother: "Who is this?"
Her grandmother smiled and said: "That's me, fifty years ago."
Mona looked at the photograph and then at her grandmother, and realised how quickly the years pass.`,
    questions: [
      { question: "Where did Mona find the box?", options: ["In her own room", "In the garden", "In her grandmother's room", "In the kitchen"], correct: 2, explanation: "The story says: 'found an old box in her grandmother's room.'" },
      { question: "Who was the young woman in the photograph?", options: ["Mona's mother", "A famous person", "Mona herself", "Her grandmother when young"], correct: 3, explanation: "The grandmother says: 'That's me, fifty years ago.'" },
      { question: "What did Mona realise at the end?", options: ['Her grandmother was famous', 'How quickly time passes', 'Old photos are valuable', 'Her grandmother liked smiling'], correct: 1, explanation: "The story says: 'realised how quickly the years pass.'" },
    ]
  },

  // ════════════════════════════════════════
  //  B2 — فوق المتوسط (5 قصص)
  // ════════════════════════════════════════
  {
    id: 16, level: 'b2', difficulty: 'B2',
    title: 'The Illusion of Multitasking',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600',
    arabic: 'يعتقد كثيرون أن تعدد المهام ميزة إنتاجية. لكن الأبحاث تكشف أن الدماغ لا يستطيع التركيز على مهمتين معقدتين في آنٍ واحد. ما نسميه "تعدد المهام" هو في الواقع تبديل سريع يستهلك طاقة معرفية كبيرة ويقلل الجودة.',
    content: `Many people believe that the ability to multitask is a mark of productivity.
However, recent research reveals that the human brain cannot truly focus on two complex tasks simultaneously.
What we call "multitasking" is, in reality, rapid switching between tasks — and this consumes significant cognitive energy and reduces the quality of output.
Studies show that people who multitask regularly make more errors and take longer to complete tasks than those who focus on one thing at a time.`,
    questions: [
      { question: "What does recent research say about multitasking?", options: ['It doubles productivity', 'The brain can truly do two things at once', 'It is actually rapid task-switching', 'It is a useful skill'], correct: 2, explanation: "The text says: 'What we call multitasking is, in reality, rapid switching between tasks.'" },
      { question: "What is the effect of multitasking on output quality?", options: ['It improves it', 'It has no effect', 'It reduces it', 'It depends on the task'], correct: 2, explanation: "The text says: 'reduces the quality of output.'" },
      { question: "The word 'simultaneously' in the text means:", options: ['Slowly', 'At the same time', 'One after another', 'Occasionally'], correct: 1, explanation: "Simultaneously = في نفس الوقت / at the same time." },
    ]
  },
  {
    id: 17, level: 'b2', difficulty: 'B2',
    title: 'The Last Library',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
    arabic: 'تكافح المكتبات العامة من أجل البقاء في عالم رقمي. لكنها أصبحت أكثر من مكان للكتب: إنها ملجأ للمحتاجين ومساحة للتعلم ومركز للمجتمع. إغلاقها يعني خسارة الحيز العام الأخير المتاح للجميع بلا تمييز.',
    content: `In a world dominated by digital screens, public libraries are struggling to survive.
Yet in some communities, the library has become more than a place for books — it is a refuge for the homeless, a space for low-income learners, and a community hub.
Closing a library does not merely mean losing books; it means losing the last truly public space accessible to everyone, regardless of income or status.`,
    questions: [
      { question: "According to the text, what has the library become beyond books?", options: ['A school', 'A refuge and community hub', 'A digital centre', 'A government office'], correct: 1, explanation: "The text describes it as a refuge, a learning space, and a community hub." },
      { question: "What does the writer imply about closing libraries?", options: ['It is economically necessary', 'It only affects readers', 'It has broad social consequences', 'It can be replaced by the internet'], correct: 2, explanation: "Losing the 'last truly public space' has broad social consequences." },
      { question: "The phrase 'regardless of income or status' means:", options: ['Only for wealthy people', 'For people with similar backgrounds', 'Without discrimination based on wealth', 'For government employees'], correct: 2, explanation: "Regardless of = بغض النظر عن — without discrimination." },
    ]
  },
  {
    id: 18, level: 'b2', difficulty: 'B2',
    title: 'The Kindness Experiment',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600',
    arabic: 'طلبت جامعة كاليفورنيا من طلاب إنجاز خمسة أعمال لطيفة يومياً لمدة أسبوع. أفاد هؤلاء بسعادة أكبر مقارنة بالمجموعة الضابطة. الأهم أن الأعمال اللطيفة أفادت القائم بها بنفس القدر الذي أفادت المتلقي.',
    content: `A University of California experiment asked a group of students to perform five acts of kindness daily for one week.
At the end of the week, these students reported significantly greater feelings of happiness compared to a control group.
What was particularly striking was that the acts of kindness benefited the giver as much as the receiver — suggesting that generosity may be one of the most reliable paths to personal wellbeing.`,
    questions: [
      { question: "What were students asked to do in the experiment?", options: ['Study for five hours daily', 'Perform five acts of kindness daily', 'Exercise five times a week', 'Read five books in a week'], correct: 1, explanation: "The text says: 'perform five acts of kindness daily for one week.'" },
      { question: "What was the most striking finding?", options: ['Kindness is tiring', 'Kind people are more popular', 'Kindness benefits the giver as much as the receiver', 'The control group was happier'], correct: 2, explanation: "The text says: 'the acts of kindness benefited the giver as much as the receiver.'" },
      { question: "What does 'wellbeing' mean in this context?", options: ['Physical fitness', 'Financial security', 'Overall happiness and health', 'Academic success'], correct: 2, explanation: "Wellbeing = الرفاه العام / overall happiness and health." },
    ]
  },
  {
    id: 19, level: 'b2', difficulty: 'B2',
    title: 'Remote Work: A Double-Edged Sword',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600',
    arabic: 'أصبح العمل عن بُعد شائعاً منذ الجائحة. يرى المؤيدون أنه يحسن التوازن بين العمل والحياة ويقلل وقت التنقل. لكن المعارضين يقولون إنه يضعف التماسك وطمس الحدود بين العمل والحياة الشخصية. تعتمد الشركات الآن نموذج العمل الهجين كحل وسط.',
    content: `Remote work has become increasingly common since the pandemic.
Proponents argue it improves work-life balance and reduces commuting time.
Critics, however, contend that it weakens team cohesion and blurs the boundary between professional and personal life.
Companies are now adopting hybrid models as a compromise, allowing employees to split their time between home and the office.`,
    questions: [
      { question: "What solution do companies use to address both sides?", options: ['Full remote work', 'Full office work', 'Hybrid models', 'Shorter working hours'], correct: 2, explanation: "The text says: 'Companies are now adopting hybrid models as a compromise.'" },
      { question: "What do critics say about remote work?", options: ['It increases productivity', 'It improves communication', 'It weakens team cohesion', 'It reduces stress'], correct: 2, explanation: "The text says: 'critics contend that it weakens team cohesion.'" },
      { question: "The text presents remote work as:", options: ['Entirely positive', 'Entirely negative', 'Having both benefits and drawbacks', 'Irrelevant today'], correct: 2, explanation: "The text presents both proponents and critics — showing both sides." },
    ]
  },
  {
    id: 20, level: 'b2', difficulty: 'B2',
    title: 'The Language of Colour',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600',
    arabic: 'الألوان ليست مجرد ظاهرة بصرية — إنها لغة نفسية وثقافية. الأحمر يرمز إلى الخطر في الغرب لكنه يرمز إلى الحظ في الصين. الأبيض يدل على النقاء في أوروبا لكنه لون الحداد في بعض الثقافات الآسيوية. هذا يُظهر أن معاني الألوان ليست طبيعية بل مكتسبة.',
    content: `Colours are not merely visual phenomena — they are a psychological and cultural language.
Red symbolises danger in the West, but signals good luck in China.
White suggests purity in Europe, yet is the colour of mourning in some Asian cultures.
These contradictions reveal that colour meanings are not universal or instinctive — they are learned, shaped by history, religion, and shared experience.`,
    questions: [
      { question: "What does red symbolise in China, according to the text?", options: ['Danger', 'Mourning', 'Good luck', 'Purity'], correct: 2, explanation: "The text says: 'signals good luck in China.'" },
      { question: "What does the text argue about colour meanings?", options: ['They are universal', 'They are instinctive', 'They are culturally learned', 'They are unimportant'], correct: 2, explanation: "The text says: 'colour meanings are not universal or instinctive — they are learned.'" },
      { question: "What does 'phenomena' mean in 'merely visual phenomena'?", options: ['Illusions', 'Observable events or facts', 'Problems', 'Experiments'], correct: 1, explanation: "Phenomena = ظواهر — observable facts or events." },
    ]
  },

  // ════════════════════════════════════════
  //  C1 — متقدم (5 قصص)
  // ════════════════════════════════════════
  {
    id: 21, level: 'c1', difficulty: 'C1',
    title: 'The Paradox of Choice',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
    arabic: 'يفترض المنطق التقليدي أن المزيد من الخيارات يعني حرية أكبر. لكن عالم النفس باري شوارتز يجادل بأن وفرة الخيارات تُفضي إلى شلل القرار والندم المزمن. عندما نختار من عشرين خياراً نظل نتساءل: هل كان ثمة خيار أفضل؟ هذا يُقلص رضانا حتى عن الخيارات الجيدة.',
    content: `Conventional wisdom assumes that more choice equates to greater freedom and deeper satisfaction.
However, psychologist Barry Schwartz argues that an abundance of options often leads to decision paralysis and chronic regret.
When we choose from twenty alternatives, we remain haunted by the question: might another option have been better?
This anxiety erodes our satisfaction even with objectively good choices — a phenomenon Schwartz calls "the paradox of choice."`,
    questions: [
      { question: "What does Barry Schwartz argue about too many choices?", options: ['It leads to better decisions', 'It creates paralysis and regret', 'It increases freedom', 'It has no psychological impact'], correct: 1, explanation: "Schwartz argues too many options lead to 'decision paralysis and chronic regret.'" },
      { question: "What does 'haunted by the question' suggest?", options: ['A brief, passing worry', 'A persistent and troubling thought', 'A ghost story metaphor', 'Occasional curiosity'], correct: 1, explanation: "'Haunted by' means persistently troubled — a lingering, disturbing thought." },
      { question: "What does 'erodes' mean in 'this anxiety erodes our satisfaction'?", options: ['Strengthens', 'Gradually wears away', 'Suddenly destroys', 'Creates'], correct: 1, explanation: "Erodes = يتآكل تدريجياً / gradually wears away." },
    ]
  },
  {
    id: 22, level: 'c1', difficulty: 'C1',
    title: 'Silence as a Language',
    image: 'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?w=600',
    arabic: 'في معظم الثقافات الغربية الصمت في المحادثة مزعج يجب ملؤه سريعاً. أما في فنلندا واليابان فالصمت شكل من أشكال الاحترام والتأمل. هذا يكشف أن ما نعدّه "تواصلاً جيداً" ليس قاعدة عالمية بل بناء ثقافي.',
    content: `In most Western cultures, silence in conversation is uncomfortable — something to be filled quickly.
In Finnish and Japanese cultures, however, silence is a form of respect and contemplation.
A long pause before responding signals that the speaker's words are being taken seriously.
This divergence reveals something profound: what we consider "good communication" is not a universal standard but a cultural construct — and recognising this may be the first step towards genuine cross-cultural understanding.`,
    questions: [
      { question: "How is silence viewed in Finnish and Japanese cultures?", options: ['As rudeness', 'As boredom', 'As respect and contemplation', 'As a lack of intelligence'], correct: 2, explanation: "The text says: 'silence is a form of respect and contemplation' in these cultures." },
      { question: "What does the text suggest about 'good communication'?", options: ['It is the same everywhere', 'It is a universal standard', 'It is culturally constructed', 'It requires silence always'], correct: 2, explanation: "The text says it is 'a cultural construct — not a universal standard.'" },
      { question: "What does 'divergence' mean in this context?", options: ['Agreement', 'Similarity', 'A difference or separation', 'A tradition'], correct: 2, explanation: "Divergence = تباين / اختلاف — a difference between two things." },
    ]
  },
  {
    id: 23, level: 'c1', difficulty: 'C1',
    title: 'Nudge Theory in Practice',
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600',
    arabic: 'تقترح نظرية "النكز" أن تغييرات طفيفة في كيفية تقديم الخيارات يمكن أن تؤثر بشكل كبير على السلوك دون تقييد الحرية. طبّقتها الحكومات لتشجيع الأكل الصحي ورفع معدلات التبرع بالأعضاء وتحسين الالتزام الضريبي — كل ذلك دون تشريعات.',
    content: `The concept of 'nudge theory', popularised by Thaler and Sunstein, proposes that subtle changes in how choices are presented can significantly influence behaviour without restricting freedom of choice.
Governments have applied these insights to encourage healthier eating, increase organ donation rates, and improve tax compliance — all without legislation.
Critics, however, warn that nudging can be manipulative, steering people towards outcomes chosen by authorities rather than freely selected by individuals.`,
    questions: [
      { question: "What is the key principle of nudge theory?", options: ['Forcing better choices through law', 'Influencing behaviour through subtle environmental changes', 'Educating people about their options', 'Removing bad choices entirely'], correct: 1, explanation: "Nudge theory uses 'subtle changes' to influence behaviour without restriction." },
      { question: "What concern do critics raise about nudging?", options: ['It is too expensive', 'It does not work', 'It can be manipulative', 'It requires new laws'], correct: 2, explanation: "Critics 'warn that nudging can be manipulative, steering people towards outcomes chosen by authorities.'" },
      { question: "What does 'legislation' mean in the context of this text?", options: ['Research', 'Punishment', 'Laws and regulations', 'Financial incentives'], correct: 2, explanation: "Legislation = تشريعات / laws made by a government." },
    ]
  },
  {
    id: 24, level: 'c1', difficulty: 'C1',
    title: 'The Science of Memory',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600',
    arabic: 'الذاكرة ليست تسجيلاً دقيقاً للأحداث بل إعادة بناء نشطة. في كل مرة نتذكر حدثاً نُعدّله قليلاً دون أن ندرك ذلك. أثبتت الدراسات أن الذكريات قابلة للتلاعب بها بمجرد طرح أسئلة مُضلّلة. هذا له تبعات خطيرة على شهادات الشهود في المحاكم.',
    content: `Memory is not an accurate recording of events but an active reconstruction.
Each time we recall an event, we subtly alter it — a process neuroscientists call "reconsolidation."
Studies have demonstrated that false memories can be implanted simply by asking leading questions.
This has serious implications for eyewitness testimony in court, where confident recollection is often mistaken for accurate recollection.`,
    questions: [
      { question: "How does the text describe memory?", options: ['As a perfect recording', 'As an active reconstruction', 'As a fixed archive', 'As an emotional experience'], correct: 1, explanation: "The text says memory is 'not an accurate recording... but an active reconstruction.'" },
      { question: "What can implant false memories, according to studies?", options: ['Trauma', 'Sleep deprivation', 'Leading questions', 'Strong emotions'], correct: 2, explanation: "The text says: 'false memories can be implanted simply by asking leading questions.'" },
      { question: "What serious implication does this have?", options: ['People forget important dates', 'Eyewitness testimony may be unreliable', 'Memory improves with age', 'Courts rely too much on documents'], correct: 1, explanation: "The text warns that 'confident recollection is often mistaken for accurate recollection' in court." },
    ]
  },
  {
    id: 25, level: 'c1', difficulty: 'C1',
    title: 'The Ethics of Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600',
    arabic: 'يُعيد الذكاء الاصطناعي تشكيل الصناعات بوتيرة غير مسبوقة. بينما يُؤتمت المهام المتكررة ويرفع الكفاءة، تبرز مخاوف من التحيز الخوارزمي واستبدال الوظائف. يواجه صانعو السياسات تحدي تعزيز الابتكار مع ضمان النشر الأخلاقي وحماية الفئات الهشة.',
    content: `Artificial intelligence is reshaping industries at an unprecedented pace.
While it automates repetitive tasks and enhances efficiency, concerns persist about algorithmic bias, job displacement, and the concentration of power in the hands of a few technology corporations.
Policymakers face the challenge of fostering innovation while ensuring ethical deployment and protecting vulnerable populations.
The question is not whether AI will transform society, but whether that transformation will be equitable.`,
    questions: [
      { question: "What challenge do policymakers face according to the text?", options: ['Building better computers', 'Balancing innovation with ethical concerns', 'Training more engineers', 'Reducing internet costs'], correct: 1, explanation: "The text says: 'fostering innovation while ensuring ethical deployment.'" },
      { question: "What does 'equitable' mean in the final sentence?", options: ['Technological', 'Fair and just for all', 'Rapid and efficient', 'Profitable'], correct: 1, explanation: "Equitable = عادل / fair and just — the transformation should benefit everyone fairly." },
      { question: "Which concern is NOT mentioned in the text?", options: ['Algorithmic bias', 'Job displacement', 'Environmental damage', 'Concentration of power'], correct: 2, explanation: "Environmental damage is not mentioned — the text focuses on bias, jobs, and power." },
    ]
  },

  // ════════════════════════════════════════
  //  C2 — إتقان تام (5 قصص)
  // ════════════════════════════════════════
  {
    id: 26, level: 'c2', difficulty: 'C2',
    title: "Orwell's Warning",
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600',
    arabic: 'جادل أورويل في مقالته "السياسة واللغة الإنجليزية" بأن اللغة السياسية مُصمَّمة لجعل الكذب يبدو حقيقياً والقتل يبدو محترماً. وأن انحلال اللغة وانحلال المجتمع يتعززان متبادلاً. علاجه كان البساطة الجذرية: فضّل الكلمة القصيرة والفعل النشط والصورة الملموسة.',
    content: `Orwell's 'Politics and the English Language' argued that political language is designed to make lies sound truthful and murder respectable.
He believed that the decay of language and the decay of society are mutually reinforcing — that vague, euphemistic writing both reflects and perpetuates muddled thinking.
His remedy was radical simplicity: prefer the short word, the active verb, the concrete image.
To write clearly, he insisted, is to think clearly — and to think clearly is to resist the manipulation that obscure language enables.`,
    questions: [
      { question: "What is Orwell's central argument about political language?", options: ['It is complex due to difficult topics', 'It deliberately obscures dishonesty', 'It reflects advanced literary skill', 'It should use more technical vocabulary'], correct: 1, explanation: "Orwell argues political language is 'designed to make lies sound truthful' — deliberately obscuring dishonesty." },
      { question: "What does 'mutually reinforcing' mean in context?", options: ['One causes the other, but not vice versa', 'Each one makes the other stronger or worse', 'They exist independently', 'One can solve the other'], correct: 1, explanation: "Mutually reinforcing = كل واحد يعزز الآخر — each makes the other stronger or worse." },
      { question: "What is Orwell's proposed solution to manipulative language?", options: ['Elaborate sophisticated vocabulary', 'Radical simplicity — short words and concrete images', 'Avoiding political topics', 'Using more passive voice'], correct: 1, explanation: "Orwell advocates 'radical simplicity: the short word, the active verb, the concrete image.'" },
    ]
  },
  {
    id: 27, level: 'c2', difficulty: 'C2',
    title: 'The Paradox of Tolerance',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600',
    arabic: 'يرى الفيلسوف كارل بوبر أن المجتمع المتسامح بلا حدود سيُسيطر عليه المتعصبون في نهاية المطاف. خلص إلى أن الحفاظ على مجتمع متسامح يستلزم عدم التسامح مع التعصب نفسه — موقف لا يزال مثيراً للجدل في الخطاب الديمقراطي الليبرالي.',
    content: `The paradox of tolerance, articulated by philosopher Karl Popper, holds that a society tolerant without limit will eventually be seized by the intolerant.
Popper concluded that in order to maintain a tolerant society, the society must be intolerant of intolerance itself.
This position remains deeply contentious in liberal democratic discourse: at what point does suppressing intolerant views become itself a form of intolerance?
The paradox exposes a fundamental tension at the heart of liberal values that has no easy resolution.`,
    questions: [
      { question: "What is the paradox Popper identifies?", options: ['Tolerance always leads to greater freedom', 'Being tolerant of intolerance ultimately destroys tolerance', 'Intolerant societies are more stable', 'Democracy requires absolute freedom of expression'], correct: 1, explanation: "Unlimited tolerance allows intolerant groups to eventually seize control and destroy tolerance itself." },
      { question: "Why does this position remain contentious?", options: ['Because Popper was not a serious philosopher', 'Because suppressing views can itself be seen as intolerance', 'Because most societies are already intolerant', 'Because tolerance is unimportant today'], correct: 1, explanation: "The text asks: 'at what point does suppressing intolerant views become itself a form of intolerance?'" },
      { question: "What does 'articulated' mean in 'articulated by philosopher Karl Popper'?", options: ['Discovered', 'Clearly expressed and formulated', 'Rejected', 'Simplified'], correct: 1, explanation: "Articulated = صاغه بوضوح / clearly expressed and formulated." },
    ]
  },
  {
    id: 28, level: 'c2', difficulty: 'C2',
    title: 'The Sublime and the Uncanny',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600',
    arabic: 'الرهيب والغريب المقلق مفهومان جماليان يستكشفان استجاباتنا لتجارب تتجاوز حدود الفهم العادي. الرهيب — كما يصفه إدموند بيرك — تجربة تجمع بين الإجلال والخوف أمام عظمة تطغى على الإدراك. الغريب المقلق عند فرويد هو ما كان مألوفاً ذات مرة ثم أصبح مقلقاً بعد كبته.',
    content: `The sublime and the uncanny are two aesthetic concepts that explore our responses to experiences exceeding ordinary comprehension.
The sublime — as described by Edmund Burke — is that which produces a mixture of awe and terror in the face of overwhelming magnitude or power.
The uncanny, as theorised by Freud, is the experience of something once familiar becoming disturbing upon repression — the strange within the familiar.
Both concepts locate the deepest aesthetic responses at the threshold between understanding and its failure — reminding us that art's power lies precisely in what it cannot fully say.`,
    questions: [
      { question: "How does Burke describe the sublime?", options: ['Pure beauty without fear', 'A mixture of awe and terror at overwhelming power', 'A comforting aesthetic experience', 'The appreciation of ordinary beauty'], correct: 1, explanation: "Burke describes the sublime as 'a mixture of awe and terror in the face of overwhelming magnitude or power.'" },
      { question: "According to Freud, what makes something 'uncanny'?", options: ['It is completely new and unfamiliar', 'It is overly complex and abstract', 'Something once familiar becomes disturbing after repression', 'It is frighteningly large or powerful'], correct: 2, explanation: "The uncanny is 'something once familiar becoming disturbing upon repression — the strange within the familiar.'" },
      { question: "What does the text suggest about art's power?", options: ['It lies in clear, explicit messages', 'It lies in what it cannot fully express or say', 'It depends entirely on technical skill', 'It is only felt by trained critics'], correct: 1, explanation: "The text says: 'art's power lies precisely in what it cannot fully say.'" },
    ]
  },
  {
    id: 29, level: 'c2', difficulty: 'C2',
    title: 'Language and Thought',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600',
    arabic: 'تجادل فرضية سابير-وورف بأن اللغة التي نتحدثها تؤثر أو تحدد طريقة تفكيرنا. على سبيل المثال، يمتلك شعب بيراها في أمازونيا لغة بلا أعداد، وتكشف الدراسات أنهم يواجهون صعوبة في المهام التي تتطلب الحساب الدقيق. يدعو هذا إلى التساؤل: هل نفكر اللغة أم أن اللغة تفكرنا؟',
    content: `The Sapir-Whorf hypothesis proposes that the language we speak influences — or even determines — the way we think.
The Pirahã people of the Amazon have a language with no numbers, and studies suggest they experience difficulty with tasks requiring precise enumeration.
Russian speakers, who have distinct words for light and dark blue, consistently outperform English speakers in distinguishing shades of blue.
This raises a question that has preoccupied linguists and philosophers alike: do we think in language, or does language think through us?`,
    questions: [
      { question: "What does the Sapir-Whorf hypothesis propose?", options: ['All languages are equally complex', 'Language influences or determines thought', 'Thought exists independently of language', 'Language should be universal'], correct: 1, explanation: "The hypothesis proposes 'the language we speak influences — or even determines — the way we think.'" },
      { question: "What does the example of Russian speakers demonstrate?", options: ['Russian is a superior language', 'Language can affect perception and cognitive tasks', 'English speakers have worse eyesight', 'Colour vocabulary is unnecessary'], correct: 1, explanation: "Russian speakers outperform English speakers in distinguishing blue shades — showing language affects perception." },
      { question: "What does 'preoccupied' mean in 'has preoccupied linguists and philosophers'?", options: ['Bored', 'Completely occupied the minds of', 'Confused', 'Been ignored by'], correct: 1, explanation: "Preoccupied = استغرق تفكير / dominated the mental attention of." },
    ]
  },
  {
    id: 30, level: 'c2', difficulty: 'C2',
    title: 'The Architecture of Memory',
    image: 'https://images.unsplash.com/photo-1509909756405-be0199881695?w=600',
    arabic: 'استخدم الخطباء اليونانيون والرومانيون القدماء "قصر الذاكرة": تقنية تخيّل مبنى مألوف وإيداع المعلومات في مواقعه. هذه التقنية، التي تسمى "طريق اللوكي"، تستغل قدرة الدماغ الاستثنائية على الذاكرة المكانية. يستخدمها اليوم أبطال بطولات الذاكرة لحفظ آلاف الأرقام والوجوه والكلمات.',
    content: `Ancient Greek and Roman orators employed the 'memory palace' technique: imagining a familiar building and depositing information at specific locations within it.
This technique, known as the 'method of loci', exploits the brain's extraordinary capacity for spatial memory — a faculty that evolved long before written language.
Modern memory champions use it to memorise thousands of digits, faces, and words, suggesting that what we call 'poor memory' may often be poor technique rather than limited capacity.
The implication is radical: human memory may be far less limited than we assume, constrained chiefly by how we choose to engage with it.`,
    questions: [
      { question: "What is the 'method of loci'?", options: ['A Greek philosophical school', 'A memory technique using imagined spatial locations', 'A form of ancient architecture', 'A Latin poetry style'], correct: 1, explanation: "The method of loci involves 'imagining a familiar building and depositing information at specific locations within it.'" },
      { question: "What does the text suggest about 'poor memory'?", options: ['It is genetic and cannot be changed', 'It may result from poor technique rather than limited capacity', 'It is caused by modern technology', 'It only affects elderly people'], correct: 1, explanation: "The text says 'poor memory may often be poor technique rather than limited capacity.'" },
      { question: "What is the radical implication the text ends with?", options: ['Humans should stop relying on written notes', 'Human memory may be far less limited than assumed', 'The ancient Greeks had superior intelligence', 'Spatial memory is the only true form of memory'], correct: 1, explanation: "The text concludes: 'human memory may be far less limited than we assume.'" },
    ]
  },

];
