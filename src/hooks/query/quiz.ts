import { useQuery } from '@tanstack/react-query';

import QuizService from '@/services/quiz';

export const useQuizQuery = (category: number) => {
  const {
    data = [],
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['quiz', category],
    queryFn: () => QuizService.fetchQuizQuestions(category),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isSuccess };
};
