import { PokedexClientProvider } from "@/components/stateful-client/PokedexClientProvider/PokedexClientProvider";
import { ApolloWrapper } from "@/lib/data/apollo/client/ApolloWrapper";

export default function StatefulClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PokedexClientProvider>
      <ApolloWrapper>
        <>{children}</>
      </ApolloWrapper>
    </PokedexClientProvider>
  );
}
