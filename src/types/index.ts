export interface QuizHistory {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correctAnswer: string;
  options: string[];
  userAnswer: string;
  isCorrect: boolean;
}
