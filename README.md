# pokenext

`PokeNext` is a simple educational project aimed to highlight the advantages and challenges of data-fetching in a Next.js (app router) + GraphQL environment.

In order to do this, I've built three versions of the same app:

- `pokenext`
- `pokenext-restful`
- `pokenext-parallel`

Each is a nextjs@canary (so currently that's Next 15 canary) "Pokedex" app. The app fetches a list of pokemon as well as a "currently selected" pokemon (displaying some additional info about that currently selected pokemon).

Have fun exploring!

## Usage

The repo is setup as a basic pnpm monorepo, nothing too fancy.

> You'll need [`pnpm` > 9](https://pnpm.io/).

Setup is straightforward:

```sh
# clone
gh repo clone devdumpling/pokenext

# install deps
pnpm install
```

From there you can either `cd` into an example of your choice or run the dev server directly from root

```sh
# cd
cd examples/pokenext
pnpm dev

# or from root run one of these...
pnpm dev:basic
pnpm dev:parallel
pnpm dev:restful
```

## About

In Next.js apps, for most cases (you don't need real-time data) you can and should fetch data on the server. The benefits as laid out by the Next team are:

- You can fetch data in a single server-round trip, reducing the number of network requests and client-server waterfalls.
- Prevent sensitive information, such as access tokens and API keys, from being exposed to the client (which would require an intermediate API route).
- Reduce latency by fetching data close to the source (if your application code and database are in the same region).
- Data requests can be cached and revalidated.

If you're using `fetch` and hitting traditional REST endpoints, then you can take advantage of [`Request Memoization`](https://rc.nextjs.org/docs/app/building-your-application/caching#request-memoization).

> If you need to fetch the same data in multiple components in a tree, you do not have to fetch data globally and pass props down. Instead, you can fetch data in the components that need the data without worrying about the performance implications of making multiple requests for the same data.

This is really nice in a traditional app, and in our RESTful pokedex, we use this to liberally request exactly the data we need with tailored endpoints e.g.

```ts
// getPokemon
export async function getPokemon(id: string | number) {
  const url = `${POKE_REST_API_BASE_URL}/pokemon/${id}`;

  const response = await fetch(url, { cache: "force-cache" });
  const json = await response.json();
  return json;
}
```

Now we can use this util in any number of components on the same page, have access to the data we need, and the requests get memoized so that multiple aren't made in the render lifecycle when we render RSCs on the server.

The `cache: "force-cache"` bit adds an additional layer onto this, where not only will the request be memoized during the render lifecycle, but also _cached_ in the Next Data Cache _between requests_. This allows you to heavily limit how much actual data fetching you need to do for resources that do not change often, like in our PokeDex.

This ends up being joyful to work with, as it vastly simplifies how much data we need to pass around, unlike traditional React SPAs where you'd likely have a lot of context and prop drilling to get data to the components.

**But this falls apart in a GQL environment a bit...**

With traditional endpoints, we carve up our data requirements (typically) into a bunch of API routes each with some targeted data. In gql, it's the opposite, we instead have a single endpoint and then request _exactly the data we want_ from that endpoint.

On paper, this sounds like the ideal right? We can fetch exactly the data we want in RSCs anywhere in our app! That should make building with composition easy breezy.

However, if we're tailoring all of our queries to meet the exact requirements of our components, that means our queries are going to all (ideally) look unique. And if they're all unique queries, they aren't going to get memoized. And that means a lot of network requests. That feels counter to what Next is pushing in the default `fetch` + REST model.

There's a couple obvious ways we could get around this, each with their own drawbacks:

1. We could simply have a single massive query that gets us all our data and then reuse that in each component. It would get memoized and we've have all our data but this feels gross. Now all of our components are coupled together, and it's very difficult to see what each component actually needs. The contract between a component and its data gets muddled.
2. We could have many shared queries to sort of replicate the REST approach, but we'll still have the same problem as 1 to some degree, and now our queries aren't _purpose-built_ for their components.

Both options have the drawback of not fetching only the data their component needs... which is antithetical to gql best practices. Additionally they're quite rigid. Trying to navigate one huge query on a page is really cumbersome, and is impossible to optimize if you wanted to cache specific parts of that request in the Next layer.

What we ideally want is something that:

1. Allows our components to define their own data fetching requirements
2. Minimizes network calls
3. Allows for the Suspenseful granularity that the default `fetch` + REST model gives us (where different parts of the page can fetch, render, and hydrate indepedently)
4. Remain flexible

### Fragment Co-location

The answer is... fragments! We'll take a page out of [Thinking in Relay](https://relay.dev/docs/principles-and-architecture/thinking-in-relay/).

We allow components to specify the data they require (meets 1) and coalesce them into a(n) parent query(ies) (meets 2). If we need to break the page into parts that suspend independently, we can easily move the parent query up or down, increasing or decreasing the number of network calls but also allowing for granularity (meets 3 and 4).

Let's look at an example:

### `PokemonList.tsx`

We want a component that fetches its own data and can load independently of other parts of the page, so we create a parent component.

```tsx
export type PokemonListProps = {
  limit?: number;
  offset?: number;
};

export const PokemonList = async ({ limit, offset }: PokemonListProps) => { ... }
```

We define its "Contract" with limit and offset. In other words, our page (or parent component) should provide these props as the minimal input. Everything else the component is responsible for.

We create a parent query (that in our examples uses codegen to get strong typings based on our graph) to fetch only the data our parent list needs.

```ts
const PokemonListQueryDocument = graphql(`
  query BasePokemonListQuery($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      next
      previous
      results {
        id
        name
      }
    }
  }
`);
```

At this point, we could simply map the `results` into a list and call it a day. But that's not usually how development goes. What if we want our `PokemonListItem` to show some additional info, like `artwork` of the pokemon? That feels like its veering into a separate component. We could simply add `artwork` to our results, but then we'd be hard coupling the `PokemonListItem` to the `PokemonList`. This might be fine at first, but could grow cumbersome with future updates.

Instead, we can build our component with fragments!

```tsx
// PokemonListItem.tsx

export const PokemonListItemFragment = graphql(
  /* GraphQL */
  `
    fragment BasePokemonListItem_pokemonItem on PokemonItem {
      id
      name
      artwork
    }
  `
);

export const PokemonListItem = (props: {
  pokemon: FragmentType<typeof PokemonListItemFragment>;
}) => { ... }
```

Then we simply spread our fragment on the parent query...

```tsx
// PokemonList.tsx
const PokemonListQueryDocument = graphql(`
  query BasePokemonListQuery($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        ...BasePokemonListItem_pokemonItem
      }
    }
  }
`);
```

> Notice that we've moved `name` into the fragment, since our parent component doesn't actually need it.

Now we've explicitly defined the data requirements of this component. Better, we could move this component to _any_ parent component that queries against the `pokemons` resolver. We could also turn it from a fragment into a query itself with very little change.

This pattern, while simple on paper, enables a lot of flexibility and underscores the composability of our components, effectively turning them into little data-component building blocks.

For more info, check out the `examples/pokenext` or `examples/pokenext-parallel`. 
