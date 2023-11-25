/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import Container from '@/components/container';

import Question from './components/question';
import Options from './components/options';
import NextButton from './components/next-button';
import LoadingQuiz from './components/loading-quiz';
import ErrorQuiz from './components/error-quiz';
import CheckCorrectAnswer from './components/check-correc-answer';

import { useQuizQuery } from '@/hooks/query/quiz';
import { useQuiz } from '@/hooks/hook/useQuiz';

export default function QuizView() {
  const { data, isLoading, isError, refetch } = useQuizQuery();

  const {
    question,
    questionNumber,
    options,
    isAnswerChecked,
    userAnswer,
    correctAnswer,
    isLastQuestion,
    handleNextQuestion,
    handleOptionChange,
  } = useQuiz(data || []);

  if (isLoading) {
    return <LoadingQuiz />;
  }

  if (isError) {
    return <ErrorQuiz onRetryClick={refetch} />;
  }

  return (
    <Container direction="col">
      <Question question={question} numbering={questionNumber} />
      <Options
        options={options}
        isAnswerChecked={isAnswerChecked}
        onChange={handleOptionChange}
      />
      {isAnswerChecked && (
        <CheckCorrectAnswer
          correctAnswer={correctAnswer}
          userAnswer={userAnswer}
        />
      )}
      <NextButton
        isAnswerChecked={isAnswerChecked}
        isLastQuestion={isLastQuestion}
        onClick={handleNextQuestion}
      />
    </Container>
  );
}
