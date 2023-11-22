'use client';

import Container from '@/components/container';

import QuizSkeleton from './components/quiz-skeleton';
import OptionsView from './components/options-view';
import Question from './components/question';

import { useQuizQuery } from '@/hooks/query/quiz';

import useStore from '@/store';

export default function QuizBody() {
  const { category, currentQuestion } = useStore((state) => ({
    category: state.category,
    currentQuestion: state.currentQuestion,
  }));
  const { data, isLoading } = useQuizQuery(Number(category));

  if (isLoading) {
    return <QuizSkeleton />;
  }

  return (
    <Container direction="col">
      <Question question={data?.[currentQuestion]?.question} />
      <OptionsView options={data?.[currentQuestion]?.options} />
    </Container>
  );
}
