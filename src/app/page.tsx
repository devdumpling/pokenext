import { query } from "@/lib/data/apollo/server";
import { gql } from "@apollo/client";

export default async function Home() {
  const testQuery = {
    query: GET_POKEMONS,
    variables: gqlVariables,
  };

  const { data } = await query(testQuery);

  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

const gqlVariables = {
  limit: 2,
  offset: 1,
};
