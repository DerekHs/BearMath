import React from 'react';

class Scalar extends React.Component {
    render() {
        return (
            <div>
                <b>{Math.round(this.props.numerics.value * Math.pow(10, 4)) / Math.pow(10, 4)}</b>
            </div>
        )
    }
}

export default Scalar

