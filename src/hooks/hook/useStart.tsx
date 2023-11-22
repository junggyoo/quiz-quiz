import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function useStart() {
  const router = useRouter();

  const [category, setCategory] = useState(0);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(Number(e.target.value));
  };

  const handleStartQuiz = () => {
    router.push(`/quiz?category=${category}`);
  };

  return {
    handleCategoryChange,
    handleStartQuiz,
  };
}
