import { useEffect } from 'react';
import { Tab, Tabs } from '@nextui-org/react';
import confetti from 'canvas-confetti';

import Container from '@/components/container';

import useAppStore from '@/store/app';

export default function ResultView() {
  const { quizHistory, timeTaken } = useAppStore((state) => ({
    quizHistory: state.quizHistory,
    timeTaken: state.timeTaken,
  }));

  useEffect(() => {
    const confettiOptions = {
      particleCount: 100,
      spread: 60,
      origin: { y: 0.7 },
    };

    confetti(confettiOptions);
  }, []);

  console.log(quizHistory);
  console.log(timeTaken);
  return (
    <Container direction="col">
      <Tabs fullWidth>
        <Tab key="result" title="퀴즈 결과">
          퀴즈 결과
        </Tab>
        <Tab key="review" title="오답 노트">
          퀴즈 히스토리
        </Tab>
      </Tabs>
    </Container>
  );
}
