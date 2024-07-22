'use client';

import { use } from "react";
import { PokedexContext } from "./PokedexClientProvider/PokedexClientProvider";

export const PokemonListItemButton = (props: {
  name: string;
  children: React.ReactNode;
}) => {
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
    <button
      className="hover:underline text-3xl text-red-500 hover:text-red-400 font-pixel"
      onClick={() => handleClick(props.name as string)}
    >
      {props.children}
    </button>
  );
};
