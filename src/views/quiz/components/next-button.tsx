import { Button } from '@nextui-org/react';

interface NextButtonProps {
  isAnswerChecked: boolean;
  isLastQuestion: boolean;
  onClick: () => void;
}

export default function NextButton({
  isAnswerChecked,
  isLastQuestion,
  onClick,
}: NextButtonProps) {
  return (
    <Button
      variant="flat"
      color="success"
      isDisabled={!isAnswerChecked}
      className="mt-auto"
      onClick={onClick}
    >
      {isLastQuestion ? '결과 보기' : '다음 문제'}
    </Button>
  );
}
