import { useRef, useState } from 'react';

import useAppStore from '@/store/app';

import type { QuizQuestion } from '@/services/quiz/type';

export const useQuiz = (quizData: QuizQuestion[]) => {
  const startTime = useRef(Date.now());

  const { setView, setQuizHistory, setTimeTaken } = useAppStore((state) => ({
    setView: state.setView,
    setQuizHistory: state.setQuizHistory,
    setTimeTaken: state.setTimeTaken,
  }));

  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    const isCorrect = userAnswer === quizData[currentQuestion].correctAnswer;
    const quizHistory = {
      ...quizData[currentQuestion],
      userAnswer,
      isCorrect,
    };
    setQuizHistory(quizHistory);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setTimeTaken(Math.floor((Date.now() - startTime.current) / 1000));
      setView('result');
    }

    setIsAnswerChecked(false);
    setUserAnswer('');
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
