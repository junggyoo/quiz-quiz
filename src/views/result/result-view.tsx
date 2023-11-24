import { Button, Tab, Tabs } from '@nextui-org/react';

import Container from '@/components/container';

import QuizResult from './components/quiz-result';
import ReviewNote from './components/review-note';

import useResult from '@/hooks/hook/useResult';

import useAppStore from '@/store/app';

export default function ResultView() {
  const quizHistory = useAppStore((state) => state.quizHistory);

  const {
    timeTaken,
    correctAnswerCount,
    wrongAnswerCount,
    correctAnswerRate,
    handleRetry,
    handleGoStart,
  } = useResult();

  return (
    <Container direction="col">
      <Tabs fullWidth aria-label="Menu" size="lg">
        <Tab key="quiz-result" title="퀴즈 결과">
          <QuizResult
            timeTaken={timeTaken}
            correctAnswerCount={correctAnswerCount}
            wrongAnswerCount={wrongAnswerCount}
            correctAnswerRate={correctAnswerRate}
          />
        </Tab>
        <Tab key="review-note" title="오답 노트">
          <ReviewNote quizHistory={quizHistory} />
        </Tab>
      </Tabs>
      <div className="flex flex-col mt-auto space-y-2">
        <Button
          size="md"
          color="primary"
          variant="flat"
          onClick={handleRetry}
        >
          다시풀기
        </Button>
        <Button
          size="md"
          color="success"
          variant="flat"
          onClick={handleGoStart}
        >
          처음으로
        </Button>
      </div>
    </Container>
  );
}
