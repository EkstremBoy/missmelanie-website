/* ============================================
   MISS MÉLANIE — data.js
   Source unique pour les 15 services et tous les prix (CAD, en cents).
   Modifier ce fichier pour ajuster les tarifs — aucun autre fichier à toucher.

   NOTE: Prix suggérés à la hausse vs le wizard Notion original (trials trop
   bas à $5). À VALIDER par Pierre avec Melanie avant le launch.

   NOTE TRADUCTION: Le contenu détaillé (details.fr) est temporairement une
   COPIE DE L'ANGLAIS en attendant la version française de Melanie. Chercher
   "TODO-FR" pour retrouver rapidement tous les blocs à remplacer.
   ============================================ */

// Règle business : cours d'essai d'abord, puis forfait 10 cours seulement.
// Pas de vente à la pièce, pas de forfait 5 cours pour l'instant.

const SERVICES = [
  {
    id: 'english-5-9',
    nameFr: 'Anglais — 5 à 9 ans',
    nameEn: 'English — Ages 5–9',
    descriptionFr: 'Grammaire, vocabulaire et confiance à l\'oral, à travers des jeux et des histoires.',
    descriptionEn: 'Grammar, vocabulary, and speaking confidence — built through games and stories.',
    duration: 45,
    ageGroup: '5-9',
    mode: 'online',
    isClub: false,
    popular: true,
    // Un seul cours par âge — le niveau (débutant/intermédiaire/avancé) se
    // choisit avec le curseur sur la card et est confirmé pendant l'essai.
    hasLevels: true,
    levels: [
      {
        id: 'beginner', icon: '🌱', labelFr: 'Débutant', labelEn: 'Beginner',
        details: {
          en: {
            tagline: 'Build the Basics. Start Speaking. Have Fun!',
            intro: 'Perfect for children who are new to English or know only a small number of English words and phrases. This supportive beginner course introduces English naturally through familiar topics such as family, animals, food, colours, feelings, school, hobbies and everyday routines. Visuals, stories, games, repetition and guided conversation help children understand new language and feel comfortable using it.',
            listTitle: 'Students will work toward:',
            list: ['Understanding common classroom instructions and everyday expressions', 'Building useful everyday vocabulary', 'Introducing themselves and answering simple questions', 'Speaking in short sentences rather than relying on single-word answers', 'Recognizing and using basic sentence patterns', 'Developing early listening comprehension', 'Strengthening pronunciation and speaking clarity', 'Reading and understanding simple words, sentences and short texts', 'Building confidence communicating in English'],
            goal: 'Give children the foundation—and confidence—they need to begin communicating independently in English.',
          },
          fr: { // TODO-FR
            tagline: 'Build the Basics. Start Speaking. Have Fun!',
            intro: 'Perfect for children who are new to English or know only a small number of English words and phrases. This supportive beginner course introduces English naturally through familiar topics such as family, animals, food, colours, feelings, school, hobbies and everyday routines. Visuals, stories, games, repetition and guided conversation help children understand new language and feel comfortable using it.',
            listTitle: 'Students will work toward:',
            list: ['Understanding common classroom instructions and everyday expressions', 'Building useful everyday vocabulary', 'Introducing themselves and answering simple questions', 'Speaking in short sentences rather than relying on single-word answers', 'Recognizing and using basic sentence patterns', 'Developing early listening comprehension', 'Strengthening pronunciation and speaking clarity', 'Reading and understanding simple words, sentences and short texts', 'Building confidence communicating in English'],
            goal: 'Give children the foundation—and confidence—they need to begin communicating independently in English.',
          },
        },
      },
      {
        id: 'intermediate', icon: '🌿', labelFr: 'Intermédiaire', labelEn: 'Intermediate',
        details: {
          en: {
            tagline: 'From Simple Sentences to Real Conversations',
            intro: 'Designed for children who already understand basic English and can communicate using simple sentences but are ready to become more independent speakers. Students expand their vocabulary while learning to describe, explain, ask questions, tell short stories and participate in longer conversations. Reading and listening activities encourage children to understand meaning, make connections and express their own ideas.',
            listTitle: 'Students will work toward:',
            list: ['Speaking in longer, more detailed sentences', 'Asking and answering a wider variety of questions', 'Expanding everyday and descriptive vocabulary', 'Using grammar more accurately in natural conversation', 'Improving pronunciation and speaking fluency', 'Reading short stories and passages with greater understanding', 'Identifying important details and answering comprehension questions', 'Retelling events and stories in their own words', 'Expressing opinions, preferences and ideas', 'Becoming more comfortable speaking spontaneously'],
            goal: 'Move children beyond knowing English and toward comfortably using English to communicate.',
          },
          fr: { // TODO-FR
            tagline: 'From Simple Sentences to Real Conversations',
            intro: 'Designed for children who already understand basic English and can communicate using simple sentences but are ready to become more independent speakers. Students expand their vocabulary while learning to describe, explain, ask questions, tell short stories and participate in longer conversations. Reading and listening activities encourage children to understand meaning, make connections and express their own ideas.',
            listTitle: 'Students will work toward:',
            list: ['Speaking in longer, more detailed sentences', 'Asking and answering a wider variety of questions', 'Expanding everyday and descriptive vocabulary', 'Using grammar more accurately in natural conversation', 'Improving pronunciation and speaking fluency', 'Reading short stories and passages with greater understanding', 'Identifying important details and answering comprehension questions', 'Retelling events and stories in their own words', 'Expressing opinions, preferences and ideas', 'Becoming more comfortable speaking spontaneously'],
            goal: 'Move children beyond knowing English and toward comfortably using English to communicate.',
          },
        },
      },
      {
        id: 'advanced', icon: '🌳', labelFr: 'Avancé', labelEn: 'Advanced',
        details: {
          en: {
            tagline: 'Think, Create & Communicate in English',
            intro: 'For confident young English speakers who are ready to strengthen fluency, vocabulary, comprehension and more complex communication skills. Students explore interesting age-appropriate topics through stories, discussions, creative challenges, reading and problem-solving activities. The focus shifts from simply producing correct English to using language thoughtfully and expressively.',
            listTitle: 'Students will work toward:',
            list: ['Speaking naturally and confidently in extended conversations', 'Using richer and more precise vocabulary', 'Explaining ideas and opinions with supporting details', 'Improving grammar and sentence complexity', 'Reading increasingly challenging texts', 'Making predictions, connections and simple inferences while reading', 'Summarizing information in their own words', 'Developing stronger storytelling and descriptive language', 'Responding to open-ended questions', 'Improving overall fluency, accuracy and confidence'],
            goal: 'Help strong young learners become thoughtful, expressive English communicators who can confidently share their ideas.',
          },
          fr: { // TODO-FR
            tagline: 'Think, Create & Communicate in English',
            intro: 'For confident young English speakers who are ready to strengthen fluency, vocabulary, comprehension and more complex communication skills. Students explore interesting age-appropriate topics through stories, discussions, creative challenges, reading and problem-solving activities. The focus shifts from simply producing correct English to using language thoughtfully and expressively.',
            listTitle: 'Students will work toward:',
            list: ['Speaking naturally and confidently in extended conversations', 'Using richer and more precise vocabulary', 'Explaining ideas and opinions with supporting details', 'Improving grammar and sentence complexity', 'Reading increasingly challenging texts', 'Making predictions, connections and simple inferences while reading', 'Summarizing information in their own words', 'Developing stronger storytelling and descriptive language', 'Responding to open-ended questions', 'Improving overall fluency, accuracy and confidence'],
            goal: 'Help strong young learners become thoughtful, expressive English communicators who can confidently share their ideas.',
          },
        },
      },
    ],
    trialPrice: 2000,
    package10Price: 45000,
    stripePriceId: { trial: 'price_xxxx', package10: 'price_xxxx' },
  },
  {
    id: 'english-10-16',
    nameFr: 'Anglais — 10 à 16 ans',
    nameEn: 'English — Ages 10–16',
    descriptionFr: 'Conversation, grammaire et compréhension pour progresser avec assurance.',
    descriptionEn: 'Conversation, grammar, and comprehension to build real confidence.',
    familyIntroFr: 'For older learners, English becomes more than vocabulary and grammar. Students need to be able to communicate ideas, understand increasingly complex information and express themselves confidently in academic and real-world situations. Lessons use age-appropriate topics, discussions, reading, scenarios and practical communication activities so students can develop English they can genuinely use at school, online, while travelling and in everyday life.', // TODO-FR
    familyIntroEn: 'For older learners, English becomes more than vocabulary and grammar. Students need to be able to communicate ideas, understand increasingly complex information and express themselves confidently in academic and real-world situations. Lessons use age-appropriate topics, discussions, reading, scenarios and practical communication activities so students can develop English they can genuinely use at school, online, while travelling and in everyday life.',
    duration: 60,
    ageGroup: '10-16',
    mode: 'online',
    isClub: false,
    popular: true,
    hasLevels: true,
    levels: [
      {
        id: 'beginner', icon: '🌱', labelFr: 'Débutant', labelEn: 'Beginner',
        details: {
          en: {
            tagline: 'Build a Strong Foundation for Real-Life English',
            intro: 'Designed for preteens and teens who are beginning their English journey or have limited confidence communicating independently. Rather than using activities designed for small children, lessons introduce practical English through age-appropriate topics and real-life situations. Students gradually develop the vocabulary and sentence structures needed to understand others and begin expressing themselves independently.',
            listTitle: 'Students will work toward:',
            list: ['Introducing themselves and discussing familiar topics', 'Understanding common questions, directions and everyday expressions', 'Building practical vocabulary for everyday situations', 'Creating complete basic sentences', 'Asking and answering questions independently', 'Understanding short conversations and spoken instructions', 'Reading and understanding short age-appropriate texts', 'Developing foundational grammar in context', 'Improving pronunciation and listening skills', 'Becoming more comfortable speaking without fear of making mistakes'],
            goal: 'Build a practical English foundation that gives students the confidence to participate rather than simply observe.',
          },
          fr: { // TODO-FR
            tagline: 'Build a Strong Foundation for Real-Life English',
            intro: 'Designed for preteens and teens who are beginning their English journey or have limited confidence communicating independently. Rather than using activities designed for small children, lessons introduce practical English through age-appropriate topics and real-life situations. Students gradually develop the vocabulary and sentence structures needed to understand others and begin expressing themselves independently.',
            listTitle: 'Students will work toward:',
            list: ['Introducing themselves and discussing familiar topics', 'Understanding common questions, directions and everyday expressions', 'Building practical vocabulary for everyday situations', 'Creating complete basic sentences', 'Asking and answering questions independently', 'Understanding short conversations and spoken instructions', 'Reading and understanding short age-appropriate texts', 'Developing foundational grammar in context', 'Improving pronunciation and listening skills', 'Becoming more comfortable speaking without fear of making mistakes'],
            goal: 'Build a practical English foundation that gives students the confidence to participate rather than simply observe.',
          },
        },
      },
      {
        id: 'intermediate', icon: '🌿', labelFr: 'Intermédiaire', labelEn: 'Intermediate',
        details: {
          en: {
            tagline: 'Build Fluency. Expand Your Ideas. Speak With Confidence.',
            intro: 'For students who can already communicate in English but want to become more fluent, accurate and comfortable expressing themselves. Students move beyond basic exchanges into meaningful conversation, reading comprehension and more detailed communication. Lessons encourage learners to explain their thinking, discuss interesting topics, tell stories, solve problems and communicate in increasingly natural English.',
            listTitle: 'Students will work toward:',
            list: ['Participating comfortably in sustained conversations', 'Speaking with greater fluency and fewer pauses', 'Expanding academic and everyday vocabulary', 'Using increasingly complex sentence structures', 'Applying grammar more accurately while speaking', 'Understanding longer spoken conversations and explanations', 'Reading and discussing age-appropriate texts', 'Identifying main ideas, supporting details and implied meaning', 'Explaining opinions and supporting them with reasons', 'Summarizing and paraphrasing information', 'Communicating more confidently in school and everyday situations'],
            goal: 'Bridge the gap between being able to speak English and being able to communicate comfortably and effectively in English.',
          },
          fr: { // TODO-FR
            tagline: 'Build Fluency. Expand Your Ideas. Speak With Confidence.',
            intro: 'For students who can already communicate in English but want to become more fluent, accurate and comfortable expressing themselves. Students move beyond basic exchanges into meaningful conversation, reading comprehension and more detailed communication. Lessons encourage learners to explain their thinking, discuss interesting topics, tell stories, solve problems and communicate in increasingly natural English.',
            listTitle: 'Students will work toward:',
            list: ['Participating comfortably in sustained conversations', 'Speaking with greater fluency and fewer pauses', 'Expanding academic and everyday vocabulary', 'Using increasingly complex sentence structures', 'Applying grammar more accurately while speaking', 'Understanding longer spoken conversations and explanations', 'Reading and discussing age-appropriate texts', 'Identifying main ideas, supporting details and implied meaning', 'Explaining opinions and supporting them with reasons', 'Summarizing and paraphrasing information', 'Communicating more confidently in school and everyday situations'],
            goal: 'Bridge the gap between being able to speak English and being able to communicate comfortably and effectively in English.',
          },
        },
      },
      {
        id: 'advanced', icon: '🌳', labelFr: 'Avancé', labelEn: 'Advanced',
        details: {
          en: {
            tagline: 'Communicate Clearly. Think Critically. Express Yourself.',
            intro: 'Designed for proficient English learners who want to refine their language and communicate with greater sophistication, precision and confidence. Students explore more challenging topics through discussion, reading, analysis and real-world communication. Lessons focus on developing nuanced vocabulary, stronger comprehension and the ability to organize and defend ideas clearly.',
            listTitle: 'Students will work toward:',
            list: ['Speaking confidently and spontaneously about complex topics', 'Expressing and defending opinions with evidence and reasoning', 'Developing sophisticated and precise vocabulary', 'Improving grammatical accuracy and sentence variety', 'Understanding nuance, tone, context and implied meaning', 'Reading and analyzing increasingly complex texts', 'Comparing perspectives and evaluating information', 'Summarizing and paraphrasing complex ideas', 'Organizing ideas clearly for discussions and presentations', 'Adapting language for informal, academic and real-world situations', 'Developing stronger critical-thinking skills through English'],
            goal: 'Help proficient learners move beyond fluency toward clear, thoughtful and sophisticated communication.',
          },
          fr: { // TODO-FR
            tagline: 'Communicate Clearly. Think Critically. Express Yourself.',
            intro: 'Designed for proficient English learners who want to refine their language and communicate with greater sophistication, precision and confidence. Students explore more challenging topics through discussion, reading, analysis and real-world communication. Lessons focus on developing nuanced vocabulary, stronger comprehension and the ability to organize and defend ideas clearly.',
            listTitle: 'Students will work toward:',
            list: ['Speaking confidently and spontaneously about complex topics', 'Expressing and defending opinions with evidence and reasoning', 'Developing sophisticated and precise vocabulary', 'Improving grammatical accuracy and sentence variety', 'Understanding nuance, tone, context and implied meaning', 'Reading and analyzing increasingly complex texts', 'Comparing perspectives and evaluating information', 'Summarizing and paraphrasing complex ideas', 'Organizing ideas clearly for discussions and presentations', 'Adapting language for informal, academic and real-world situations', 'Developing stronger critical-thinking skills through English'],
            goal: 'Help proficient learners move beyond fluency toward clear, thoughtful and sophisticated communication.',
          },
        },
      },
    ],
    trialPrice: 2500,
    package10Price: 55000,
    stripePriceId: { trial: 'price_xxxx', package10: 'price_xxxx' },
  },
  {
    id: 'exam-prep-10-16',
    nameFr: 'Préparation aux examens — 10 à 16 ans',
    nameEn: 'Exam Prep — Ages 10–16',
    descriptionFr: 'Stratégies et pratique ciblée pour aborder les examens sereinement.',
    descriptionEn: 'Targeted strategies and practice to walk into exams with confidence.',
    duration: 60,
    ageGroup: '10-16',
    mode: 'online',
    isClub: false,
    popular: false,
    details: {
      en: {
        tagline: 'Prepare Smarter. Feel Confident. Walk In Ready.',
        intro: 'Big test coming up? Final exam around the corner? Sometimes students don\'t need an entire tutoring program—they need focused support for the assessment that\'s right in front of them. This personalized exam-prep course is built around your child\'s subject, upcoming test or exam, and individual learning needs. Whether it\'s Math, English, Science, French, History, Geography or another academic subject, we\'ll focus our time where it can make the biggest difference. Students can bring their class notes, study guides, assignments, previous tests, teacher-provided materials or topics they know will be covered. Together, we\'ll identify what they already understand, find the areas that need more attention and create a focused plan to get them ready.',
        listTitle: 'What We Can Work On:',
        list: ['Reviewing key concepts and course material', 'Identifying and filling knowledge gaps', 'Breaking down difficult concepts step by step', 'Practising questions similar to those they may encounter on their exam', 'Reviewing previous mistakes and understanding why they happened', 'Creating useful study notes, summaries or review tools', 'Learning how to recognize what a question is really asking', 'Developing stronger problem-solving strategies', 'Practising written responses and explaining answers clearly', 'Improving time management during tests', 'Learning effective study and memory strategies', 'Building confidence before exam day'],
        extra: 'More Than Memorizing for a Test — Exam preparation shouldn\'t mean cramming information the night before. Students will learn how to organize what they need to know, prioritize difficult material and study more effectively. We\'ll also work on strategies they can carry into future tests and exams so they gradually become more independent learners. You bring the subject and the goal. We\'ll build the preparation around it.',
        goal: 'Students leave feeling more prepared, organized and confident—not because they\'ve simply memorized answers, but because they understand the material and have a plan for tackling the exam.',
      },
      fr: { // TODO-FR
        tagline: 'Prepare Smarter. Feel Confident. Walk In Ready.',
        intro: 'Big test coming up? Final exam around the corner? Sometimes students don\'t need an entire tutoring program—they need focused support for the assessment that\'s right in front of them. This personalized exam-prep course is built around your child\'s subject, upcoming test or exam, and individual learning needs. Whether it\'s Math, English, Science, French, History, Geography or another academic subject, we\'ll focus our time where it can make the biggest difference. Students can bring their class notes, study guides, assignments, previous tests, teacher-provided materials or topics they know will be covered. Together, we\'ll identify what they already understand, find the areas that need more attention and create a focused plan to get them ready.',
        listTitle: 'What We Can Work On:',
        list: ['Reviewing key concepts and course material', 'Identifying and filling knowledge gaps', 'Breaking down difficult concepts step by step', 'Practising questions similar to those they may encounter on their exam', 'Reviewing previous mistakes and understanding why they happened', 'Creating useful study notes, summaries or review tools', 'Learning how to recognize what a question is really asking', 'Developing stronger problem-solving strategies', 'Practising written responses and explaining answers clearly', 'Improving time management during tests', 'Learning effective study and memory strategies', 'Building confidence before exam day'],
        extra: 'More Than Memorizing for a Test — Exam preparation shouldn\'t mean cramming information the night before. Students will learn how to organize what they need to know, prioritize difficult material and study more effectively. We\'ll also work on strategies they can carry into future tests and exams so they gradually become more independent learners. You bring the subject and the goal. We\'ll build the preparation around it.',
        goal: 'Students leave feeling more prepared, organized and confident—not because they\'ve simply memorized answers, but because they understand the material and have a plan for tackling the exam.',
      },
    },
    trialPrice: 2500,
    package10Price: 60000,
    stripePriceId: { trial: 'price_xxxx', package10: 'price_xxxx' },
  },
  {
    id: 'conversation-confidence-5-9',
    nameFr: 'Conversation et confiance — 5 à 9 ans',
    nameEn: 'Conversation & Confidence — Ages 5–9',
    descriptionFr: 'Un espace décontracté pour oser parler anglais, sans peur de l\'erreur.',
    descriptionEn: 'A relaxed space to practice speaking English without fear of mistakes.',
    duration: 45,
    ageGroup: '5-9',
    mode: 'online',
    isClub: false,
    popular: true,
    details: {
      en: {
        tagline: 'Talk. Play. Share. Connect.',
        intro: 'Knowing what you want to say and actually feeling comfortable saying it are two very different things! Conversation & Confidence classes give children a relaxed, encouraging space to practise real conversation — through games, stories, silly questions, show-and-tell, imaginative scenarios, picture prompts and child-friendly discussion topics. Students are encouraged to talk, listen and participate without worrying about having the "perfect" answer. Topics might range from Would you rather have a pet dragon or a pet dinosaur? to favourite foods, hobbies, animals, adventures, family, feelings and everyday experiences.',
        listTitle: 'Students will practise:',
        list: ['Starting and joining conversations', 'Speaking in complete thoughts and expanding beyond one-word answers', 'Asking questions and showing interest in others', 'Taking turns speaking and listening', 'Staying on topic and contributing to discussions', 'Retelling stories and personal experiences', 'Expressing preferences, feelings and opinions', 'Speaking in front of others in a comfortable setting', 'Listening and responding appropriately', 'Becoming more comfortable thinking and speaking spontaneously'],
        goal: 'Help young learners find their voice and become happy, confident participants in conversation.',
      },
      fr: { // TODO-FR
        tagline: 'Talk. Play. Share. Connect.',
        intro: 'Knowing what you want to say and actually feeling comfortable saying it are two very different things! Conversation & Confidence classes give children a relaxed, encouraging space to practise real conversation — through games, stories, silly questions, show-and-tell, imaginative scenarios, picture prompts and child-friendly discussion topics. Students are encouraged to talk, listen and participate without worrying about having the "perfect" answer. Topics might range from Would you rather have a pet dragon or a pet dinosaur? to favourite foods, hobbies, animals, adventures, family, feelings and everyday experiences.',
        listTitle: 'Students will practise:',
        list: ['Starting and joining conversations', 'Speaking in complete thoughts and expanding beyond one-word answers', 'Asking questions and showing interest in others', 'Taking turns speaking and listening', 'Staying on topic and contributing to discussions', 'Retelling stories and personal experiences', 'Expressing preferences, feelings and opinions', 'Speaking in front of others in a comfortable setting', 'Listening and responding appropriately', 'Becoming more comfortable thinking and speaking spontaneously'],
        goal: 'Help young learners find their voice and become happy, confident participants in conversation.',
      },
    },
    trialPrice: 2000,
    package10Price: 45000,
    stripePriceId: { trial: 'price_xxxx', package10: 'price_xxxx' },
  },
  {
    id: 'conversation-confidence-10-16',
    nameFr: 'Conversation et confiance — 10 à 16 ans',
    nameEn: 'Conversation & Confidence — Ages 10–16',
    descriptionFr: 'Un espace décontracté pour s\'exprimer en anglais, sans pression de note.',
    descriptionEn: 'A relaxed space to practice real-world English conversation without the pressure of grades.',
    duration: 45,
    ageGroup: '10-16',
    mode: 'online',
    isClub: false,
    popular: false,
    details: {
      en: {
        tagline: 'Speak Up. Express Yourself. Connect With Others.',
        intro: 'This relaxed, discussion-based class gives preteens and teens a place to practise real-world conversation without the pressure of being graded. Students explore age-appropriate topics, current interests, hypothetical situations, everyday scenarios and friendly debates while learning how to express themselves clearly and comfortably. There isn\'t always a "right answer." The focus is learning how to have something to say—and feel confident saying it.',
        listTitle: 'Students will practise:',
        list: ['Starting, maintaining and ending conversations naturally', 'Asking thoughtful questions and follow-up questions', 'Giving more detailed responses', 'Expressing opinions clearly', 'Explaining why they think or feel something', 'Listening actively and responding to other people\'s ideas', 'Handling differences of opinion respectfully', 'Thinking and responding spontaneously', 'Speaking with greater clarity and confidence', 'Participating in group discussions', 'Developing presentation and public-speaking confidence', 'Becoming more comfortable speaking with new people'],
        goal: 'Help preteens and teens become confident, thoughtful communicators who are comfortable expressing themselves and connecting with others.',
      },
      fr: { // TODO-FR
        tagline: 'Speak Up. Express Yourself. Connect With Others.',
        intro: 'This relaxed, discussion-based class gives preteens and teens a place to practise real-world conversation without the pressure of being graded. Students explore age-appropriate topics, current interests, hypothetical situations, everyday scenarios and friendly debates while learning how to express themselves clearly and comfortably. There isn\'t always a "right answer." The focus is learning how to have something to say—and feel confident saying it.',
        listTitle: 'Students will practise:',
        list: ['Starting, maintaining and ending conversations naturally', 'Asking thoughtful questions and follow-up questions', 'Giving more detailed responses', 'Expressing opinions clearly', 'Explaining why they think or feel something', 'Listening actively and responding to other people\'s ideas', 'Handling differences of opinion respectfully', 'Thinking and responding spontaneously', 'Speaking with greater clarity and confidence', 'Participating in group discussions', 'Developing presentation and public-speaking confidence', 'Becoming more comfortable speaking with new people'],
        goal: 'Help preteens and teens become confident, thoughtful communicators who are comfortable expressing themselves and connecting with others.',
      },
    },
    trialPrice: 2000,
    package10Price: 45000,
    stripePriceId: { trial: 'price_xxxx', package10: 'price_xxxx' },
  },
  {
    id: 'stem-club-5-9',
    nameFr: 'Club STIM — 5 à 9 ans',
    nameEn: 'STEM Club — Ages 5–9',
    descriptionFr: 'Sciences, techno et maths explorées en anglais, par le jeu et la curiosité.',
    descriptionEn: 'Science, tech, and math explored in English through play and curiosity.',
    duration: 45,
    ageGroup: '5-9',
    mode: 'online',
    isClub: true,
    popular: false,
    details: {
      en: {
        tagline: 'Little Scientists. BIG Ideas.',
        intro: 'Young children are natural scientists. They\'re constantly asking Why? How? What happens if…? STEM Club turns that curiosity into learning. Each class introduces an exciting question, challenge or concept through age-appropriate experiments, demonstrations, building activities and interactive investigations.',
        listTitle: 'What We\'ll Explore:',
        list: ['Chemistry and fun reactions', 'Space and our solar system', 'Plants, animals and ecosystems', 'Weather and our planet', 'Magnets, forces and motion', 'Light, sound and electricity', 'Engineering and building challenges', 'Simple machines and how things work', 'Math puzzles and patterns', 'Technology and beginner coding concepts', 'The human body and brain', 'Earth science and geology'],
        extra: 'Skills We\'ll Build — Children will practise asking questions, making predictions, observing, measuring, identifying patterns, testing ideas, solving problems and explaining their discoveries.',
        goal: 'Spark a love of STEM while helping young learners see themselves as scientists, inventors, engineers and problem-solvers.',
      },
      fr: { // TODO-FR
        tagline: 'Little Scientists. BIG Ideas.',
        intro: 'Young children are natural scientists. They\'re constantly asking Why? How? What happens if…? STEM Club turns that curiosity into learning. Each class introduces an exciting question, challenge or concept through age-appropriate experiments, demonstrations, building activities and interactive investigations.',
        listTitle: 'What We\'ll Explore:',
        list: ['Chemistry and fun reactions', 'Space and our solar system', 'Plants, animals and ecosystems', 'Weather and our planet', 'Magnets, forces and motion', 'Light, sound and electricity', 'Engineering and building challenges', 'Simple machines and how things work', 'Math puzzles and patterns', 'Technology and beginner coding concepts', 'The human body and brain', 'Earth science and geology'],
        extra: 'Skills We\'ll Build — Children will practise asking questions, making predictions, observing, measuring, identifying patterns, testing ideas, solving problems and explaining their discoveries.',
        goal: 'Spark a love of STEM while helping young learners see themselves as scientists, inventors, engineers and problem-solvers.',
      },
    },
    trialPrice: 2000,
    package10Price: 40000,
    stripePriceId: { trial: 'price_xxxx', package10: 'price_xxxx' },
  },
  {
    id: 'stem-club-10-16',
    nameFr: 'Club STIM — 10 à 16 ans',
    nameEn: 'STEM Club — Ages 10–16',
    descriptionFr: 'Projets pratiques en sciences et technologie, entièrement en anglais.',
    descriptionEn: 'Hands-on science and tech projects, entirely in English.',
    duration: 60,
    ageGroup: '10-16',
    mode: 'online',
    isClub: true,
    popular: false,
    details: {
      en: {
        tagline: 'Question It. Test It. Solve It.',
        intro: 'Why does a roller coaster stay on its track? Could you design a structure that survives an earthquake? How does DNA carry information? Could humans actually live on Mars? Students explore fascinating scientific and technological ideas through experiments, engineering challenges, investigations, problem-solving and discussion.',
        listTitle: 'What We\'ll Explore:',
        list: ['Biology, genetics and the human body', 'Chemistry and chemical reactions', 'Physics, forces, energy and motion', 'Earth and environmental science', 'Astronomy and space exploration', 'Technology, robotics and AI', 'Coding and computational thinking', 'Engineering and design challenges', 'Codes, puzzles and logical thinking', 'Sustainability and environmental solutions', 'Forensics and scientific investigation', 'Neuroscience and the brain', 'Real-world mathematics', 'Inventions and emerging technologies'],
        extra: 'Students will learn to develop hypotheses, investigate questions, interpret information, use evidence, troubleshoot ideas and think both logically and creatively.',
        goal: 'Develop curious, independent thinkers who aren\'t afraid to ask big questions, tackle challenging problems and discover how STEM connects to the world around them.',
      },
      fr: { // TODO-FR
        tagline: 'Question It. Test It. Solve It.',
        intro: 'Why does a roller coaster stay on its track? Could you design a structure that survives an earthquake? How does DNA carry information? Could humans actually live on Mars? Students explore fascinating scientific and technological ideas through experiments, engineering challenges, investigations, problem-solving and discussion.',
        listTitle: 'What We\'ll Explore:',
        list: ['Biology, genetics and the human body', 'Chemistry and chemical reactions', 'Physics, forces, energy and motion', 'Earth and environmental science', 'Astronomy and space exploration', 'Technology, robotics and AI', 'Coding and computational thinking', 'Engineering and design challenges', 'Codes, puzzles and logical thinking', 'Sustainability and environmental solutions', 'Forensics and scientific investigation', 'Neuroscience and the brain', 'Real-world mathematics', 'Inventions and emerging technologies'],
        extra: 'Students will learn to develop hypotheses, investigate questions, interpret information, use evidence, troubleshoot ideas and think both logically and creatively.',
        goal: 'Develop curious, independent thinkers who aren\'t afraid to ask big questions, tackle challenging problems and discover how STEM connects to the world around them.',
      },
    },
    trialPrice: 2500,
    package10Price: 50000,
    stripePriceId: { trial: 'price_xxxx', package10: 'price_xxxx' },
  },
  {
    id: 'book-club-5-9',
    nameFr: 'Club de lecture — 5 à 9 ans',
    nameEn: 'Book Club — Ages 5–9',
    descriptionFr: 'Des histoires captivantes pour développer le goût de la lecture en anglais.',
    descriptionEn: 'Engaging stories that build a love of reading in English.',
    duration: 45,
    ageGroup: '5-9',
    mode: 'online',
    isClub: true,
    popular: false,
    details: {
      en: {
        tagline: 'Read. Imagine. Create.',
        intro: 'Books are even better when you have someone to talk about them with! Together we\'ll explore engaging, age-appropriate books and stories filled with memorable characters, humour, imagination and plenty to talk about. Rather than simply answering comprehension questions, children are encouraged to wonder, predict, imagine and share their own ideas. Students may discuss characters, make predictions, retell important events, explore feelings and motivations, discover vocabulary, imagine alternate endings, play book-themed games and complete creative activities inspired by the story. Along the way, they\'ll strengthen reading comprehension, vocabulary, listening, prediction, inference, communication and confidence.',
        goal: 'Help children discover that reading isn\'t just something we do—it\'s something we can experience, imagine and share together.',
      },
      fr: { // TODO-FR
        tagline: 'Read. Imagine. Create.',
        intro: 'Books are even better when you have someone to talk about them with! Together we\'ll explore engaging, age-appropriate books and stories filled with memorable characters, humour, imagination and plenty to talk about. Rather than simply answering comprehension questions, children are encouraged to wonder, predict, imagine and share their own ideas. Students may discuss characters, make predictions, retell important events, explore feelings and motivations, discover vocabulary, imagine alternate endings, play book-themed games and complete creative activities inspired by the story. Along the way, they\'ll strengthen reading comprehension, vocabulary, listening, prediction, inference, communication and confidence.',
        goal: 'Help children discover that reading isn\'t just something we do—it\'s something we can experience, imagine and share together.',
      },
    },
    trialPrice: 2000,
    package10Price: 40000,
    stripePriceId: { trial: 'price_xxxx', package10: 'price_xxxx' },
  },
  {
    id: 'book-club-10-16',
    nameFr: 'Club de lecture — 10 à 16 ans',
    nameEn: 'Book Club — Ages 10–16',
    descriptionFr: 'Discussions de groupe autour de romans jeunesse, en anglais.',
    descriptionEn: 'Group discussions around young-adult novels, in English.',
    duration: 60,
    ageGroup: '10-16',
    mode: 'online',
    isClub: true,
    popular: false,
    details: {
      en: {
        tagline: 'Read Between the Lines. Question Everything. Join the Discussion.',
        intro: 'A great book doesn\'t end on the last page. It leaves you thinking. Students go beyond simply discussing what happened to explore character choices, hidden meanings, themes, relationships, conflicts and the bigger questions a story leaves behind.',
        listTitle: 'Discussions may explore:',
        list: ['Character development and motivation', 'Themes and conflicts', 'Predictions and theories', 'Plot twists and foreshadowing', 'Symbolism and hidden meaning', 'Author choices and writing style', 'Moral dilemmas', 'Different perspectives', 'Connections to real-world issues', 'Alternate endings and "what if?" scenarios'],
        extra: 'Books may include Mystery, Adventure, Fantasy, Science Fiction, Historical Fiction, Contemporary Fiction, Classics, Dystopian Fiction and Graphic Novels.',
        goal: 'Build thoughtful, curious readers who don\'t just finish books—they question them, connect with them and want to talk about them.',
      },
      fr: { // TODO-FR
        tagline: 'Read Between the Lines. Question Everything. Join the Discussion.',
        intro: 'A great book doesn\'t end on the last page. It leaves you thinking. Students go beyond simply discussing what happened to explore character choices, hidden meanings, themes, relationships, conflicts and the bigger questions a story leaves behind.',
        listTitle: 'Discussions may explore:',
        list: ['Character development and motivation', 'Themes and conflicts', 'Predictions and theories', 'Plot twists and foreshadowing', 'Symbolism and hidden meaning', 'Author choices and writing style', 'Moral dilemmas', 'Different perspectives', 'Connections to real-world issues', 'Alternate endings and "what if?" scenarios'],
        extra: 'Books may include Mystery, Adventure, Fantasy, Science Fiction, Historical Fiction, Contemporary Fiction, Classics, Dystopian Fiction and Graphic Novels.',
        goal: 'Build thoughtful, curious readers who don\'t just finish books—they question them, connect with them and want to talk about them.',
      },
    },
    trialPrice: 2500,
    package10Price: 50000,
    stripePriceId: { trial: 'price_xxxx', package10: 'price_xxxx' },
  },
  {
    id: 'creative-writing-10-16',
    nameFr: 'Écriture créative — 10 à 16 ans',
    nameEn: 'Creative Writing — Ages 10–16',
    descriptionFr: 'Ateliers d\'écriture pour développer sa voix et son style en anglais.',
    descriptionEn: 'Writing workshops to develop voice and style in English.',
    duration: 60,
    ageGroup: '10-16',
    mode: 'online',
    isClub: false,
    popular: false,
    details: {
      en: {
        tagline: 'Imagine It. Write It. Make It Yours.',
        intro: 'Every great story starts with an idea. A mysterious door that shouldn\'t be opened. A character with an impossible secret. A world where everyone has disappeared. A seemingly ordinary day that suddenly goes completely wrong… What happens next is up to you. Creative Writing is a fun, encouraging space for young writers to explore their imagination, develop storytelling skills and discover their own unique writing voice. Students don\'t need to already consider themselves "writers." Whether they fill notebooks with stories or stare at a blank page wondering where to begin, they\'ll learn strategies for turning ideas into stories they\'re excited to tell.',
        listTitle: 'Building Great Stories:',
        list: ['Character development', 'Setting and world-building', 'Plot', 'Engaging beginnings', 'Conflict and suspense', 'Natural dialogue', '"Show, don\'t tell"', 'Description and sensory details', 'Mood and atmosphere', 'Satisfying endings', 'Point of view', 'Individual writing style'],
        extra: 'Along the way, students naturally strengthen vocabulary, sentence variety, organization, grammar, punctuation, editing, revision and written communication.',
        goal: 'Help students turn imagination into words while developing stronger storytelling skills, greater writing confidence and a genuine enjoyment of creative expression.',
      },
      fr: { // TODO-FR
        tagline: 'Imagine It. Write It. Make It Yours.',
        intro: 'Every great story starts with an idea. A mysterious door that shouldn\'t be opened. A character with an impossible secret. A world where everyone has disappeared. A seemingly ordinary day that suddenly goes completely wrong… What happens next is up to you. Creative Writing is a fun, encouraging space for young writers to explore their imagination, develop storytelling skills and discover their own unique writing voice. Students don\'t need to already consider themselves "writers." Whether they fill notebooks with stories or stare at a blank page wondering where to begin, they\'ll learn strategies for turning ideas into stories they\'re excited to tell.',
        listTitle: 'Building Great Stories:',
        list: ['Character development', 'Setting and world-building', 'Plot', 'Engaging beginnings', 'Conflict and suspense', 'Natural dialogue', '"Show, don\'t tell"', 'Description and sensory details', 'Mood and atmosphere', 'Satisfying endings', 'Point of view', 'Individual writing style'],
        extra: 'Along the way, students naturally strengthen vocabulary, sentence variety, organization, grammar, punctuation, editing, revision and written communication.',
        goal: 'Help students turn imagination into words while developing stronger storytelling skills, greater writing confidence and a genuine enjoyment of creative expression.',
      },
    },
    trialPrice: 2500,
    package10Price: 50000,
    stripePriceId: { trial: 'price_xxxx', package10: 'price_xxxx' },
  },
  {
    id: 'storytime-art-5-9',
    nameFr: 'Club conte et art — 4 à 9 ans',
    nameEn: 'Storytime Art Club — Ages 4–9',
    descriptionFr: 'Contes et bricolage combinés pour apprendre l\'anglais en créant.',
    descriptionEn: 'Storytelling and crafts combined to learn English through creativity.',
    duration: 45,
    ageGroup: '5-9', // NOTE: filtre/tarification alignés sur le groupe existant 5-9 ; le texte marketing dit "Ages 4–9"
    mode: 'online',
    isClub: true,
    popular: false,
    details: {
      en: {
        tagline: 'A Story. A Little Imagination. A Whole Lot of Creativity!',
        intro: 'What happens when storytime and art time come together? Storytime Art Club! Each class begins with an engaging, age-appropriate story that takes us somewhere new—maybe into a magical forest, under the sea, into outer space or alongside a wonderfully silly character. Then it\'s time to create! Inspired by the story we\'ve shared, children complete a fun art or craft project that lets them imagine, experiment and put their own creative spin on what they\'ve discovered. One story might inspire us to build a colourful monster. Another could have us creating an enchanted forest, designing a rocket ship, making an animal puppet or inventing a brand-new character.',
        listTitle: 'Then, We Create!',
        list: ['Drawing and painting', 'Cutting, gluing and collage', 'Puppets and characters', 'Mixed-media creations', 'Simple 3D projects', 'Seasonal crafts', 'Story-inspired scenes', 'Creative building', 'Imaginative art challenges'],
        goal: 'Combine the magic of reading with the joy of creating, helping children strengthen early literacy skills, imagination and creative confidence—one story at a time.',
      },
      fr: { // TODO-FR
        tagline: 'A Story. A Little Imagination. A Whole Lot of Creativity!',
        intro: 'What happens when storytime and art time come together? Storytime Art Club! Each class begins with an engaging, age-appropriate story that takes us somewhere new—maybe into a magical forest, under the sea, into outer space or alongside a wonderfully silly character. Then it\'s time to create! Inspired by the story we\'ve shared, children complete a fun art or craft project that lets them imagine, experiment and put their own creative spin on what they\'ve discovered. One story might inspire us to build a colourful monster. Another could have us creating an enchanted forest, designing a rocket ship, making an animal puppet or inventing a brand-new character.',
        listTitle: 'Then, We Create!',
        list: ['Drawing and painting', 'Cutting, gluing and collage', 'Puppets and characters', 'Mixed-media creations', 'Simple 3D projects', 'Seasonal crafts', 'Story-inspired scenes', 'Creative building', 'Imaginative art challenges'],
        goal: 'Combine the magic of reading with the joy of creating, helping children strengthen early literacy skills, imagination and creative confidence—one story at a time.',
      },
    },
    trialPrice: 2000,
    package10Price: 40000,
    stripePriceId: { trial: 'price_xxxx', package10: 'price_xxxx' },
  },
  {
    id: 'homeschool-support-parents',
    nameFr: 'Soutien école-maison (parents)',
    nameEn: 'Homeschool Support (Parents)',
    descriptionFr: 'Accompagnement pour les parents qui enseignent l\'anglais à la maison.',
    descriptionEn: 'Guidance for parents teaching English at home.',
    duration: 60,
    ageGroup: 'parents',
    mode: 'online',
    isClub: false,
    popular: false,
    details: {
      en: {
        tagline: 'Not Sure Where to Start? Let\'s Figure It Out Together.',
        intro: 'Thinking about homeschooling but have absolutely no idea where to begin? Already homeschooling but feeling overwhelmed, stuck or wondering if you\'re doing enough? This one-on-one consultation gives parents a supportive place to ask questions, sort through the information and leave with a clearer idea of what to do next. No judgment. No one-size-fits-all homeschool plan. Just practical guidance tailored to your family, your child and where you are in your homeschool journey.',
        listTitle: 'We can discuss:',
        list: ['Where to start', 'Understanding current homeschooling requirements', 'Important steps, documents and timelines', 'Finding official government information', 'Understanding the learning project', 'Curriculum options', 'Choosing resources for different subjects', 'Planning your homeschool year', 'Creating a realistic weekly routine', 'Keeping records and documenting learning', 'Understanding evaluations and progress requirements', 'Finding educational activities and community resources', 'Balancing structure with flexibility', 'Creating an approach that works for your child'],
        extra: 'There is no one "right" way to homeschool — some families love detailed schedules, others thrive with flexibility. We\'ll focus the session on what you actually need help with: bring your questions, your curriculum, your learning project, or the schedule that isn\'t working.',
        goal: 'Give homeschool families practical, personalized support so parents can make informed decisions and move forward with greater clarity and confidence.',
        disclaimer: 'Homeschool Support & Consultation provides educational guidance and help navigating homeschooling resources and requirements. It does not provide legal advice. Families should consult official government sources for current legal requirements.',
      },
      fr: { // TODO-FR
        tagline: 'Not Sure Where to Start? Let\'s Figure It Out Together.',
        intro: 'Thinking about homeschooling but have absolutely no idea where to begin? Already homeschooling but feeling overwhelmed, stuck or wondering if you\'re doing enough? This one-on-one consultation gives parents a supportive place to ask questions, sort through the information and leave with a clearer idea of what to do next. No judgment. No one-size-fits-all homeschool plan. Just practical guidance tailored to your family, your child and where you are in your homeschool journey.',
        listTitle: 'We can discuss:',
        list: ['Where to start', 'Understanding current homeschooling requirements', 'Important steps, documents and timelines', 'Finding official government information', 'Understanding the learning project', 'Curriculum options', 'Choosing resources for different subjects', 'Planning your homeschool year', 'Creating a realistic weekly routine', 'Keeping records and documenting learning', 'Understanding evaluations and progress requirements', 'Finding educational activities and community resources', 'Balancing structure with flexibility', 'Creating an approach that works for your child'],
        extra: 'There is no one "right" way to homeschool — some families love detailed schedules, others thrive with flexibility. We\'ll focus the session on what you actually need help with: bring your questions, your curriculum, your learning project, or the schedule that isn\'t working.',
        goal: 'Give homeschool families practical, personalized support so parents can make informed decisions and move forward with greater clarity and confidence.',
        disclaimer: 'Homeschool Support & Consultation provides educational guidance and help navigating homeschooling resources and requirements. It does not provide legal advice. Families should consult official government sources for current legal requirements.',
      },
    },
    trialPrice: 3000,
    package10Price: 55000,
    stripePriceId: { trial: 'price_xxxx', package10: 'price_xxxx' },
  },
  {
    id: 'homeschool-social-5-9',
    nameFr: 'Club social école-maison — 5 à 9 ans',
    nameEn: 'Homeschool Social Club — Ages 5–9',
    descriptionFr: 'Un moment social hebdomadaire en anglais pour les enfants en école-maison.',
    descriptionEn: 'A weekly social English hour for homeschooled kids.',
    familyIntroFr: 'Homeschooling gives families incredible flexibility—but kids still need a place that\'s simply about friends, conversation and connection. Homeschool Social Club is a relaxed weekly meetup created especially for homeschoolers. There are no grades, assignments or lessons to complete. Instead, each week brings a new theme, conversation starters, games, activities and plenty of opportunities to chat.', // TODO-FR
    familyIntroEn: 'Homeschooling gives families incredible flexibility—but kids still need a place that\'s simply about friends, conversation and connection. Homeschool Social Club is a relaxed weekly meetup created especially for homeschoolers. There are no grades, assignments or lessons to complete. Instead, each week brings a new theme, conversation starters, games, activities and plenty of opportunities to chat.',
    duration: 45,
    ageGroup: '5-9',
    mode: 'online',
    isClub: true,
    popular: false,
    details: {
      en: {
        tagline: 'Make Friends. Share. Play. Be You!',
        intro: 'Every week we\'ll explore a different theme through conversation, games, silly questions, challenges, show-and-tell and interactive activities.',
        listTitle: 'Children might:',
        list: ['Play conversation and guessing games', 'Participate in Would You Rather? challenges', 'Bring something for show-and-tell', 'Share something exciting from their week', 'Talk about hobbies and interests', 'Complete group challenges', 'Tell jokes and stories', 'Ask other kids questions', 'Help choose future themes', 'Simply have time to chat and be silly together'],
        goal: 'Give young homeschoolers a consistent, welcoming social space where they can make friends, laugh, talk and feel part of a community.',
      },
      fr: { // TODO-FR
        tagline: 'Make Friends. Share. Play. Be You!',
        intro: 'Every week we\'ll explore a different theme through conversation, games, silly questions, challenges, show-and-tell and interactive activities.',
        listTitle: 'Children might:',
        list: ['Play conversation and guessing games', 'Participate in Would You Rather? challenges', 'Bring something for show-and-tell', 'Share something exciting from their week', 'Talk about hobbies and interests', 'Complete group challenges', 'Tell jokes and stories', 'Ask other kids questions', 'Help choose future themes', 'Simply have time to chat and be silly together'],
        goal: 'Give young homeschoolers a consistent, welcoming social space where they can make friends, laugh, talk and feel part of a community.',
      },
    },
    trialPrice: 2000,
    package10Price: 40000,
    stripePriceId: { trial: 'price_xxxx', package10: 'price_xxxx' },
  },
  {
    id: 'homeschool-social-10-16',
    nameFr: 'Club social école-maison — 10 à 16 ans',
    nameEn: 'Homeschool Social Club — Ages 10–16',
    descriptionFr: 'Un espace social en anglais pour ados en apprentissage à domicile.',
    descriptionEn: 'A social English space for homeschooled teens.',
    familyIntroFr: 'Homeschooling gives families incredible flexibility—but kids still need a place that\'s simply about friends, conversation and connection. Homeschool Social Club is a relaxed weekly meetup created especially for homeschoolers. There are no grades, assignments or lessons to complete.', // TODO-FR
    familyIntroEn: 'Homeschooling gives families incredible flexibility—but kids still need a place that\'s simply about friends, conversation and connection. Homeschool Social Club is a relaxed weekly meetup created especially for homeschoolers. There are no grades, assignments or lessons to complete.',
    duration: 60,
    ageGroup: '10-16',
    mode: 'online',
    isClub: true,
    popular: false,
    details: {
      en: {
        tagline: 'Your People. Your Space. Your Conversation.',
        intro: 'Homeschool Social Club gives preteens and teens a relaxed place to talk, connect, laugh, share experiences and build friendships with other homeschoolers. No worksheets. No grades. No awkward forced participation. Each meetup has a loose theme to get the conversation started—but where it goes from there is up to the group. Topics might include friendships, hobbies, gaming, technology, books, movies, music, goals, travel, mysteries, homeschool life, motivation, confidence, growing up, social situations, current trends, dreams and plenty of ridiculous hypothetical questions.',
        extra: 'As students become comfortable with one another, Social Club can also become a place to bring everyday situations to the group, ask for ideas, share experiences and support one another. Nobody is required to share something personal — students decide what they\'re comfortable contributing. We\'ll also mix things up with games, trivia, friendly debates, Would You Rather?, group challenges, mystery scenarios, rankings and collaborative storytelling.',
        goal: 'Give homeschoolers a welcoming community where they can connect with peers, build genuine friendships, share experiences and have a space that\'s truly theirs.',
      },
      fr: { // TODO-FR
        tagline: 'Your People. Your Space. Your Conversation.',
        intro: 'Homeschool Social Club gives preteens and teens a relaxed place to talk, connect, laugh, share experiences and build friendships with other homeschoolers. No worksheets. No grades. No awkward forced participation. Each meetup has a loose theme to get the conversation started—but where it goes from there is up to the group. Topics might include friendships, hobbies, gaming, technology, books, movies, music, goals, travel, mysteries, homeschool life, motivation, confidence, growing up, social situations, current trends, dreams and plenty of ridiculous hypothetical questions.',
        extra: 'As students become comfortable with one another, Social Club can also become a place to bring everyday situations to the group, ask for ideas, share experiences and support one another. Nobody is required to share something personal — students decide what they\'re comfortable contributing. We\'ll also mix things up with games, trivia, friendly debates, Would You Rather?, group challenges, mystery scenarios, rankings and collaborative storytelling.',
        goal: 'Give homeschoolers a welcoming community where they can connect with peers, build genuine friendships, share experiences and have a space that\'s truly theirs.',
      },
    },
    trialPrice: 2500,
    package10Price: 50000,
    stripePriceId: { trial: 'price_xxxx', package10: 'price_xxxx' },
  },
  {
    id: 'discovery-session',
    nameFr: 'Séance découverte',
    nameEn: 'Discovery Session',
    descriptionFr: 'Une courte rencontre pour discuter des besoins de votre enfant, sans pression.',
    descriptionEn: 'A short, no-pressure chat to talk through your child\'s needs.',
    duration: 20,
    ageGroup: '5-16',
    mode: 'online',
    isClub: false,
    popular: false,
    details: {
      en: { intro: 'A short call with Melanie to talk through your child\'s needs, answer your questions, and figure out the best starting point together.' },
      fr: { intro: 'Un court appel avec Melanie pour discuter des besoins de votre enfant, répondre à vos questions et déterminer ensemble le meilleur point de départ.' },
    },
    trialPrice: 1500,
    package10Price: null, // Pas de forfait — séance d'introduction seulement
    stripePriceId: { trial: 'price_xxxx', package10: null },
  },
];

/* ============================================
   ATELIERS EN GARDERIE / DAYCARE WORKSHOPS
   Offre distincte des cours ci-dessus : facturée à l'heure par groupe/centre,
   pas de cours d'essai ni de forfait 10 cours. Réservation par contact direct
   (pas de Stripe) — voir contact.html.
   TODO-FR : contenu FR = copie de l'anglais en attendant la traduction de Melanie.
   ============================================ */
const DAYCARE_WORKSHOPS = {
  intro: {
    en: 'Engaging enrichment programs brought directly to your daycare or childcare centre. Our in-person workshops are designed specifically for young children and combine learning, movement, music, creativity and play. Each session is interactive, developmentally appropriate and adapted to the age, abilities and needs of your group. Workshops can be booked as a special activity or as part of your centre\'s recurring enrichment programming.',
    fr: 'Engaging enrichment programs brought directly to your daycare or childcare centre. Our in-person workshops are designed specifically for young children and combine learning, movement, music, creativity and play. Each session is interactive, developmentally appropriate and adapted to the age, abilities and needs of your group. Workshops can be booked as a special activity or as part of your centre\'s recurring enrichment programming.',
  },
  items: [
    {
      id: 'english-through-play',
      icon: '🇬🇧',
      nameFr: 'Anglais par le jeu',
      nameEn: 'English Through Play',
      tagline: { en: 'Learn English Through Songs, Stories, Movement & Play', fr: 'Learn English Through Songs, Stories, Movement & Play' },
      description: {
        en: 'A playful introduction to English designed especially for young learners. Children build familiarity with everyday English vocabulary and expressions through songs, stories, games, movement, visuals and interactive activities. Rather than formal language lessons, English is introduced naturally through experiences children understand and enjoy. Perfect for centres looking to add fun, age-appropriate English enrichment to their programming.',
        fr: 'A playful introduction to English designed especially for young learners. Children build familiarity with everyday English vocabulary and expressions through songs, stories, games, movement, visuals and interactive activities. Rather than formal language lessons, English is introduced naturally through experiences children understand and enjoy. Perfect for centres looking to add fun, age-appropriate English enrichment to their programming.',
      },
    },
    {
      id: 'french-through-play',
      icon: '🇫🇷',
      nameFr: 'Français par le jeu',
      nameEn: 'French Through Play',
      tagline: { en: 'Discover French Through Songs, Stories, Movement & Play', fr: 'Discover French Through Songs, Stories, Movement & Play' },
      description: {
        en: 'French Through Play introduces and reinforces French through engaging, child-friendly experiences — music, stories, games, movement and interactive activities. Sessions can be adapted to the group\'s existing level of French, suitable for beginners as well as groups looking for additional enrichment. The goal is simple: make learning and using French positive, natural and fun.',
        fr: 'French Through Play introduces and reinforces French through engaging, child-friendly experiences — music, stories, games, movement and interactive activities. Sessions can be adapted to the group\'s existing level of French, suitable for beginners as well as groups looking for additional enrichment. The goal is simple: make learning and using French positive, natural and fun.',
      },
    },
    {
      id: 'little-yogis',
      icon: '🧘',
      nameFr: 'Petits Yogis',
      nameEn: 'Little Yogis',
      tagline: { en: 'Yoga, Movement & Mindfulness', fr: 'Yoga, Movement & Mindfulness' },
      description: {
        en: 'A playful approach to yoga created especially for little bodies and big imaginations! Children explore age-appropriate yoga poses, stretching, balance, breathing, body awareness and relaxation through stories, games and imaginative movement. Calming activities and simple breathing exercises also introduce children to strategies they can use when they need a quiet moment.',
        fr: 'A playful approach to yoga created especially for little bodies and big imaginations! Children explore age-appropriate yoga poses, stretching, balance, breathing, body awareness and relaxation through stories, games and imaginative movement. Calming activities and simple breathing exercises also introduce children to strategies they can use when they need a quiet moment.',
      },
    },
    {
      id: 'dance-movement',
      icon: '💃',
      nameFr: 'Danse et mouvement',
      nameEn: 'Dance & Movement',
      tagline: { en: 'Music. Rhythm. Movement. FUN!', fr: 'Music. Rhythm. Movement. FUN!' },
      description: {
        en: 'High-energy dance sessions combine music, simple choreography, rhythm activities, creative movement and interactive dance games designed specifically for young children. Children are encouraged to move at their own level and enjoy being active without worrying about getting every step "right." No dance experience required—just bring your dancing feet!',
        fr: 'High-energy dance sessions combine music, simple choreography, rhythm activities, creative movement and interactive dance games designed specifically for young children. Children are encouraged to move at their own level and enjoy being active without worrying about getting every step "right." No dance experience required—just bring your dancing feet!',
      },
    },
    {
      id: 'active-kids',
      icon: '🏃',
      nameFr: 'Enfants actifs',
      nameEn: 'Active Kids',
      tagline: { en: 'Movement & Physical Literacy', fr: 'Movement & Physical Literacy' },
      description: {
        en: 'Active Kids brings purposeful physical activity directly into your centre through gross-motor games, obstacle courses, movement challenges and active play — running, jumping, balancing, throwing, catching and more. Activities are adapted to the children\'s developmental level and available space, indoors or outdoors. The children just think they\'re playing; behind every game is an opportunity to build stronger movement skills and physical confidence.',
        fr: 'Active Kids brings purposeful physical activity directly into your centre through gross-motor games, obstacle courses, movement challenges and active play — running, jumping, balancing, throwing, catching and more. Activities are adapted to the children\'s developmental level and available space, indoors or outdoors. The children just think they\'re playing; behind every game is an opportunity to build stronger movement skills and physical confidence.',
      },
    },
  ],
  flexibility: {
    titleFr: '✨ Programmation adaptée à votre centre',
    titleEn: '✨ Programming That Fits Your Centre',
    intro: {
      en: 'Every daycare is different, and your enrichment programming should be too. Workshops can be adapted according to:',
      fr: 'Every daycare is different, and your enrichment programming should be too. Workshops can be adapted according to:', // TODO-FR
    },
    list: {
      en: ['Children\'s ages and developmental levels', 'Group size', 'Available indoor or outdoor space', 'Current classroom themes and interests', 'Language level', 'Your centre\'s programming goals'],
      fr: ['Children\'s ages and developmental levels', 'Group size', 'Available indoor or outdoor space', 'Current classroom themes and interests', 'Language level', 'Your centre\'s programming goals'], // TODO-FR
    },
    bookingNote: {
      en: 'Sessions can be booked as a one-time special activity, recurring weekly enrichment or a multi-week program.',
      fr: 'Sessions can be booked as a one-time special activity, recurring weekly enrichment or a multi-week program.', // TODO-FR
    },
  },
  rates: {
    hour1: 12000, // $120 CAD, en cents
    hours2: 20000, // $200 CAD pour 2h consécutives ($100/h)
  },
  rateNote: {
    en: 'Two-hour bookings are ideal for centres wishing to offer workshops to multiple groups or age levels.',
    fr: 'Two-hour bookings are ideal for centres wishing to offer workshops to multiple groups or age levels.', // TODO-FR
  },
  closingLine: {
    en: 'You provide the children and the space. We bring the activities, energy and fun!',
    fr: 'You provide the children and the space. We bring the activities, energy and fun!', // TODO-FR
  },
};

// Toggle taxes — désactivé tant que Melanie n'a pas consulté un comptable.
const TAX_CONFIG = {
  enabled: false,
  tps: 0.05,
  tvq: 0.09975,
  exemptServices: [],
};

// Liens Google Calendar Appointment Scheduling — à remplacer par Melanie.
const BOOKING_LINKS = {
  trial: '#GOOGLE_CALENDAR_TRIAL_LINK',
  package10: '#GOOGLE_CALENDAR_PACKAGE_LINK',
};

function formatPriceCAD(cents) {
  if (cents === null || cents === undefined) return null;
  return (cents / 100).toLocaleString('fr-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  });
}

function getServiceById(id) {
  return SERVICES.find((s) => s.id === id) || null;
}
