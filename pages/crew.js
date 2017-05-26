import React, {Component} from "react";
import Head from "next/head";

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
    <div style={style.content} className="body_content">
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <img src="/crew.gif" className="img" />
    </div>
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

        var img_size;
        if (window_height > window_width) {
            img_size = window_width;
        } else {
            img_size = window_height;
        }
        const $mmd_img = document.querySelector(".img");
        $mmd_img.style.width = img_size + "px";
        $mmd_img.style.height = img_size + "px";
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
        width: "100%",
        height: "100%",
    }
};
