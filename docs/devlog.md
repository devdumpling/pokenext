# pokelog

Here be the devlog, where all of my thoughts go as I build alongside this shit.

Enjoy the ravings.

## 7.20.24

Okay, we've init a basic next app `pnpm create next@canary --empty` (thanks to the empty flag, we get a real nice basic next app with TS, tailwind, etc). A decent starting point.

The initial goal for this is going to be to build a basic pokedex. Seems fun enough.

First thing I want to do is get a basic data source. From peeking around it seems like there are two decent contenders for public pokemon graphql libraries:

- https://github.com/mazipan/graphql-pokeapi (https://graphql-pokeapi.vercel.app/)
- https://pokeapi.co/docs/graphql (https://beta.pokeapi.co/graphql/console/)

The second one rate limits us to 100 calls per hour, and appears to be a reskinning of their REST API. I'm going to try the first one first since the docs appear to be more complete.

They also have examples with Apollo, and that's what we'll be using, so that makes it a bit easier to hack around quickly.

First we need to get a basic RSC setup going.

### RSC AC setup

We'll pull from the [official Apollo nextjs lib](https://github.com/apollographql/apollo-client-nextjs).

Setup is pretty straightforward, but there's a lot of hidden complexity here. The goal will be to make all of fetching in RSCs.

First I setup a `lib/data/apollo` folder under `src` to house all of the more packagy pieces. If I were developing this at work, I'd throw it into our monorepo under `packages/utils` probably.

That's overkill for this project though.

I'm also going to preemptively create separate `server` and `client` folders to help separate the logic a bit.

Now we go ahead and init our `ApolloClient.ts` following their instructions. We'll also go ahead and add the necessary packages

`pnpm add @apollo/client@latest @apollo/experimental-nextjs-app-support`

We get some peer dep warnings bc we're using the canary next version, which is on React 19. Hopefully it works 🤷.

We'll go ahead and setup a `.env.example` and `.env` file with our `NEXT_PUBLIC_API_URL`.

Let's just briefly fire up the dev server and make sure we can read from there.

Quick check:

```tsx
import { API_URL } from "@/lib/constants";

export default function Home() {
  console.log(API_URL);

  return (
    <main>
      <div>Pika!</div>
    </main>
  );
}
```

logs:

```sh
https://graphql-pokeapi.graphcdn.app
 GET / 200 in 65ms
```

Now we pull it into our client and make sure we can query.

We need a testing query.

Here's a basic one that seems to work perfectly:

```tsx
// page.tsx

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
```

And that renders...

```json
{
  "pokemons": {
    "__typename": "PokemonList",
    "count": 1302,
    "next": "https://pokeapi.co/api/v2/pokemon/?offset=3&limit=2",
    "previous": "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1",
    "status": true,
    "message": "",
    "results": [
      {
        "__typename": "PokemonItem",
        "url": "https://pokeapi.co/api/v2/pokemon/2/",
        "name": "ivysaur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      },
      {
        "__typename": "PokemonItem",
        "url": "https://pokeapi.co/api/v2/pokemon/3/",
        "name": "venusaur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
      }
    ]
  }
}
```

Sick!
