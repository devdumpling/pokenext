"use client";

import { graphql } from "@/gql";
import { FragmentType, useFragment } from "@/gql/fragment-masking";

import { use } from "react";
import { PokedexContext } from "./PokedexClientProvider/PokedexClientProvider";

export const PokemonListItemFragment = graphql(
  /* GraphQL */
  `
    fragment PokemonItem on PokemonItem {
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

  /**
   * Update context when clicking on a pokemon
   */
  const pokedex = use(PokedexContext);

  const handleClick = (name: string) => {
    if (pokedex) {
      pokedex.setSelectedPokemon(name);
    }

    console.log(`Clicked on ${name}`);
  };

  return (
    <li className="relative pl-2 items-center">
      <span className="font-pixel opacity-50 absolute right-0 top-0 text-md text-amber-500">
        {formatId(pokemon.id)}
      </span>
      <button
        className="hover:underline text-3xl text-red-500 hover:text-red-400 font-pixel"
        onClick={() => handleClick(pokemon.name as string)}
      >
        {pokemon.name}
      </button>
    </li>
  );
};

function formatId(id: number) {
  return id.toString().padStart(3, "0");
}
