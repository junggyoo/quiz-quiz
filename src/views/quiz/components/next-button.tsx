import { Button } from '@nextui-org/react';

interface NextButtonProps {
  isLastQuestion: boolean;
  onClick: () => void;
}

export default function NextButton({
  isLastQuestion,
  onClick,
}: NextButtonProps) {
  return (
    <Button
      variant="flat"
      color="success"
      size="lg"
      className="mt-auto"
      onClick={onClick}
      data-testid="next-button"
    >
      {isLastQuestion ? '결과 보기' : '다음 문제'}
    </Button>
  );
}
