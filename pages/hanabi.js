import React, {Component} from "react";
import Head from "next/head";
import Hanabi from "../components/hanabi.js";

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
    <div style={style.content} className="body_content">
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Hanabi />
    </div>
        );
    }
}

const style = {
    content: {
        background: "black",
        display: "table-cell",
	    verticalAlign: "middle",
    	textAlign: "center",
        width: "100%",
        height: "100%",
    }
};
