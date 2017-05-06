import React, {Component} from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
if (typeof window !== "undefined") {
  injectTapEventPlugin();
}
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Head from "next/head";
import Header from "../components/header.js";
import Button from "../components/button.js";

export default class extends Component {
    /**
     * @param {any} props
     * @param {any} context
     */
    constructor(props, context) {
        super(props, context);
        
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
        </Head>
        <Header />
        <div style={style.button}>
            <Button />
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
        const $body_content = document.querySelector(".body_content");
        $body_content.style.height = window_height + "px";
    }
}

const style = {
    box: {
        width: "100px",
        height: "100px",
        background: "#000",
        transition: "all 300ms 0s ease"
    },
    box_hover: {
        background: "#ccc",
        width: "300px",
    },
    content: {
        position: "relative",
    },
    button: {
        position: "absolute",
        top: "50%",
        left: "50%",
    }
};
