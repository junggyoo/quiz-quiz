import { Card, Skeleton } from '@nextui-org/react';

import Container from '@/components/container';

export default function QuizSkeleton() {
  return (
    <Container direction="col">
      <Skeleton className="rounded-lg" style={{ height: '50px' }}>
        <div className="rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="flex flex-col gap-2 mt-10">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Container>
  );
}
