import React, {Component} from "react";
import AppBar from "material-ui/AppBar";

export default class Sidebar extends Component {
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
<AppBar
    title="3D-Hologram"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
/>
        );
    }

    /**
     * After render Event
     * @see {Component}
     */
    componentDidMount() {
    }
}
