import { query } from "@pokenext/lib/server";
import { graphql } from "@/gql";

import { PokemonListItem } from "./PokemonListItem";
import { isNotNullOrUndefined } from "@/gql/typeguards";

const PokemonListQueryDocument = graphql(`
  query PokemonListQuery($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        ...PokemonItem
      }
    }
  }
`);

export type PokemonListProps = {
  limit?: number;
  offset?: number;
};

export const PokemonList = async ({ limit, offset }: PokemonListProps) => {
  const pokemonListQueryVariables = { limit, offset };

  const pokemonListQuery = {
    query: PokemonListQueryDocument,
    variables: pokemonListQueryVariables,
  };

  const { data, error } = await query(pokemonListQuery);

  // Gather data
  const results = data?.pokemons?.results?.filter(isNotNullOrUndefined);

  if (error) {
    console.error(error);
    return null;
  }

  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="m-4">
      <ul>
        {results.map((pokemon) => (
          <PokemonListItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};
