# Context in React

This repo contains a bare minimum react Project. Without using create-react-app

## 🚀 Demo

https://ayonious.github.io/react-context-example

## 🧐 Contents

1. Babel
2. Webpack
3. React
4. Typescript

Also contains small tools:

1. Prettier for formatting
2. .gitignore
3. renovate bot config

## 🏃 Running instruction

### Devmode

```bash
npm ci
npm run start
```

### Make Production build

```bash
npm ci
npm run build
```

Then open the docs/index.html file on your browser

### Verify changes

```bash
npm run typecheck
npm test -- --runInBand
npm run build
```

Use a current Node.js release supported by Webpack and Jest (Node.js 24 or newer).
The project uses React 19 and Material UI 9. Babel stays on the latest 7.x release
for compatibility with Jest's TypeScript transformation.
