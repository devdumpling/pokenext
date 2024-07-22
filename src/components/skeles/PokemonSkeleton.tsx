export const PokemonSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-2 border-t-4 border-slate-300 dark:border-slate-700 rounded animate-pulse pt-2">
      <div className="animate-pulse">
        <div className="animate-pulse bg-slate-300 dark:bg-slate-700 h-10 w-48 mb-2 rounded"></div>
        <div className="animate pulse flex items-center gap-2">
          <div className="animate-pulse px-2 py-1 bg-slate-300 dark:bg-slate-700 rounded-full h-6 w-12"></div>
          <div className="animate-pulse px-2 py-1 bg-slate-300 dark:bg-slate-700 rounded-full h-6 w-12"></div>
          <div className="animate-pulse px-2 py-1 bg-slate-300 dark:bg-slate-700 rounded-full h-6 w-12"></div>
        </div>
      </div>
      <div className="animate-pulse bg-slate-300 dark:bg-slate-700 rounded-full h-64 w-64"></div>
    </div>
  );
};
