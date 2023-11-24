import { Divider } from '@nextui-org/react';

import ResultRow from './result-row';

interface ResultDataProps {
  timeTaken: number;
  correctAnswerCount: number;
  wrongAnswerCount: number;
}

export default function ResutlData({
  timeTaken,
  correctAnswerCount,
  wrongAnswerCount,
}: ResultDataProps) {
  return (
    <div>
      <ResultRow>
        <span className="text-gray-500">소요 시간</span>
        <span className="text-lg font-semibold">{timeTaken}초</span>
      </ResultRow>
      <Divider className="my-2" />
      <ResultRow>
        <span className="text-gray-500">정답 수</span>
        <span className="text-lg font-semibold">
          {correctAnswerCount}개
        </span>
      </ResultRow>
      <Divider className="my-2" />
      <ResultRow>
        <span className="text-gray-500">오답 수</span>
        <span className="text-lg font-semibold">
          {wrongAnswerCount}개
        </span>
      </ResultRow>
    </div>
  );
}
