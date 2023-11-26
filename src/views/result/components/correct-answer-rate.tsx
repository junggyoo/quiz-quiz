import { CircularProgress } from '@nextui-org/react';

interface CorrectAnswerRateProps {
  correctAnswerRate: number;
}

export default function CorrectAnswerRate({
  correctAnswerRate,
}: CorrectAnswerRateProps) {
  return (
    <div className="text-center">
      <span className="text-gray-500">정답률</span>
      <CircularProgress
        aria-label="정답률"
        classNames={{
          svg: 'w-24 h-24 drop-shadow-md',
          value: 'text-xl font-semibold text-black',
        }}
        color="primary"
        value={correctAnswerRate}
        strokeWidth={4}
        showValueLabel={true}
      />
    </div>
  );
}
