import React from 'react';

class Scalar extends React.Component {
    render() {
        return (
            <div>
                <b>{this.props.numerics.value}</b>
            </div>
        )
    }
}

export default Scalar

