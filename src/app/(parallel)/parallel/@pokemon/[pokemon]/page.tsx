import { PokemonCard } from "@/components/PokemonCard/PokemonCard";
import LoadingPokemonSkeleton from "./loading";
import { Suspense } from "react";

type PokemonPageProps = {
  params: {
    pokemon: string;
  };
};

export default async function ParallelPokemonCardPage({
  params,
}: PokemonPageProps) {
  const selectedPokemon = params.pokemon ?? "bulbasaur";
  return (
    <Suspense fallback={<LoadingPokemonSkeleton />}>
      <PokemonCard name={selectedPokemon} />
    </Suspense>
  );
}
