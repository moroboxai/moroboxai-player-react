import React from "react";
import PlayerContainer from '../PlayerContainer';

type PlayerProps = {
    className?: string,
    url?: string,
    splashart?: string,
    width?: string,
    init?: boolean,
    autoPlay?: boolean,
    onReady?: () => void,
    height?: string
};

type PlayerState = {};

class Player extends React.Component<PlayerProps, PlayerState> {
    static propTypes: any;
    private _refContainer: React.RefObject<HTMLDivElement>;

    constructor(props) {
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
