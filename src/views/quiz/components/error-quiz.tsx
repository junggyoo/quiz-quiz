import { Button } from '@nextui-org/react';

import Container from '@/components/container';

interface ErrorQuizProps {
  onRetryClick: () => void;
}

export default function ErrorQuiz({ onRetryClick }: ErrorQuizProps) {
  return (
    <Container direction="col" data-testid="quiz-error">
      <h1>문제를 불러오는데 실패했습니다.</h1>
      <Button
        size="lg"
        variant="flat"
        color="danger"
        onClick={onRetryClick}
      >
        다시 시도
      </Button>
    </Container>
  );
}
