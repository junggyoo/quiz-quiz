import { Chip } from '@nextui-org/react';

interface CheckCorrectAnswerProps {
  correctAnswer: string;
  userAnswer: string;
}

export default function CheckCorrectAnswer({
  correctAnswer,
  userAnswer,
}: CheckCorrectAnswerProps) {
  const isCorrect = correctAnswer === userAnswer;

  if (isCorrect) {
    return (
      <Chip size="md" color="primary" variant="solid" className="mt-4">
        정답입니다.
      </Chip>
    );
  }

  if (!isCorrect) {
    return (
      <Chip
        size="md"
        color="danger"
        variant="solid"
        className="mt-4"
      >{`오답입니다. ( 정답: ${correctAnswer} )`}</Chip>
    );
  }

  return null;
}
