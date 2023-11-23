import { Radio, RadioGroup, cn } from '@nextui-org/react';

interface OptionsProps {
  options: string[];
  isAnswerChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Options({
  options,
  isAnswerChecked,
  onChange,
}: OptionsProps) {
  return (
    <RadioGroup
      color="success"
      isDisabled={isAnswerChecked}
      onChange={onChange}
    >
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
