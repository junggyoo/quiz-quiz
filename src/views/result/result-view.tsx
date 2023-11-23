import Container from '@/components/container';

import useAppStore from '@/store/app';

export default function ResultView() {
  const { quizHistory, timeTaken } = useAppStore((state) => ({
    quizHistory: state.quizHistory,
    timeTaken: state.timeTaken,
  }));

  console.log(quizHistory);
  console.log(timeTaken);
  return (
    <Container>
      <h1>Result</h1>
    </Container>
  );
}
