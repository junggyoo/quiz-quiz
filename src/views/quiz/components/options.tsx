import { Radio, RadioGroup, cn } from '@nextui-org/react';

import useQuizStore from '@/store';

export default function Options() {
  const { quizQuestions, currentQuestion, setUserAnswer, setIsAnswerChecked } =
    useQuizStore((state) => ({
      quizQuestions: state.quizQuestions,
      currentQuestion: state.currentQuestion,
      setUserAnswer: state.setUserAnswer,
      setIsAnswerChecked: state.setIsAnswerChecked,
    }));

  const options = quizQuestions?.[currentQuestion]?.options;

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
    setIsAnswerChecked(true);
  };

  return (
    <RadioGroup color="success" onChange={handleOptionChange}>
      {options.map((option) => (
        <Radio
          key={option}
          value={option}
          size="sm"
          classNames={{
            base: cn(
              'inline-flex max-w-md w-full bg-content1 m-0',
              'hover:bg-content2 items-center justify-start',
              'cursor-pointer rounded-lg gap-1 p-2 border-2 border-transparent',
              'data-[selected=true]:border-success',
            ),
          }}
        >
          {option}
        </Radio>
      ))}
    </RadioGroup>
  );
}
