import { PokemonListSkeleton, PokemonSkeleton } from "@/components/skeles";
import { PokemonCard } from "@/components/stateful-client/PokemonCard.client";
import { PokemonList } from "@/components/stateful-client/PokemonList";
import { Suspense } from "react";

export default async function ClientPokedexPage() {
  return (
    <main>
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto p-4">
        <Suspense fallback={<PokemonSkeleton />}>
          <PokemonCard />
        </Suspense>

        <Suspense fallback={<PokemonListSkeleton />}>
          <PokemonList limit={25} offset={0} />
        </Suspense>
      </section>
    </main>
  );
}
