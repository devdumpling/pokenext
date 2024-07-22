export default function ParallelLayout({
  children,
  pokemon,
  pokelist,
}: Readonly<{
  children: React.ReactNode;
  pokemon: React.ReactNode;
  pokelist: React.ReactNode;
}>) {
  return (
    <main>
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto p-4">
        {pokemon}
        {pokelist}
        {children}
      </section>
    </main>
  );
}
