import { PokemonCard } from "@/components/PokemonCard/PokemonCard";

export default async function PokelistDefaultPage() {
  const selectedPokemon = "bulbasaur";
  return <PokemonCard name={selectedPokemon} />;
}
