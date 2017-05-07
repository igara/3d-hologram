import React, {Component} from "react";

export default class Image extends Component {
    /**
     * @param {any} props
     * @param {any} context
     */
    constructor(props, context) {
        super(props, context);
    }

    /**
     * @return {JSX.Element}
     * @see {Component}
     */
    render() {
        return (
<div style={style.image}>
    </div>
        );
    }

    /**
     * After render Event
     * @see {Component}
     */
    componentDidMount() {
    }
}

const style = {
    image: {
        width: "100%",
        height: "100%",
        background: "red"
    }
};
