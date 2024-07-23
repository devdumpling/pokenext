import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

import { POKE_GRAPH_API_URL } from "../../constants";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: POKE_GRAPH_API_URL,
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // by default we're setting it to cache
      // individual queries can also opt into dynamic caching
      fetchOptions: { cache: "force-cache" },
    }),
  });
});
