import { Skeleton } from '@nextui-org/react';

import Container from '@/components/container';

export default function QuizLoading() {
  return (
    <Container direction="col" data-testid="quiz-loading">
      <Skeleton className="mb-[20px] rounded-lg">
        <div className="h-[60px]  rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-4 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-4 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Container>
  );
}
