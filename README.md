# Mithril Vite Starter

[Vite](https://vitejs.dev/) starter template to scaffold a new [Mithril](https://mithril.js.org/) project.

This is an unopinionated template; aside from Mithril and Vite, the rest of your project's tools are entirely up to you.

## Installation

Pull the template files with [degit](https://github.com/Rich-Harris/degit) and install dependencies.

```
npx degit ArthurClemens/mithril-vite-starter my-project
cd my-project
npm install
```

## npm scripts

* `npm run dev` - Starts the development server at port 3000
* `npm run build` - Builds the application
* `npm run preview` - Serves the build files locally at port 5000

## Using JSX

Uncomment the `esbuild` configuration in `vite.config.js`.

Example `App.jsx`:

```jsx
import m from "mithril";
import "./App.css";

export const App = () => {
  // Local state ...
  return {
    view: () => {
      return (
        <>
         <h1>My Mithril App</h1>
        </>
      )
    },
  };
};
```

## See also

- [Mithril Vite Starter (TypeScript)](https://github.com/ArthurClemens/mithril-ts-vite-starter)
