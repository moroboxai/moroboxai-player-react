import React from "react";
import { GAME_SDK_VERSION, IPlayer } from "moroboxai-player-web";
import type { OnRunOptions } from "moroboxai-editor-sdk";
import Editor, {
    VERSION as EDITOR_REACT_VERSION
} from "moroboxai-editor-react";
import Player from "../src";

import "./App.css";

type AppProps = {};

type AppState = {
    player?: IPlayer;
    attachedPlayer: boolean;
    attachedEditor: boolean;
};

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            attachedPlayer: true,
            attachedEditor: true
        };

        this.handleMount = this.handleMount.bind(this);
        this.handleRun = this.handleRun.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleAttachPlayer = this.handleAttachPlayer.bind(this);
        this.handleAttachEditor = this.handleAttachEditor.bind(this);
        this.handleReady = this.handleReady.bind(this);
    }

    handleMount(player: IPlayer) {
        this.setState({ player });
    }

    handleRun(options: OnRunOptions) {
        if (this.state.player !== undefined) {
            this.state.player.getController(0)?.loadAgent({
                language: options.language,
                code: options.script
            });
        }
    }

    handleStop() {
        if (this.state.player !== undefined) {
            this.state.player.getController(0)?.unloadAgent();
        }
    }

    handleAttachPlayer() {
        this.setState({ attachedPlayer: !this.state.attachedPlayer });
    }

    handleAttachEditor() {
        this.setState({ attachedEditor: !this.state.attachedEditor });
    }

    handleReady() {
        console.log("ready");
    }

    render() {
        const { attachedPlayer, attachedEditor } = this.state;

        const player = attachedPlayer ? (
            <Player
                url="https://raw.githubusercontent.com/moroboxai/create-moroboxai-game/master/examples/canvas2d-rgb/header-js.yml"
                scale={1}
                resizable={true}
                autoPlay={true}
                onMount={this.handleMount}
                onReady={this.handleReady}
            />
        ) : (
            <></>
        );

        const editor = attachedEditor ? (
            <Editor
                url="https://raw.githubusercontent.com/moroboxai/create-moroboxai-game/master/examples/canvas2d-rgb/agent.js"
                width="500px"
                height="400px"
                onRun={this.handleRun}
                onStop={this.handleStop}
            />
        ) : (
            <></>
        );

        return (
            <>
                <div className="horizontal">
                    <div id="player">{player}</div>
                    <div id="editor">{editor}</div>
                </div>
                <div className="info horizontal">
                    <button onClick={this.handleAttachPlayer}>
                        {attachedPlayer ? "Detach Player" : "Attach Player"}
                    </button>
                    <button onClick={this.handleAttachEditor}>
                        {attachedEditor ? "Detach Editor" : "Attach Editor"}
                    </button>
                </div>
                <div className={"info"}>
                    <div>moroboxai-game-sdk v{GAME_SDK_VERSION}</div>
                    <div>moroboxai-editor-react v{EDITOR_REACT_VERSION}</div>
                </div>
            </>
        );
    }
}

export default App;
