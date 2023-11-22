'use client';

import { Button, Select, SelectItem } from '@nextui-org/react';

import Container from '@/components/container';

import useStart from '@/hooks/hook/useStart';

import { CATEGORIES } from '@/constants/categories';

export default function StartPage() {
  const { handleCategoryChange, handleStartQuiz } = useStart();

  return (
    <Container direction="col" className="justify-between">
      <h1 className="text-center mt-20 text-4xl font-bold ">Quiz Quiz</h1>
      <Select
        size="sm"
        label="카테고리"
        placeholder="카테고리를 선택해주세요."
        className="mt-10"
        onChange={handleCategoryChange}
      >
        {CATEGORIES.map((category) => (
          <SelectItem key={category.value} value={category.value}>
            {category.label}
          </SelectItem>
        ))}
      </Select>
      <Button
        variant="flat"
        color="success"
        size="lg"
        className="mt-auto"
        onClick={handleStartQuiz}
      >
        퀴즈 풀기
      </Button>
    </Container>
  );
}
