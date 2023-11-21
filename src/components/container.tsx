interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <main className="flex flex-col justify-between min-w-[375px] min-h-[600px] p-5 bg-white rounded">
      {children}
    </main>
  );
}
