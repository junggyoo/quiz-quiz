import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import StartBody from '@/views/start/start-body';

import QuizService from '@/services/quiz';

export default async function StartPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['quiz', 0],
    queryFn: () => QuizService.fetchQuizQuestions(0),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StartBody />
    </HydrationBoundary>
  );
}
