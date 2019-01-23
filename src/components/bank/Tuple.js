import React from 'react';
import RichMatrix from "components/bank/RichMatrix"

class Tuple extends React.Component {
    render() {
        return (
            <div className="box has-text-centered">
                <div className="columns is-multiline">
                    {this.props.numerics.nameMatrixPairs.map(([name, ndarray]) =>
                        <div className="column" key={name}>
                            <RichMatrix numerics={ndarray} name={name} />
                        </div>
                    )}
                </div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Tuple
