import Image from "next/image";

import { getPokemon } from "@pokenext/lib/fetch";

export const PokemonCard = async (props: { name: string }) => {
  const pokemon = await getPokemon(props.name);

  if (!pokemon || !pokemon.name || !pokemon.id) {
    return null;
  }

  const name = pokemon.name ?? "Select a pokemon";
  const sprite = pokemon.sprites?.front_default;
  const types = pokemon.types?.map((type) => type?.type?.name);

  const shouldRenderPokemon = name && sprite && types;

  return (
    <div className="flex flex-col items-center gap-2">
      {shouldRenderPokemon && (
        <>
          <div>
            <h2 className="text-5xl font-pixel font-bold">{name}</h2>
            <div className="flex items-center gap-2">
              {types?.map((type) => (
                <span
                  key={type}
                  className="px-2 py-1 font-mono bg-gray-200 dark:bg-gray-800 rounded-full text-sm"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
          <Image
            src={sprite}
            alt={name}
            width={250}
            height={250}
            className="rounded-full"
          />
        </>
      )}
    </div>
  );
};
