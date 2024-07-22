import { CodegenConfig } from "@graphql-codegen/cli";

const API_URL = "https://graphql-pokeapi.graphcdn.app";

const config: CodegenConfig = {
  schema: API_URL,
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;
