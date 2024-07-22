import Link from "next/link";

import { getPokemon } from "@/lib/data/fetch/getPokemon";


export const PokemonListItem = async (props: { name: string }) => {
  const pokemon = await getPokemon(props.name);
  
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
