'use client';

import Container from '@/components/container';
import OptionsView from './components/options-view';
import Question from './components/question';

import useStore from '@/store';

export default function QuizBody() {
  const { quizQuestions, currentQuestion } = useStore((state) => ({
    quizQuestions: state.quizQuestions,
    currentQuestion: state.currentQuestion,
  }));

  return (
    <Container direction="col">
      <Question question={quizQuestions?.[currentQuestion]?.question} />
      <OptionsView options={quizQuestions?.[currentQuestion]?.options} />
    </Container>
  );
}
