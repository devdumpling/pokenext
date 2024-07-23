import { PokemonCard } from "@/components/PokemonCard/PokemonCard";

type PokemonPageProps = {
  params: {
    pokemon: string;
  };
};

export default async function ParallelPokemonCardPage({
  params,
}: PokemonPageProps) {
  const selectedPokemon = params.pokemon ?? "bulbasaur";
  return <PokemonCard name={selectedPokemon} />;
}
