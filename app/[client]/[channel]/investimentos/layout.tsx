interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-xl font-light">Investimentos em Publicidade</h1>
      </div>
      {children}
    </>
  );
}
