import { PokemonCard } from "@/components/PokemonCard/PokemonCard";

export default async function ParallelDefaultPokemonCardPage() {
  const selectedPokemon = "bulbasaur";
  return <PokemonCard name={selectedPokemon} />;
}
