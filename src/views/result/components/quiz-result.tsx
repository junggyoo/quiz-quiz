import ResutlData from './result-data';
import CorrectAnswerRate from './correct-answer-rate';

import useResult from '@/hooks/hook/useResult';

export default function QuizResult() {
  const { timeTaken, correctAnswerCount, wrongAnswerCount, correctAnswerRate } =
    useResult();

  return (
    <section className="flex flex-col items-center space-y-5 mt-10">
      <div className="flex justify-around w-full">
        <CorrectAnswerRate correctAnswerRate={correctAnswerRate} />
        <ResutlData
          timeTaken={timeTaken}
          correctAnswerCount={correctAnswerCount}
          wrongAnswerCount={wrongAnswerCount}
        />
      </div>
    </section>
  );
}
