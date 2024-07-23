import { graphql } from "@/gql";
import { FragmentType, useFragment } from "@/gql/fragment-masking";

import { PokemonListItemButton } from "./PokemonListItemButton.client";

export const PokemonListItemFragment = graphql(
  /* GraphQL */
  `
    fragment ClientPokemonItem on PokemonItem {
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
      <PokemonListItemButton name={pokemon.name}>
        {pokemon.name}
      </PokemonListItemButton>
    </li>
  );
};

function formatId(id: number) {
  return id.toString().padStart(3, "0");
}
