import React from "react";
import Player from "../src";

import "./App.css";

const DEFAULT_URL =
    "https://raw.githubusercontent.com/moroboxai/moroboxai-games/master/piximoroxel8ai-sample/sample/header.yml";
const DEFAULT_SIZE = 2;
const DEFAULT_SPEED = 1;
const DEFAULT_AUTO_PLAY = false;

type AppProps = {};

type AppState = {
    url: string;
    size: number;
    speed: number;
    autoPlay: boolean;
};

class App extends React.Component<AppProps, AppState> {
    static propTypes: any;

    constructor(props: any) {
        super(props);

        this.state = {
            url: DEFAULT_URL,
            size: DEFAULT_SIZE,
            speed: DEFAULT_SPEED,
            autoPlay: DEFAULT_AUTO_PLAY
        };

        this.handleUrlChanged = this.handleUrlChanged.bind(this);
        this.setSize = this.setSize.bind(this);
        this.setSpeed = this.setSpeed.bind(this);
        this.handleAutoPlayChanged = this.handleAutoPlayChanged.bind(this);
        this.handleReady = this.handleReady.bind(this);
    }

    handleUrlChanged(evt: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ url: evt.target.value });
    }

    setSize(size: number) {
        this.setState({ size });
    }

    setSpeed(speed: number) {
        this.setState({ speed });
    }

    handleAutoPlayChanged(evt: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ autoPlay: evt.target.checked });
    }

    handleReady() {
        console.log("ready");
    }

    render() {
        const { url, size, speed, autoPlay } = this.state;

        return (
            <>
                <Player
                    url={url}
                    splashart="https://raw.githubusercontent.com/moroboxai/moroboxai-games/master/piximoroxel8ai-sample/sample/splashart.png"
                    width={256 * size}
                    height={256 * size}
                    speed={speed}
                    autoPlay={autoPlay}
                    onReady={this.handleReady}
                />
                <div className="line">
                    <label htmlFor="url">URL:</label>
                    <input
                        name="url"
                        type="text"
                        value={url}
                        onChange={this.handleUrlChanged}
                    />
                </div>
                <div className="line">
                    <label htmlFor="size">Size:</label>
                    <input
                        type="button"
                        name="size"
                        value="x1"
                        onClick={() => this.setSize(1)}
                    />
                    <input
                        type="button"
                        value="x2"
                        onClick={() => this.setSize(2)}
                    />
                    <input
                        type="button"
                        value="x3"
                        onClick={() => this.setSize(3)}
                    />
                </div>
                <div className="line">
                    <label htmlFor="speed">Speed:</label>
                    <input
                        type="button"
                        name="speed"
                        value="x1"
                        onClick={() => this.setSpeed(1)}
                    />
                    <input
                        type="button"
                        value="x2"
                        onClick={() => this.setSpeed(2)}
                    />
                    <input
                        type="button"
                        value="x3"
                        onClick={() => this.setSpeed(3)}
                    />
                </div>
                <div className="line">
                    <label htmlFor="autoplay">Auto Play:</label>
                    <input
                        type="checkbox"
                        name="autoplay"
                        value="false"
                        onChange={this.handleAutoPlayChanged}
                    />
                </div>
            </>
        );
    }
}

App.propTypes = {};

export default App;
