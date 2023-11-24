import ResutlData from './result-data';
import CorrectAnswerRate from './correct-answer-rate';

interface QuizResultProps {
  timeTaken: number;
  correctAnswerCount: number;
  wrongAnswerCount: number;
  correctAnswerRate: number;
}

export default function QuizResult({
  timeTaken,
  correctAnswerCount,
  wrongAnswerCount,
  correctAnswerRate,
}: QuizResultProps) {
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
