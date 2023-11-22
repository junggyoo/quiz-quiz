'use client';

import { Button } from '@nextui-org/react';

import Container from '@/components/container';
import Category from './components/Category';

import useStart from '@/hooks/hook/useStart';

export default function StartBody() {
  const { isLoading, handleCategoryChange, handleQuizStart } = useStart();

  return (
    <Container direction="col">
      <h1 className="mt-10 text-3xl font-semibold">Quiz quiz</h1>
      <Category onCategoryChange={handleCategoryChange} />
      <Button
        variant="flat"
        color="success"
        size="lg"
        className="mt-auto"
        onClick={handleQuizStart}
        isLoading={isLoading}
      >
        {isLoading ? '퀴즈 생성 중...' : '퀴즈 풀기'}
      </Button>
    </Container>
  );
}
