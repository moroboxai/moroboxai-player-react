import React from "react";
import PlayerContainer from "../PlayerContainer";
import { IPlayer } from "moroboxai-player-web";
import { GameHeader } from "moroboxai-game-sdk";

type PlayerProps = {
    className?: string;
    url?: string;
    header?: GameHeader;
    splashart?: string;
    width?: number;
    height?: number;
    scale?: number;
    resizable?: boolean;
    autoPlay?: boolean;
    speed?: number;
    onReady?: () => void;
    onMount?: (player: IPlayer) => void;
};

type PlayerState = {};

class Player extends React.Component<PlayerProps, PlayerState> {
    private _refContainer: React.RefObject<HTMLDivElement>;

    constructor(props: PlayerProps | Readonly<PlayerProps>) {
        super(props);
        //this.state = {};

        this._refContainer = React.createRef<HTMLDivElement>();
    }

    render() {
        return <PlayerContainer _ref={this._refContainer} {...this.props} />;
    }
}

export default Player;
