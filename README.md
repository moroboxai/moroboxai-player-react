# moroboxai-player-react

[![NPM version](https://img.shields.io/npm/v/moroboxai-player-react.svg)](https://www.npmjs.com/package/moroboxai-player-react)
![Node.js CI](https://github.com/moroboxai/moroboxai-player-react/workflows/Node.js%20CI/badge.svg)
[![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/moroboxai/moroboxai-player-react/blob/master/LICENSE)

MoroboxAI Player for [React](https://reactjs.org/).

## Installation

Using npm:

```bash
npm install moroboxai-player-react
```

## Usage

```javascript
import React from "react";
import ReactDOM from "react-dom";

import Player from "moroboxai-player-react";

function App() {
  return (
   <Player
     url="https://raw.githubusercontent.com/moroboxai/moroboxai-games/master/games/pixijs-template/"
     splashart="https://github.com/moroboxai/moroboxai-games/blob/master/games/pixijs-template/assets/splashart.png?raw=true"
     width="256px"
     height="256px"
   />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Playground

This package provides a minimal `React` app under the `playground` directory for playing with and testing the library.

You can run the playground locally on port 3000 with:

 ```bash
 git clone https://github.com/moroboxai/moroboxai-player-react.git
 cd moroboxai-player-react
 npm i
 cd playground
 npm i
 npm run dev
 ```

If you want to change something in the library, go to `moroboxai-player-react/src/...`, the library will be automatically re-built and the playground will use the latest build

## License

This content is released under the (http://opensource.org/licenses/MIT) MIT License.
