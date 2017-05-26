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
        const window_width = window.innerWidth;
        const window_height = window.innerHeight;
        const $body = document.querySelector("body");
        $body.style.margin = "0px 0px 0px 0px";
        $body.style.background = "black";
        const $body_content = document.querySelector(".body_content");
        $body_content.style.width = window_width + "px";
        $body_content.style.height = window_height + "px";
        
        const $image_top_area = document.querySelector(".image_top_area");
        const $image_left_area = document.querySelector(".image_left_area");
        const $image_right_area = document.querySelector(".image_right_area");
        const $image_bottom_area = document.querySelector(".image_bottom_area");
        const image_height = window_width / 4;

        $image_top_area.style.width = window_width + "px";
        $image_top_area.style.height = image_height + "px";
        $image_left_area.style.width = window_width + "px";
        $image_left_area.style.height = image_height + "px";
        $image_right_area.style.width = window_width + "px";
        $image_right_area.style.height = image_height + "px";
        $image_bottom_area.style.width = window_width + "px";
        $image_bottom_area.style.height = image_height + "px";
        const gif_image = document.createElement("img");
        gif_image.src = "/kujira.gif";

        const top = gif_image.cloneNode(true);
        const right = gif_image.cloneNode(true);
        const bottom = gif_image.cloneNode(true);
        const left = gif_image.cloneNode(true);

        $image_top_area.appendChild(top);
        top.onload = function() {
            this.style.width = window_width + "px";
            this.style.height = image_height + "px";
            this.style.position = "absolute";
            this.style.clip = "rect(auto " + image_height + "px " + image_height + "px auto)";
            this.style.margin = "0px 0px 0px " + image_height + "px";
        }
        $image_right_area.appendChild(right);
        right.onload = function() {
            this.style.width = window_width + "px";
            this.style.height = image_height + "px";
            this.style.position = "absolute";
            this.style.clip = "rect(auto " + image_height * 2 + "px " + image_height + "px " + image_height + "px)";
            this.style.top = image_height + image_height / 2 + "px";
            this.style.left = image_height / 2 + "px";
            this.style.transform = "rotate(90deg)";
        }
        $image_bottom_area.appendChild(bottom);
        bottom.onload = function() {
            this.style.width = window_width + "px";
            this.style.height = image_height + "px";
            this.style.position = "absolute";
            this.style.clip = "rect(auto " + image_height * 3 + "px " + image_height + "px " + image_height * 2 + "px)";
            this.style.transform = "rotate(180deg)";
        }
        $image_left_area.appendChild(left);
        left.onload = function() {
            this.style.width = window_width + "px";
            this.style.height = image_height + "px";
            this.style.position = "absolute";
            this.style.clip = "rect(auto " + image_height * 4 + "px " + image_height + "px " + image_height * 3 + "px)";
            this.style.left = - image_height - image_height / 2 + "px";
            this.style.top = image_height * 2 + image_height / 2 + "px";
            this.style.transform = "rotate(270deg)";
        }
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
        <div className="image_top_area">
        </div>
        <div className="image_right_area">
        </div>
        <div className="image_bottom_area">
        </div>
        <div className="image_left_area">
        </div>
    </div>
        );
    }
}

const style = {
    content: {
        background: "black",
    }
};
