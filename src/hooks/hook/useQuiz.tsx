import { useState } from 'react';
import { useRouter } from 'next/navigation';

import useStore from '@/store';

import type { QuizQuestion } from '@/services/quiz/type';

export const useQuiz = (
  quizQuestions: QuizQuestion[],
  currentQuestion: number,
) => {
  const router = useRouter();
  const { addQuizHistory, setCurrentQuestion } = useStore();
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswerChecked, setAnswerChecked] = useState(false);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
  };

  const handleNext = () => {
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

    setAnswerChecked(false);
    setUserAnswer('');
  };

  const handleCheckAnswer = () => {
    setAnswerChecked(true);
  };

  return {
    userAnswer,
    isAnswerChecked,
    handleOptionChange,
    handleNext,
    handleCheckAnswer,
  };
};
