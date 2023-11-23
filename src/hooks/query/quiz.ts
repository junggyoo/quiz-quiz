import { useQuery } from '@tanstack/react-query';

import QuizService from '@/services/quiz';

import useAppStore from '@/store/app';

export const useQuizQuery = () => {
  const category = useAppStore((state) => state.category);

  const {
    data = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['quiz', category],
    queryFn: () => QuizService.fetchQuizQuestions(category),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, refetch };
};
