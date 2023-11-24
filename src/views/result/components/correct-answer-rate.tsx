import { CircularProgress } from '@nextui-org/react';

import Text from '@/components/text';

interface CorrectAnswerRateProps {
  correctAnswerRate: number;
}

export default function CorrectAnswerRate({
  correctAnswerRate,
}: CorrectAnswerRateProps) {
  return (
    <div className="text-center">
      <Text color="slate-400">정답률</Text>
      <CircularProgress
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
