import { Button, Tab, Tabs } from '@nextui-org/react';

import Container from '@/components/container';

import QuizResult from './components/quiz-result';

export default function ResultView() {
  return (
    <Container direction="col">
      <Tabs fullWidth>
        <Tab key="result" title="퀴즈 결과">
          <QuizResult />
        </Tab>
        <Tab key="review" title="오답 노트">
          퀴즈 히스토리
        </Tab>
      </Tabs>
      <div className="flex flex-col space-y-2 mt-auto">
        <Button size="md" color="primary" variant="flat">
          다시풀기
        </Button>
        <Button size="md" color="success" variant="flat">
          처음으로
        </Button>
      </div>
    </Container>
  );
}
