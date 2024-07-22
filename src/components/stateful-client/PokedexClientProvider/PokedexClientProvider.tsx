"use client";

import { createContext, useState } from "react";

export interface PokedexContextValue {
  selectedPokemon: string;
  setSelectedPokemon: (pokemon: string) => void;
}

export const PokedexContext = createContext<PokedexContextValue>({
  selectedPokemon: "bulbsaur",
  setSelectedPokemon: (pokemon: string | null) => {},
});

export const PokedexClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedPokemon, setSelectedPokemon] = useState<string>("bulbasaur");

  const value = { selectedPokemon, setSelectedPokemon };

  return (
    <PokedexContext.Provider value={value}>{children}</PokedexContext.Provider>
  );
};
