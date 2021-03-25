# Setup Manual `React` dengan `Webpack` dan `Babel`

Prerequisite:

- Node JS dan NPM
- React dan React DOM
- Webpack
- Babel

&nbsp;

## Steps:

---

### 1. Init Project

Buat folder lalu jalankan command

`$ npm init -y`

&nbsp;

### 2. Install React dan React DOM

Untuk install React dan React DOM jalankan command berikut

`$ npm install react react-dom`

&nbsp;

### 3. Install Webpack

Ada beberpa package yang harus di install untuk menggunakan webpack, untuk meng-install nya jalankan command berikut:

`$ npm install webpack webpack-cli webpack-dev-server --save-dev`

install juga plugin untuk load html dengan menjalankan command berikut:

`$ npm install html-webpack-plugin --save-dev`

&nbsp;

### 4. Install Babel

Kita juga perlu install babel sebagai compailer. Install dengan menjalankan command berikut:

`$ npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev`

&nbsp;

### 5. Konfigurasi folder dan Membuat File

Buat folder `src` lalu didalamnya buat file `index.html`, `main.js` dan `App.js`. Ini kita gunakan sebagai entry point untuk setup `webpack`.

Buat file `webpack.config.js` untuk konfigurasi webpack.

Buat file `.babelrc` untuk konfigurasi babel.

Jalankan comman berikut untuk membuat file tersebut:

`$ mkdir src && touch src/index.html src/main.js src/App.js webpack.config.js .babelrc`

&nbsp;

### 6. Konfigurasi `webpack`, `babel` dan `package.json`

- Edit file `webpack.config.js`

  ```javascript
  const path = require("path");
  const HtmlWebpackPlugin = require("html-webpack-plugin");

  module.exports = {
    entry: "./src/main.js",
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
      }),
    ],
  };
  ```

  &nbsp;

- Edit file `.babelrc`

  ```json
  {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
  }
  ```

- Edit `package.json`
  Tambahkan kode berikut:

  ```json
  "start": "webpack serve"
  ```

  dibagian `scripts`

  &nbsp;

### 7. Template Webpack HTML untuk `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hallo React</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### 8. `App.js` dan `main.js`

- `App.js`

  ```javascript
  // src/App.js
  import React, { Component } from "react";

  export default class App extends Component {
    render() {
      return (
        <div>
          <h1>Hello World</h1>
        </div>
      );
    }
  }
  ```

- `main.js`
  ```javascript
  // src/main.js
  import React from "react";
  import ReactDOM from "react-dom";
  import App from "./App";
  ReactDOM.render(<App />, document.getElementById("root"));
  ```

&nbsp;

### 9. Running Server

Untuk menjalankan server,jalankan command berikut:

`$ npm run start`

---

**Finish**
