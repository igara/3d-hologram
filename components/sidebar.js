import React, {Component} from "react";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Sidebar extends Component {
    /**
     * @param {any} props
     * @param {any} context
     */
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false
        };
        this.handleClose = this.handleClose.bind(this);
    }

    /**
     * @return {JSX.Element}
     * @see {Component}
     */
    render() {
        return (
<Drawer
    docked={false}
    width={200}
    open={this.state.open}
    onRequestChange={(open) => this.setState({open})}
>
    <MenuItem onTouchTap={this.handleClose}>サンプル1</MenuItem>
    <MenuItem onTouchTap={this.handleClose}>サンプル2</MenuItem>
    <MenuItem onTouchTap={this.handleClose}>ホログラムデータを作る</MenuItem>
</Drawer>
        );
    }

    /**
     * After render Event
     * @see {Component}
     */
    componentDidMount() {
    }

    handleToggle() {
        this.setState({
            open: !this.state.open
        });
    }

    handleClose() {
        this.setState({
            open: false
        });
    }
}
