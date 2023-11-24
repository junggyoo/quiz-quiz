import { Button, Tab, Tabs } from '@nextui-org/react';

import Container from '@/components/container';

import QuizResult from './components/quiz-result';

import useResult from '@/hooks/hook/useResult';

export default function ResultView() {
  const {
    timeTaken,
    correctAnswerCount,
    wrongAnswerCount,
    correctAnswerRate,
    handleRetry,
  } = useResult();

  return (
    <Container direction="col">
      <Tabs fullWidth>
        <Tab key="result" title="퀴즈 결과">
          <QuizResult
            timeTaken={timeTaken}
            correctAnswerCount={correctAnswerCount}
            wrongAnswerCount={wrongAnswerCount}
            correctAnswerRate={correctAnswerRate}
          />
        </Tab>
        <Tab key="review" title="오답 노트">
          퀴즈 히스토리
        </Tab>
      </Tabs>
      <div className="flex flex-col space-y-2 mt-auto">
        <Button size="md" color="primary" variant="flat" onClick={handleRetry}>
          다시풀기
        </Button>
        <Button size="md" color="success" variant="flat">
          처음으로
        </Button>
      </div>
    </Container>
  );
}
