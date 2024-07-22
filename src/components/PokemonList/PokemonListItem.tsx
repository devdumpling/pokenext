import Link from "next/link";

import { graphql } from "@/gql";
import { FragmentType, useFragment } from "@/gql/fragment-masking";

export const PokemonListItemFragment = graphql(
  /* GraphQL */
  `
    fragment BasePokemonListItem_pokemonItem on PokemonItem {
      id
      name
    }
  `
);

export const PokemonListItem = (props: {
  pokemon: FragmentType<typeof PokemonListItemFragment>;
}) => {
  // Gather and type data
  const pokemon = useFragment(PokemonListItemFragment, props.pokemon);

  if (!pokemon || !pokemon.name || !pokemon.id) {
    return null;
  }

  return (
    <li className="relative pl-2 items-center">
      <span className="font-pixel opacity-50 absolute right-0 top-0 text-md text-amber-500">
        {formatId(pokemon.id)}
      </span>
      <Link
        href={{
          query: {
            selected: pokemon.name,
          },
        }}
        className="hover:underline text-3xl text-red-500 hover:text-red-400 font-pixel"
      >
        {pokemon.name}
      </Link>
    </li>
  );
};

function formatId(id: number) {
  return id.toString().padStart(3, "0");
}
