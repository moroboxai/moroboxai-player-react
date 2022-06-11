# moroboxai-player-react

[![NPM version](https://img.shields.io/npm/v/moroboxai-player-react.svg)](https://www.npmjs.com/package/moroboxai-player-react)
![Node.js CI](https://github.com/moroboxai/moroboxai-player-react/workflows/Node.js%20CI/badge.svg)
[![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/moroboxai/moroboxai-player-react/blob/master/LICENSE)

Embeddable player for running [MoroboxAI](https://github.com/moroboxai) games in [React](https://reactjs.org/).

## Installation

Using npm:

```bash
npm install moroboxai-player-react --save
```

Or:

```bash
git clone https://github.com/moroboxai/moroboxai-player-react.git
cd moroboxai-player-react
npm i
npm run build
```

## Usage

Setup a simple React app with:

```bash
npx create-react-app my-app --template typescript
```

Add `moroboxai-player-react` as a dependency:

```bash
cd my-app
npm install moroboxai-player-react --save
```

Replace `src/App.tsx` with:

```javascript
import './App.css';
import Player from 'moroboxai-player-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Player
          url="https://raw.githubusercontent.com/moroboxai/moroboxai-games/master/games/pixijs-template/"
          splashart="https://github.com/moroboxai/moroboxai-games/blob/master/games/pixijs-template/assets/splashart.png?raw=true"
          width="256px"
          height="256px"/>
      </header>
    </div>
  );
}

export default App;
```

Build and start a local server to see the result:

```bash
npm run build
npm run start
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

## Props

| Name   |      Type      |  Default |  Description |
|:----------|:-------------|:------|:------|
| url | string || URL of the game |
| splashart | string || URL of the placeholder image displayed before the game is loaded |
| width | string || Width of the `div` element |
| height | string || Height of the `div` element |
| className | string || Class name for the `div` container |
| autoPlay | boolean | false | Auto play the game after the player is initialized |
| onReady | func | noop | **Signature: function() => void** <br/> Function called when the game is loaded and ready |

## License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
