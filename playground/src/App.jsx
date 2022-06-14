import React from 'react';

import Player from '../../lib/es';

function App() {
    function onReady() {
        console.log("Player ready");
    }

    return (
        <Player
            url="https://raw.githubusercontent.com/moroboxai/moroboxai-games/master/games/pong"
            splashart="https://raw.githubusercontent.com/moroboxai/moroboxai-games/master/games/pong/assets/splashart.png"
            width={256}
            height={256}
            onReady={onReady}/>
    );
}

export default App;