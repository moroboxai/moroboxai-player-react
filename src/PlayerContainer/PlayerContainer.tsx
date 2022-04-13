import React from "react";
import * as MoroboxAIPlayer from "moroboxai-player-web";

type PlayerContainerProps = {
    className?: string,
    url?: string, // URL for the game
    splashart?: string, // URL for the splashart
    width?: string, // div width (css)
    height?: string, // div height (css)
    init?: boolean, // initialize the player or not
    autoPlay?: boolean, // auto play the game
    onReady?: () => void, // called when the game is ready
    _ref: React.RefObject<HTMLDivElement>
};

type PlayerContainerState = {};

class PlayerContainer extends React.Component<PlayerContainerProps, PlayerContainerState> {
    static propTypes: any;
    private _player?: MoroboxAIPlayer.IMoroboxAIPlayer;

    constructor(props) {
        super(props);
        //this.state = {};
    }

    componentDidMount(): void {
        if (this.props.init === undefined || this.props.init) {
            this._player = MoroboxAIPlayer.init(this.props._ref.current);
            this._player.onReady = this.props.onReady;
            if (this.props.autoPlay) {
                this._player.play();
            }
        }
    }

    componentWillUnmount(): void {
        if (this._player !== undefined) {
            this._player.remove();
            this._player = undefined;
        }
    }

    render() {
        const _props: {
            "data-url"?: string,
            style: React.CSSProperties
        } = {
            style: {
                backgroundSize: "cover",
                width: this.props.width,
                height: this.props.height
            }
        }

        if (this.props.url !== undefined) {
            _props["data-url"] = this.props.url;
        }

        if (this.props.splashart !== undefined) {
            _props.style.backgroundImage = `url('${this.props.splashart}')`;
        }

        return (
          <div
            className={"mai-player " + (this.props.className || "")}
            ref={this.props._ref}
            {..._props}/>
        );
    }
}

PlayerContainer.propTypes = {};

export default PlayerContainer;
