export const PokemonListSkeleton = () => {
  return (
    <div className="m-4">
      <ul>
        <li className="relative pl-2 items-center animate-pulse">
          <span className="bg-gray-300 dark:bg-gray-700 opacity-50 absolute right-0 top-0 text-md h-4 w-8 rounded"></span>
          <span className="bg-gray-300 dark:bg-gray-700 block h-6 w-32 rounded my-2"></span>
        </li>
        <li className="relative pl-2 items-center animate-pulse">
          <span className="bg-gray-300 dark:bg-gray-700 opacity-50 absolute right-0 top-0 text-md h-4 w-8 rounded"></span>
          <span className="bg-gray-300 dark:bg-gray-700 block h-6 w-32 rounded my-2"></span>
        </li>
        <li className="relative pl-2 items-center animate-pulse">
          <span className="bg-gray-300 dark:bg-gray-700 opacity-50 absolute right-0 top-0 text-md h-4 w-8 rounded"></span>
          <span className="bg-gray-300 dark:bg-gray-700 block h-6 w-32 rounded my-2"></span>
        </li>
        <li className="relative pl-2 items-center animate-pulse">
          <span className="bg-gray-300 dark:bg-gray-700 opacity-50 absolute right-0 top-0 text-md h-4 w-8 rounded"></span>
          <span className="bg-gray-300 dark:bg-gray-700 block h-6 w-32 rounded my-2"></span>
        </li>
        <li className="relative pl-2 items-center animate-pulse">
          <span className="bg-gray-300 dark:bg-gray-700 opacity-50 absolute right-0 top-0 text-md h-4 w-8 rounded"></span>
          <span className="bg-gray-300 dark:bg-gray-700 block h-6 w-32 rounded my-2"></span>
        </li>
      </ul>
    </div>
  );
};
