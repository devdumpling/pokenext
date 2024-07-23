import { CodegenConfig } from "@graphql-codegen/cli";
import { POKE_GRAPH_API_URL } from "@pokenext/lib/constants";

const API_URL = POKE_GRAPH_API_URL;

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
