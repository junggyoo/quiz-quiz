import { useRouter } from 'next/navigation';

import useStore from '@/store';

export default function useStart() {
  const router = useRouter();
  const { setCategory } = useStore();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(Number(e.target.value));
  };

  const handleStartQuiz = () => {
    router.push('/quiz');
  };

  return {
    handleCategoryChange,
    handleStartQuiz,
  };
}
