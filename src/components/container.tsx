import { cn } from '@nextui-org/react';

interface ContainerProps {
  children: React.ReactNode;
  direction?: 'row' | 'col';
}

export default function Container({
  children,
  direction = 'row',
  ...rest
}: ContainerProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      className={cn(
        `flex flex-${direction}`,
        'w-[450px] h-[550px] p-5 overflow-auto',
        'bg-white rounded shadow-lg',
      )}
      {...rest}
    >
      {children}
    </main>
  );
}
