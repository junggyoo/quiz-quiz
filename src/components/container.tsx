interface ContainerProps {
  children: React.ReactNode;
  direction?: 'row' | 'col';
  className?: string;
}

export default function Container({
  children,
  direction = 'row',
  className = '',
}: ContainerProps) {
  return (
    <main
      className={`flex flex-${direction} min-w-[375px] min-h-[570px] p-5 bg-white rounded ${className}`}
    >
      {children}
    </main>
  );
}
