import React from "react";
import PlayerContainer from '../PlayerContainer';
import {IPlayer} from "moroboxai-player-web";

type PlayerProps = {
    className?: string,
    url?: string,
    splashart?: string,
    width?: string,
    height?: string
    autoPlay?: boolean,
    onReady?: () => void,
    onMount?: (player: IPlayer) => void
};

type PlayerState = {};

class Player extends React.Component<PlayerProps, PlayerState> {
    static propTypes: any;
    private _refContainer: React.RefObject<HTMLDivElement>;

    constructor(props: any) {
        super(props);
        //this.state = {};

        this._refContainer = React.createRef<HTMLDivElement>();
    }

    render() {
        return <PlayerContainer
            _ref={this._refContainer}
            {...this.props}/>
    }
}

Player.propTypes = {};

export default Player;
