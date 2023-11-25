import useAppStore from '@/store/app';

export default function useStart() {
  const { setCategory, setView } = useAppStore();

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setCategory(Number(e.target.value));
  };

  const handleQuizStart = () => {
    setView('quiz');
  };

  return {
    handleCategoryChange,
    handleQuizStart,
  };
}
