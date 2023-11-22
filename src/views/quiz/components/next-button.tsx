'use client';

import { Button } from '@nextui-org/react';

import useQuizStore from '@/store';
import { useQuiz } from '@/hooks/hook/useQuiz';

export default function NextButton() {
  const { isAnswerChecked, quizQuestions, currentQuestion } = useQuizStore(
    (state) => ({
      isAnswerChecked: state.isAnswerChecked,
      quizQuestions: state.quizQuestions,
      currentQuestion: state.currentQuestion,
    }),
  );
  const { handleNextQuestion } = useQuiz(quizQuestions, currentQuestion);

  return (
    <Button
      variant="flat"
      color="success"
      isDisabled={!isAnswerChecked}
      className="mt-auto"
      onClick={handleNextQuestion}
    >
      다음 문제
    </Button>
  );
}
