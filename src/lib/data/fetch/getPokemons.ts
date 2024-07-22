import { REST_API_BASE_URL } from "@/lib/constants";

export async function getPokemons(limit: number, offset: number) {
  const url = `${REST_API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`;

  const response = await fetch(url, { cache: "force-cache" });
  const json = await response.json();
  return json;
}
