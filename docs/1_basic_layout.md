# A basic layout for the landing

Okay so picking up where we left off in the end of 0, we're going to throw up the pokemon page.

As a basic first variant, let's just show 10 or so pokemon on the right and then the pokemon itself on the left.

We'll init a `components` folder and add it to our tailwind config.

```ts
// tailwind.config.ts

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [],
};
```

Within components, I want to create a few layouty components. 

First up is a header. 

> weirdly when trying to setup fonts, they do not request properly when running with --turbo so i had to remove that...
> probably a bug that'll get patched soon

```tsx
// Header.tsx

export const Header = () => {
  return (
    <header className="py-4 text-center bg-red-500 border-b-8 border-slate-800 font-pixel">
      <h1 className="text-4xl  text-slate-50">poke-next</h1>
    </header>
  );
};
```

Pretty basic. Let's move on to the two columns. 

