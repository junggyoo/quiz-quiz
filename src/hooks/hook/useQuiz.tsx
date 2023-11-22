import { useRouter } from 'next/navigation';

import useQuizStore from '@/store';

import type { QuizQuestion } from '@/services/quiz/type';

export const useQuiz = (
  quizQuestions: QuizQuestion[],
  currentQuestion: number,
) => {
  const router = useRouter();

  const {
    addQuizHistory,
    setCurrentQuestion,
    setUserAnswer,
    setIsAnswerChecked,
    userAnswer,
  } = useQuizStore();

  const handleNextQuestion = () => {
    const isCorrect =
      userAnswer === quizQuestions[currentQuestion].correctAnswer;
    const quizHistory = {
      ...quizQuestions[currentQuestion],
      userAnswer,
      isCorrect,
    };
    addQuizHistory(quizHistory);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      router.push('/result');
    }

    setIsAnswerChecked(false);
    setUserAnswer('');
  };

  return {
    userAnswer,
    handleNextQuestion,
  };
};
