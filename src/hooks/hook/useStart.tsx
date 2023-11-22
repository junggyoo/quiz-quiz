import { useRouter } from 'next/navigation';

import { useQuizQuery } from '@/hooks/query/quiz';

import useStore from '@/store';

export default function useStart() {
  const router = useRouter();
  const { category, setCategory, setQuizQuestions } = useStore((state) => ({
    category: state.category,
    setCategory: state.setCategory,
    setQuizQuestions: state.setQuizQuestions,
  }));

  const { data, isLoading, isSuccess } = useQuizQuery(Number(category));

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(Number(e.target.value));
  };

  const handleQuizStart = () => {
    if (isSuccess) {
      setQuizQuestions(data);
      router.push('/quiz');
    }
  };

  return {
    handleCategoryChange,
    handleQuizStart,
    isLoading,
  };
}
