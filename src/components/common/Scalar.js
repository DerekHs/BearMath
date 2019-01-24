import React from 'react';

class Scalar extends React.Component {
    render() {
        return (
            <h4 className="subtitle is-4">{Math.round(this.props.numerics.value * Math.pow(10, 4)) / Math.pow(10, 4)}</h4>
        )
    }
}

export default Scalar

