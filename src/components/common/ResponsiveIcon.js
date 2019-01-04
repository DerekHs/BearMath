import React from 'react';

class ResponsiveIcon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
        this.hoverOn = this.hoverOn.bind(this)
        this.hoverOff = this.hoverOff.bind(this)
    }

    hoverOn() {
        this.setState({ hover: true });
    }

    hoverOff() {
        this.setState({ hover: false });
    }

    render() {
        return (
            <i className={this.state.hover ? "fas " + this.props.icon : "far " + this.props.icon}
                style={{ cursor: "pointer" }}
                onMouseEnter={this.hoverOn}
                onMouseLeave={this.hoverOff}
                onClick={this.props.onClick}
                title={this.props.title}
            ></i>
        )
    }
}

export default ResponsiveIcon;

