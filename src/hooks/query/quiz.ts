import { useQuery } from '@tanstack/react-query';

import QuizService from '@/services/quiz';

export const useQuizQuery = (category: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['quiz', category],
    queryFn: () => QuizService.fetchQuizQuestions(category),
    enabled: !!category,
  });

  return { data, isLoading };
};
