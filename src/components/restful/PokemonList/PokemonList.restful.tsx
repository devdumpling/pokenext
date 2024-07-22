import { getPokemons } from "@/lib/data/fetch/getPokemons";
import { PokemonListItem } from "./PokemonListItem.restful";

export type PokemonListProps = {
  limit: number;
  offset: number;
};

export const PokemonList = async ({ limit, offset }: PokemonListProps) => {
  // ideally this would be typed... manually yikes
  const pokemonList = await getPokemons(limit, offset);

  if (!pokemonList || !pokemonList.results) {
    return null;
  }

  // Gather our results
  const results = pokemonList.results;

  return (
    <div className="m-4">
      <ul>
        {results.map((pokemon) => (
          <PokemonListItem key={pokemon.name} name={pokemon.name} />
        ))}
      </ul>
    </div>
  );
};
