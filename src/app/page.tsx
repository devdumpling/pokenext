import { PokemonCard } from "@/components/PokemonCard/PokemonCard";
import { PokemonList } from "@/components/PokemonList/PokemonList";

export default async function Home({ params, searchParams }: any) {
  return (
    <main>
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto p-4">
        <PokemonCard name={searchParams.selected} />
        <PokemonList />
      </section>
    </main>
  );
}
