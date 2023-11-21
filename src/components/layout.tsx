interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex justify-center items-center min-h-screen overflow-auto bg-gradient-linear to-end-color from-start-color">
      {children}
    </div>
  );
}
