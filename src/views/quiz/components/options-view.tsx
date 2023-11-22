import { cn, Radio, RadioGroup } from '@nextui-org/react';

interface OptionsViewProps {
  options: string[];
}

export default function OptionsView({ options }: OptionsViewProps) {
  return (
    <RadioGroup color="success">
      {options.map((option) => (
        <Radio
          key={option}
          value={option}
          size="md"
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
