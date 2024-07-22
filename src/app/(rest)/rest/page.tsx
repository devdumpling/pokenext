import { PokemonCard } from "@/components/restful/PokemonCard/PokemonCard.restful";
import { PokemonList } from "@/components/restful/PokemonList/PokemonList.restful";
import { PokemonListSkeleton, PokemonSkeleton } from "@/components/skeles";
import { Suspense } from "react";

export default async function PokedexRestHomepage({
  params,
  searchParams,
}: any) {
  const selectedPokemon = searchParams.selected ?? "bulbasaur";
  return (
    <main>
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto p-4">
        <Suspense fallback={<PokemonSkeleton />}>
          <PokemonCard name={selectedPokemon} />
        </Suspense>

        <Suspense fallback={<PokemonListSkeleton />}>
          <PokemonList limit={25} offset={0} />
        </Suspense>
      </section>
    </main>
  );
}
