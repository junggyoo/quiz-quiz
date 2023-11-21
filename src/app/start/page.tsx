import { Button } from '@nextui-org/react';

import Container from '@/components/container';

export default function StartPage() {
  return (
    <Container>
      <h1 className="text-center">Quiz Quiz</h1>
      <Button variant="flat" color="success">
        퀴즈 풀기
      </Button>
    </Container>
  );
}
