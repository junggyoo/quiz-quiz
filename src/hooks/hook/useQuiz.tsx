import { useRef, useState } from 'react';

import useAppStore from '@/store/app';

import { getTimeTaken } from '@/utils';

import type { QuizQuestion } from '@/services/quiz/type';

export const useQuiz = (quizData: QuizQuestion[]) => {
  const startTime = useRef(Date.now());

  const { setView, setQuizHistory, setTimeTaken } = useAppStore(
    (state) => ({
      setView: state.setView,
      setQuizHistory: state.setQuizHistory,
      setTimeTaken: state.setTimeTaken,
    }),
  );

  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    const isCorrect =
      userAnswer === quizData[currentQuestion].correctAnswer;

    setQuizHistory({
      ...quizData[currentQuestion],
      userAnswer,
      isCorrect,
    });

    if (currentQuestion === quizData.length - 1) {
      const timeTaken = getTimeTaken(startTime.current, Date.now());
      setTimeTaken(timeTaken);
      setView('result');
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
    setIsAnswerChecked(false);
    setUserAnswer('');
  };

  const handleOptionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUserAnswer(e.target.value);
    setIsAnswerChecked(true);
  };

  const correctAnswer = quizData[currentQuestion]?.correctAnswer;
  const questionNumber = currentQuestion + 1;
  const question = quizData[currentQuestion]?.question;
  const options = quizData[currentQuestion]?.options;
  const isLastQuestion = currentQuestion === quizData.length - 1;

  return {
    userAnswer,
    isAnswerChecked,
    correctAnswer,
    questionNumber,
    question,
    options,
    isLastQuestion,
    handleNextQuestion,
    handleOptionChange,
  };
};
