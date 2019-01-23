import React from 'react';

class Scalar extends React.Component {
    render() {
        return (
            <div>
                <h2>{Math.round(this.props.numerics.value * Math.pow(10, 4)) / Math.pow(10, 4)}</h2>
            </div>
        )
    }
}

export default Scalar

