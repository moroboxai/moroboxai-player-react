import React from "react";
import PlayerContainer from "../PlayerContainer";
import * as MoroboxAIPlayerSDK from "moroboxai-player-sdk";

type PlayerProps = MoroboxAIPlayerSDK.PlayerOptions & {
    className?: string;
    onMount?: (player: MoroboxAIPlayerSDK.IPlayer) => void;
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
