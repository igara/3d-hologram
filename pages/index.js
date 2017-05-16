import React, {Component} from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
if (typeof window !== "undefined") {
  injectTapEventPlugin();
}
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Head from "next/head";
import Sidebar from "../components/sidebar.js";
import Button from "../components/button.js";
import Image from "../components/image.js";
import Hanabi from "../components/hanabi.js";

export default class extends Component {
    /**
     * @param {any} props
     * @param {any} context
     */
    constructor(props, context) {
        super(props, context);
        this.onClickButton = this.onClickButton.bind(this);
    }

    /**
     * After render Event
     * @return {JSX.Element}
     * @see {Component}
     */
    componentDidMount() {
        this.setAdjustmentWindowSize();
        window.addEventListener("resize", this.setAdjustmentWindowSize);
    }

    /**
     * @return {JSX.Element}
     * @see {Component}
     */
    render() {
        return (
<MuiThemeProvider muiTheme={getMuiTheme({ userAgent: false })}>
    <div style={style.content} className="body_content">
        <Head>
            <title>3D Hologram</title>
            <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
            <link rel="icon" type="image/png" href="/android-chrome-36x36.png" sizes="36x36" />
            <link rel="icon" type="image/png" href="/android-chrome-48x48.png" sizes="48x48" />
            <link rel="icon" type="image/png" href="/android-chrome-72x72.png" sizes="72x72" />
            <link rel="icon" type="image/png" href="/android-chrome-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="/android-chrome-144x144.png" sizes="144x144" />
            <link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Sidebar ref="sidebar" />
        <div className="hologram" style={style.hologram}>
            <div style={style.image_top} className="image">
                <Hanabi hanabi_num="1" />
            </div>
            <div style={style.image_right} className="image">
                <Hanabi hanabi_num="2" />
            </div>
            <div style={style.image_bottom} className="image">
                <Hanabi hanabi_num="3" />
            </div>
            <div style={style.image_left} className="image">
                <Hanabi hanabi_num="4" />
            </div>
            <div style={style.button} onClick={this.onClickButton}>
                <Button />
            </div>
        </div>
    </div>
</MuiThemeProvider>
        );
    }

    /**
     * 幅調整を行う
     */
    setAdjustmentWindowSize() {
        const window_height = window.innerHeight;
        const window_width = window.innerWidth;
        const $body = document.querySelector("body");
        $body.style.margin = style.body.margin;
        $body.style.width = window_width;
        const $body_content = document.querySelector(".body_content");
        $body_content.style.height = window_height + "px";

        var square_size;
        if (window_height > window_width) {
            square_size = window_width / 3;
        } else {
            square_size = window_height / 3;
        }

        const $hologram = document.querySelector(".hologram");
        $hologram.style.height = square_size * 3 + "px";
        $hologram.style.width = square_size * 3 + "px";

        const $image = document.querySelectorAll(".image");
        Object.keys($image).forEach((index) => {
            $image[index].style.height = square_size + "px";
            $image[index].style.width = square_size + "px";
        });
    }

    onClickButton() {
        this.refs.sidebar.handleToggle();
    }
}

const style = {
    body: {
        margin: "0px 0px 0px 0px"
    },
    content: {
        background: "black",
        display: "table-cell",
	    verticalAlign: "middle",
    	textAlign: "center",
    },
    hologram: {
        position: "relative",
        background: "black",
    },
    button: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateY(-50%) translateX(-50%)",
    },
    iframe: {
        borderWidth: "0px",
    },
    image_top: {
        position: "absolute",
        left: "33%",
    },
    image_right: {
        position: "absolute",
        right: "0%",
        top: "33%",
        transform: "rotate(90deg)",
    },
    image_bottom: {
        position: "absolute",
        left: "33%",
        bottom: "0%",
        transform: "rotate(180deg)",
    },
    image_left: {
        position: "absolute",
        top: "33%",
        transform: "rotate(270deg)",
    }
};
