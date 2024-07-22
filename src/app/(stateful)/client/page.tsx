import { query } from "@/lib/data/apollo/server";

import { PokemonCard } from "@/components/stateful-client/PokemonCard.client";
import { PokemonList } from "@/components/stateful-client/PokemonList";
import { graphql } from "@/gql";

const ClientPokedexPageQueryDocument = graphql(`
  query StatefulPokedexPageQuery {
    pokemons(limit: 25, offset: 0) {
      results {
        ...PokemonItem
      }
    }
  }
`);

export default async function ClientPokedexPage() {
  const queryStatefulPokedexPage = {
    query: ClientPokedexPageQueryDocument,
  };

  const { data } = await query(queryStatefulPokedexPage);

  return (
    <main>
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto p-4">
        <PokemonCard />
        <PokemonList limit={25} offset={0} />
      </section>
    </main>
  );
}
