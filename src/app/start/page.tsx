'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Select, SelectItem } from '@nextui-org/react';

import Container from '@/components/container';

import { CATEGORIES } from '@/constants/categories';

export default function StartPage() {
  const router = useRouter();

  const [category, setCategory] = useState(0);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(Number(e.target.value));
  };

  const handleStartQuiz = () => {
    router.push(`/quiz?category=${category}`);
  };

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
