import { query } from "@/lib/data/apollo/server";
import { gql } from "@apollo/client";

export default async function Home() {
  const testQuery = {
    query: QueryHomepage,
    variables: gqlVariables,
  };

  const { data } = await query(testQuery);

  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

/**
 * We start wide with a single query and will build fragments
 */
const QueryHomepage = gql`
  query homepageQuery($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        url
        name
        image
      }
    }
  }
`;

const gqlVariables = {
  limit: 10,
  offset: 0,
};
