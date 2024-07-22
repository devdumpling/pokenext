const GH_URL = "https://github.com/devdumpling/pokenext";

export const Footer = () => {
  return (
    <footer className="dark:bg-stone-900 bg-stone-100">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="md:flex md:justify-between">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <a
                href={GH_URL}
                className="text-amber-500 hover:text-amber-400 font-pixel"
              >
                made with ❤️ by @devdumpling
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
