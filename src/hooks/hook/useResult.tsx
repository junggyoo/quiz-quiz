import { useEffect } from 'react';
import confetti from 'canvas-confetti';

import useAppStore from '@/store/app';

export default function useResult() {
  const { quizHistory, timeTaken } = useAppStore((state) => ({
    quizHistory: state.quizHistory,
    timeTaken: state.timeTaken,
    setView: state.setView,
  }));

  const correctAnswerCount =
    quizHistory.filter((quiz) => quiz.isCorrect).length || 0;
  const wrongAnswerCount = quizHistory.length - correctAnswerCount || 0;

  const correctAnswerRate =
    Math.floor((correctAnswerCount / quizHistory.length) * 100) || 0;

  useEffect(() => {
    const confettiOptions = {
      particleCount: 100,
      spread: 60,
      origin: { y: 0.7 },
    };

    confetti(confettiOptions);
  }, []);

  return {
    correctAnswerCount,
    wrongAnswerCount,
    correctAnswerRate,
    timeTaken,
  };
}
