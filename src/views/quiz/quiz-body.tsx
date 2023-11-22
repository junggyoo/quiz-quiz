'use client';

import Container from '@/components/container';
import Question from './components/question';
import Options from './components/options';
import NextButton from './components/next-button';

export default function QuizBody() {
  return (
    <Container direction="col">
      <Question />
      <Options />
      <NextButton />
    </Container>
  );
}
