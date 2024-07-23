/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query BasePokemonQuery($name: String!) {\n    pokemon(name: $name) {\n      id\n      name\n      sprites {\n        front_default\n      }\n      types {\n        type {\n          name\n        }\n      }\n    }\n  }\n": types.BasePokemonQueryDocument,
    "\n  query BasePokemonListQuery($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      status\n      message\n      results {\n        id\n        ...BasePokemonListItem_pokemonItem\n      }\n    }\n  }\n": types.BasePokemonListQueryDocument,
    "\n    fragment BasePokemonListItem_pokemonItem on PokemonItem {\n      id\n      name\n    }\n  ": types.BasePokemonListItem_PokemonItemFragmentDoc,
    "\n  query PokemonListQuery($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      status\n      message\n      results {\n        id\n        ...PokemonItem\n      }\n    }\n  }\n": types.PokemonListQueryDocument,
    "\n    fragment PokemonItem on PokemonItem {\n      id\n      name\n    }\n  ": types.PokemonItemFragmentDoc,
    "\n  query PokemonQuery($name: String!) {\n    pokemon(name: $name) {\n      id\n      name\n      sprites {\n        front_default\n      }\n      types {\n        type {\n          name\n        }\n      }\n    }\n  }\n": types.PokemonQueryDocument,
    "\n  query ClientPokemonListQuery($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      status\n      message\n      results {\n        id\n        ...ClientPokemonItem\n      }\n    }\n  }\n": types.ClientPokemonListQueryDocument,
    "\n    fragment ClientPokemonItem on PokemonItem {\n      id\n      name\n    }\n  ": types.ClientPokemonItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BasePokemonQuery($name: String!) {\n    pokemon(name: $name) {\n      id\n      name\n      sprites {\n        front_default\n      }\n      types {\n        type {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query BasePokemonQuery($name: String!) {\n    pokemon(name: $name) {\n      id\n      name\n      sprites {\n        front_default\n      }\n      types {\n        type {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BasePokemonListQuery($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      status\n      message\n      results {\n        id\n        ...BasePokemonListItem_pokemonItem\n      }\n    }\n  }\n"): (typeof documents)["\n  query BasePokemonListQuery($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      status\n      message\n      results {\n        id\n        ...BasePokemonListItem_pokemonItem\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment BasePokemonListItem_pokemonItem on PokemonItem {\n      id\n      name\n    }\n  "): (typeof documents)["\n    fragment BasePokemonListItem_pokemonItem on PokemonItem {\n      id\n      name\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PokemonListQuery($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      status\n      message\n      results {\n        id\n        ...PokemonItem\n      }\n    }\n  }\n"): (typeof documents)["\n  query PokemonListQuery($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      status\n      message\n      results {\n        id\n        ...PokemonItem\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment PokemonItem on PokemonItem {\n      id\n      name\n    }\n  "): (typeof documents)["\n    fragment PokemonItem on PokemonItem {\n      id\n      name\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PokemonQuery($name: String!) {\n    pokemon(name: $name) {\n      id\n      name\n      sprites {\n        front_default\n      }\n      types {\n        type {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query PokemonQuery($name: String!) {\n    pokemon(name: $name) {\n      id\n      name\n      sprites {\n        front_default\n      }\n      types {\n        type {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ClientPokemonListQuery($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      status\n      message\n      results {\n        id\n        ...ClientPokemonItem\n      }\n    }\n  }\n"): (typeof documents)["\n  query ClientPokemonListQuery($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      status\n      message\n      results {\n        id\n        ...ClientPokemonItem\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment ClientPokemonItem on PokemonItem {\n      id\n      name\n    }\n  "): (typeof documents)["\n    fragment ClientPokemonItem on PokemonItem {\n      id\n      name\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;