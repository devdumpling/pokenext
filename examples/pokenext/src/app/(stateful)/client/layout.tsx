import { PokedexClientProvider } from "@/components/stateful-client/PokedexClientProvider/PokedexClientProvider";
import { ApolloWrapper } from "@pokenext/lib/client";

export default function StatefulClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PokedexClientProvider>
      <ApolloWrapper>{children}</ApolloWrapper>
    </PokedexClientProvider>
  );
}
