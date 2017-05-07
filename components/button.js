import React, {Component} from "react";
import IconButton from "material-ui/IconButton";
import {fullWhite} from "material-ui/styles/colors";
import ActionList from "material-ui/svg-icons/action/list";

export default class Button extends Component {
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
<IconButton>
    <ActionList color={fullWhite} />
</IconButton>
        );
    }

    /**
     * After render Event
     * @see {Component}
     */
    componentDidMount() {
    }
}
