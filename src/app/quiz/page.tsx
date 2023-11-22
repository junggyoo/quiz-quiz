'use client';

import { useSearchParams } from 'next/navigation';

import Container from '@/components/container';

import { useQuizQuery } from '@/hooks/query/quiz';

export default function QuizPage() {
  const category = useSearchParams().get('category');
  const { data, isLoading } = useQuizQuery(Number(category));

  console.log(data);
  return (
    <Container>
      <h1>Quiz Page</h1>
    </Container>
  );
}
