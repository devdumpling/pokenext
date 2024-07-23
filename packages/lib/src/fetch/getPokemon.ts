import { POKE_REST_API_BASE_URL } from "../constants";

// id can be the name of the pokemon id
export async function getPokemon(id: string | number) {
  const url = `${POKE_REST_API_BASE_URL}/pokemon/${id}`;

  const response = await fetch(url, { cache: "force-cache" });
  const json = await response.json();
  return json;
}
