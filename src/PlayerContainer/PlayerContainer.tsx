import React from "react";
import * as MoroboxAIPlayer from "moroboxai-player-web";

type PlayerContainerProps = {
    className?: string,
    url?: string,
    splashart?: string,
    width?: string,
    height?: string,
    _ref: React.RefObject<HTMLDivElement>
};

type PlayerContainerState = {};

class PlayerContainer extends React.Component<PlayerContainerProps, PlayerContainerState> {
    static propTypes: any;
    private _player: MoroboxAIPlayer.IMoroboxAIPlayer;

    constructor(props) {
        super(props);
        //this.state = {};
    }

    componentDidMount(): void {
        this._player = MoroboxAIPlayer.init(this.props._ref.current);
    }

    componentWillUnmount(): void {
        this._player.remove();
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
