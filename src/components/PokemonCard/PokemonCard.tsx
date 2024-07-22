import { query } from "@/lib/data/apollo/server";
import { graphql } from "@/gql";
import Image from "next/image";

const PokemonQueryDocument = graphql(`
  query BasePokemonQuery($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
    }
  }
`);

export const PokemonCard = async (props: { name: string }) => {
  const pokemonQuery = {
    query: PokemonQueryDocument,
    variables: {
      name: props.name,
    },
  };
  const { data } = await query(pokemonQuery);

  if (!data || !data.pokemon) {
    return null;
  }

  const id = data.pokemon.id;
  const name = data.pokemon.name ?? "Select a pokemon";
  const sprite = data.pokemon.sprites?.front_default;
  const types = data.pokemon.types?.map((type) => type?.type?.name);

  const shouldRenderPokemon = id && name && sprite && types;

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
