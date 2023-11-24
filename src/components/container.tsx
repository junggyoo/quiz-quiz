import { cn } from '@nextui-org/react';

interface ContainerProps {
  children: React.ReactNode;
  direction?: 'row' | 'col';
}

export default function Container({
  children,
  direction = 'row',
}: ContainerProps) {
  return (
    <main
      className={cn(
        `flex flex-${direction}`,
        'w-[420px] h-[500px] p-5 overflow-auto',
        'bg-white rounded shadow-lg',
      )}
    >
      {children}
    </main>
  );
}
