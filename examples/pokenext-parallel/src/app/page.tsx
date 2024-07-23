import Link from "next/link";

export default function PokenextParallelLandingPage() {
  return (
    <main className="min-h-screen mx-auto flex container mt-4 p-4">
      <section className="text-lg">
        <h1 className="text-2xl mb-8">Parallel Routing Example</h1>
        <p className="mb-8">
          In this example we use{" "}
          <a href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#slots">
            parallel routes
          </a>{" "}
          to show two subpages.
          <br />
        </p>
        <p className="mb-4">
          Parallel routes allow us to do all sorts of fancy subnavigation, and
          in this case we can use them to "navigate" a PokeList (right column
          subpage) and display the PokeCard (left column subpage) all within the
          same page.
          <br />
          The main benefit here is that we can independently two different,
          dynamic pages. Compare this to the basic version, which simply fetches
          all of the data on one page, which has to render both the list and the
          card in RSC on every selection, despite only the card changing.
        </p>
        <Link className="text-amber-500 hover:underline" href="/parallel">
          🔗 See the example here, which routes you to{" "}
          <code className="text-red-500">/parallel</code>
        </Link>

        <ul className="mt-8">
          <li>
            <Link
              className="text-amber-500 text-sm hover:underline"
              href="https://github.com/devdumpling/pokenext"
            >
              👩‍💻 Sauce on GitHub
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
