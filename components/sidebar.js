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
    <a href="/"><MenuItem onTouchTap={this.handleClose}>花火</MenuItem></a>
    <a href="/sabal_chan"><MenuItem onTouchTap={this.handleClose}>サーバルちゃん</MenuItem></a>
    <a href="/lerch"><MenuItem onTouchTap={this.handleClose}>レルヒさん</MenuItem></a>
    <a href="/crew"><MenuItem onTouchTap={this.handleClose}>Crew</MenuItem></a>
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
