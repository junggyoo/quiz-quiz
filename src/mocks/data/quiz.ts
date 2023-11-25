export const MOCK_QUIZ_DATA = [
  {
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Which company did Valve cooperate with in the creation of the Vive?',
    correctAnswer: 'HTC',
    options: ['Oculus', 'Google', 'Razer', 'HTC'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment: Video Games',
    question:
      'Which of these is NOT a playable character in the game &quot;Jet Force Gemini&quot;?',
    correctAnswer: 'Lupus',
    options: ['Vela', 'Lupus', 'Juniper', 'Jet'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment: Video Games',
    question:
      'Which of these is NOT a character from the game &quot;Splatoon&quot;?',
    correctAnswer: 'Marie',
    options: ['Marie', 'Callie', 'Inkling', 'Judd'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment: Video Games',
    question:
      'Which of these is NOT a character from the game &quot;Undertale&quot;?',
    correctAnswer: 'Flowey',
    options: ['Flowey', 'Toriel', 'Papyrus', 'Sans'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment: Video Games',
    question:
      'Which of these is NOT a character from the game &quot;Team Fortress 2&quot;?',
    correctAnswer: 'Sniper',
    options: ['Sniper', 'Pyro', 'Spy', 'Engineer'],
  },
];

export const MOCK_QUIZ_DTO = {
  response_code: 0,
  results: [
    {
      category: 'Entertainment: Video Games',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'What was the first game to be released in the Tony Hawk&#039;s series?',
      correct_answer: 'Pro Skater',
      incorrect_answers: [
        'Underground',
        'American Wasteland',
        'Ride',
      ],
    },
    {
      category: 'Entertainment: Video Games',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'In the game &quot;Subnautica&quot;, which feature was removed in the &quot;Seamoth Update&quot;?',
      correct_answer: 'Seaglide',
      incorrect_answers: [
        'Laser Cutter',
        'Hull Integrity',
        'Radiation Suit',
      ],
    },
    {
      category: 'Entertainment: Video Games',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'Which of these is NOT a character from the game &quot;Undertale&quot;?',
      correct_answer: 'Flowey',
      incorrect_answers: ['Toriel', 'Papyrus', 'Sans'],
    },
    {
      category: 'Entertainment: Video Games',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'Which of these is NOT a character from the game &quot;Team Fortress 2&quot;?',
      correct_answer: 'Sniper',
      incorrect_answers: ['Pyro', 'Spy', 'Engineer'],
    },
    {
      category: 'Entertainment: Video Games',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'Which of these is NOT a character from the game &quot;Undertale&quot;?',
      correct_answer: 'Flowey',
      incorrect_answers: ['Toriel', 'Papyrus', 'Sans'],
    },
  ],
};
