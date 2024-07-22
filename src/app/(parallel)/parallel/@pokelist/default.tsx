import { PokemonList } from "@/components/parallel/PokemonList/PokemonList";

export default async function DefaultPokemonListPage() {
  return <PokemonList limit={25} offset={0} />;
}
