# moroboxai-player-react

[![NPM version](https://img.shields.io/npm/v/moroboxai-player-react.svg)](https://www.npmjs.com/package/moroboxai-player-react)
![Node.js CI](https://github.com/moroboxai/moroboxai-player-react/workflows/Node.js%20CI/badge.svg)
[![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/moroboxai/moroboxai-player-react/blob/master/LICENSE)
[![Code Quality: Javascript](https://img.shields.io/lgtm/grade/javascript/g/moroboxai/moroboxai-player-sdk.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/moroboxai/moroboxai-player-react/context:javascript)
[![Total Alerts](https://img.shields.io/lgtm/alerts/g/moroboxai/moroboxai-player-sdk.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/moroboxai/moroboxai-player-react/alerts)

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
          url="https://raw.githubusercontent.com/moroboxai/moroboxai-games/master/games/pong/"
          splashart="https://raw.githubusercontent.com/moroboxai/moroboxai-games/master/games/pong/assets/splashart.png"
          width={256}
          height={256}/>
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
| width | number || Width of the `div` element |
| height | number || Height of the `div` element |
| resizable | boolean | true | If the game can resize the player |
| className | string || Class name for the `div` container |
| autoPlay | boolean | false | Auto play the game after the player is initialized |
| speed | number | 1 | Speed of the game |
| onReady | func | noop | **Signature: function() => void** <br/> Function called when the game is loaded and ready |
| onMount | func | noop | **Signature: function(player: IPlayer) => void** <br/> Function called when the component is mounted |

## License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
