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
    }

    /**
     * @return {JSX.Element}
     * @see {Component}
     */
    render() {
        return (
<MuiThemeProvider muiTheme={getMuiTheme({ userAgent: false })}>
    <div style={style.content}>
        <Head>
            <title>3D Hologram</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Header />
        <Button />
    </div>
</MuiThemeProvider>
        );
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
        textAlign: "center"
    }
};
