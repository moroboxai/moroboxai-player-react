import React from "react";
import * as MoroboxAIPlayerSDK from "moroboxai-player-sdk";
import * as MoroboxAIPlayer from "moroboxai-player-web";

type PlayerContainerProps = MoroboxAIPlayerSDK.PlayerOptions & {
    className?: string;
    onMount?: (player: MoroboxAIPlayerSDK.IPlayer) => void; // called when the component did mount
    onUnmount?: (player: MoroboxAIPlayerSDK.IPlayer) => void; // called when the component did unmount
    _ref: React.RefObject<HTMLDivElement>;
};

type PlayerContainerState = {};

class PlayerContainer extends React.Component<
    PlayerContainerProps,
    PlayerContainerState
> {
    private _player?: MoroboxAIPlayerSDK.IPlayer;

    componentDidMount(): void {
        if (this._player !== undefined) return;

        this._player = MoroboxAIPlayer.init({
            element: this.props._ref.current!,
            url: this.props.url,
            boot: this.props.boot,
            splashart: this.props.splashart,
            width: this.props.width,
            height: this.props.height,
            scale: this.props.scale,
            resizable: this.props.resizable,
            autoPlay: this.props.autoPlay,
            speed: this.props.speed,
            onReady: this.props.onReady
        }) as MoroboxAIPlayerSDK.IPlayer;

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
            this.props.scale !== undefined &&
            this.props.scale != prevProps.scale
        ) {
            this._player.scale = this.props.scale;
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
            this.props.boot !== undefined &&
            this.props.boot != prevProps.boot
        ) {
            this._player.boot = this.props.boot;
        }

        if (
            this.props.autoPlay !== undefined &&
            this.props.autoPlay != prevProps.autoPlay
        ) {
            this._player.autoPlay = this.props.autoPlay;
        }

        if (this.props.url !== undefined && this.props.url != prevProps.url) {
            this._player.play({
                url: this.props.url
            });
        }
    }

    componentWillUnmount(): void {
        if (this._player !== undefined) {
            console.log("unmount player from", this);
            const player = this._player;
            this._player.remove();
            this._player = undefined;

            if (this.props.onUnmount !== undefined) {
                this.props.onUnmount(player);
            }
        }
    }

    getModel(): MoroboxAIPlayerSDK.IPlayer | undefined {
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
                className={this.props.className ?? ""}
                ref={this.props._ref}
                {..._props}
            />
        );
    }
}

export default PlayerContainer;
