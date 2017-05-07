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
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <style>{`
        body {
          color: red
        }
      `}</style>
        </Head>
        <Sidebar ref="sidebar" />
        <div className="hologram" style={style.hologram}>
            <div style={style.image_top} className="image">
                <Image />
            </div>
            <div style={style.image_right} className="image">
                <Image />
            </div>
            <div style={style.image_bottom} className="image">
                <Image />
            </div>
            <div style={style.image_left} className="image">
                <Image />
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
        $body.style.margin = "0px 0px 0px 0px";
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
    content: {
        background: "black",
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
    image_top: {
        position: "absolute",
        left: "33%",
    },
    image_right: {
        position: "absolute",
        right: "0%",
        top: "33%",
    },
    image_bottom: {
        position: "absolute",
        left: "33%",
        bottom: "0%",
    },
    image_left: {
        position: "absolute",
        top: "33%",
    }
};
