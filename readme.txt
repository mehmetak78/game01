
- New Empty Project
- npm init
// - npm install --save-dev lite-server
-  npm install --save-dev webpack webpack-cli webpack-dev-server clean-webpack-plugin ts-loader
- copy
    webpack.config.js
    webpack.config.prod.js
-   "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "webpack-dev-server",
        "build": "webpack --config webpack.config.prod.js"
    },
- tsc --init
    - will generate a "tsconfig.json" file.
- /public/index.html
    <script src="dist/bundle.js" defer></script>
- src/app.ts
- ts.config
      "exclude": [
        "node_modules"
      ]
      -----
      "target": "ES6",
      - For debugging .ts files in the browser
        "sourceMap": true,
      - For setting input/output directory
        "outDir": "./dist",
        "rootDir": "./src",
      "removeComments": true,
      "noEmitOnError": true,
// - tsc -w  (or tsc -- watch)
- npm start

Debugging:
    - Choose Run | Edit Configurations from the main menu,
    - click the Add button on the toolbar
    - select JavaScript Debug from the list.
    - in ts.config
         "sourceMap": true,

- For Using 3rd Party Libraries with ts. f.e. lodash
      - npm install --save-dev @types/lodash

--------------------------------------------------------------------
