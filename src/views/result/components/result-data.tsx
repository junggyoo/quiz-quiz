import { Divider } from '@nextui-org/react';

import Text from '@/components/text';

import Stack from './stack';

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
      <Stack>
        <Text color="slate-400">소요 시간</Text>
        <Text size="lg" weight="semibold">
          {timeTaken}초
        </Text>
      </Stack>
      <Divider className="my-2" />
      <Stack>
        <Text color="slate-400">정답 수</Text>
        <Text size="lg" weight="semibold">
          {correctAnswerCount}개
        </Text>
      </Stack>
      <Divider className="my-2" />
      <Stack>
        <Text color="slate-400">오답 수</Text>
        <Text size="lg" weight="semibold">
          {wrongAnswerCount}개
        </Text>
      </Stack>
    </div>
  );
}
