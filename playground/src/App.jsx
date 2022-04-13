import React from 'react';

import Player from '../../lib/es';

function App() {
    function onReady() {
        console.log("Player ready");
    }

    return (
        <Player
            url="https://raw.githubusercontent.com/moroboxai/moroboxai-games/master/games/pixijs-template/"
            splashart="https://github.com/moroboxai/moroboxai-games/blob/master/games/pixijs-template/assets/splashart.png?raw=true"
            width="256px"
            height="256px"
            onReady={onReady}/>
    );
}

export default App;