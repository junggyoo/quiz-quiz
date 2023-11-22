import { clsx } from 'clsx';

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
      className={clsx(
        `flex flex-${direction}`,
        'w-[400px] min-h-[570px] p-5',
        'bg-white rounded shadow-lg',
      )}
    >
      {children}
    </main>
  );
}
