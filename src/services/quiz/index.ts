import axios from 'axios';

import { QuizDto, QuizQuestion } from './type';

export default class QuizService {
  static async fetchQuizQuestions(category: number): Promise<QuizQuestion[]> {
    const amount = 10;
    const difficulty = 'easy';
    const type = 'multiple';

    const quizUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

    const { data } = await axios.get(quizUrl);

    const quizQuestions = data.results.map((quiz: QuizDto) =>
      this.generateQuizQuestion(quiz),
    );

    return quizQuestions;
  }

  static generateQuizQuestion(quiz: QuizDto): QuizQuestion {
    const { type, difficulty, category, question, correct_answer } = quiz;

    const options = this.shuffleArray([
      ...quiz.incorrect_answers,
      quiz.correct_answer,
    ]);

    return {
      type,
      difficulty,
      category,
      question,
      correctAnswer: correct_answer,
      options,
    };
  }

  static shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      const temp = array[i];

      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }
}
