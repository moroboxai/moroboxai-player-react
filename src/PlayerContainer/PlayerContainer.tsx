import React from "react";
import * as MoroboxAIPlayer from "moroboxai-player-web";

type PlayerContainerProps = {
    className?: string,
    url?: string, // URL for the game
    splashart?: string, // URL for the splashart
    width?: string, // div width (css)
    height?: string, // div height (css)
    autoPlay?: boolean, // auto play the game
    onReady?: () => void, // called when the game is ready
    _ref: React.RefObject<HTMLDivElement>
};

type PlayerContainerState = {};

class PlayerContainer extends React.Component<PlayerContainerProps, PlayerContainerState> {
    static propTypes: any;
    private _player?: MoroboxAIPlayer.IPlayer;

    constructor(props: any) {
        super(props);
        //this.state = {};
    }

    componentDidMount(): void {
        this._player = MoroboxAIPlayer.init({
            element: this.props._ref.current!,
            url: this.props.url,
            splashart: this.props.splashart,
            width: this.props.width,
            height: this.props.height,
            autoPlay: this.props.autoPlay,
            onReady: this.props.onReady
        }) as MoroboxAIPlayer.IPlayer;
        
        if (this.props.autoPlay) {
            this._player.play();
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
