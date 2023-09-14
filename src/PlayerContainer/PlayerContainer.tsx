import React from "react";
import * as MoroboxAIPlayer from "moroboxai-player-web";
import { GameHeader } from "moroboxai-game-sdk";

type PlayerContainerProps = {
    className?: string;
    url?: string; // URL for the game
    header?: GameHeader; // header of the game
    splashart?: string; // URL for the splashart
    width?: number; // div width (css)
    height?: number; // div height (css)
    resizable?: boolean; // if the game can resize the player
    autoPlay?: boolean; // auto play the game
    speed?: number; // desired game speed
    onReady?: () => void; // called when the game is ready
    onMount?: (player: MoroboxAIPlayer.IPlayer) => void; // called when the component did mount
    _ref: React.RefObject<HTMLDivElement>;
};

type PlayerContainerState = {};

class PlayerContainer extends React.Component<
    PlayerContainerProps,
    PlayerContainerState
> {
    static propTypes: any;
    private _player?: MoroboxAIPlayer.IPlayer;

    componentDidMount(): void {
        this._player = MoroboxAIPlayer.init({
            element: this.props._ref.current!,
            url: this.props.url,
            header: this.props.header,
            splashart: this.props.splashart,
            width: this.props.width,
            height: this.props.height,
            resizable: this.props.resizable,
            autoPlay: this.props.autoPlay,
            speed: this.props.speed,
            onReady: this.props.onReady
        }) as MoroboxAIPlayer.IPlayer;

        if (this.props.autoPlay) {
            this._player.play();
        }

        if (this.props.onMount !== undefined) {
            this.props.onMount(this._player);
        }
    }

    componentDidUpdate(prevProps: Readonly<PlayerContainerProps>): void {
        if (this._player === undefined) {
            return;
        }

        if (
            this.props.width !== undefined &&
            this.props.width != prevProps.width
        ) {
            this._player.resize({
                width: this.props.width,
                height: this._player.height
            });
        }

        if (
            this.props.height !== undefined &&
            this.props.height != prevProps.height
        ) {
            this._player.resize({
                width: this._player.width,
                height: this.props.height
            });
        }

        if (
            this.props.speed !== undefined &&
            this.props.speed != prevProps.speed
        ) {
            this._player.speed = this.props.speed;
        }

        if (
            this.props.resizable !== undefined &&
            this.props.resizable != prevProps.resizable
        ) {
            this._player.resizable = this.props.resizable;
        }

        if (
            this.props.autoPlay !== undefined &&
            this.props.autoPlay != prevProps.autoPlay
        ) {
            this._player.autoPlay = this.props.autoPlay;
        }

        if (
            (this.props.url !== undefined && this.props.url != prevProps.url) ||
            (this.props.header !== undefined &&
                this.props.header != prevProps.header)
        ) {
            this._player.play({
                url: this.props.url,
                header: this.props.header
            });
        }
    }

    componentWillUnmount(): void {
        if (this._player !== undefined) {
            this._player.remove();
            this._player = undefined;
        }
    }

    getModel(): MoroboxAIPlayer.IPlayer | undefined {
        return this._player;
    }

    render() {
        const _props: {
            "data-url"?: string;
            style: React.CSSProperties;
        } = {
            style: {
                backgroundSize: "cover"
            }
        };

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
                {..._props}
            />
        );
    }
}

PlayerContainer.propTypes = {};

export default PlayerContainer;
