import { PokemonListSkeleton, PokemonSkeleton } from "@pokenext/ui";

export default function PokeHomeLoading() {
  <main>
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto p-4">
      <PokemonSkeleton />
      <PokemonListSkeleton />
    </section>
  </main>;
}
