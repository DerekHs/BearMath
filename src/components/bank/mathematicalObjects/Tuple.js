import React from 'react';
import Matrix from "components/common/Matrix"

class Tuple extends React.Component {
    render() {
        return (
            <div className="box has-text-centered">
                <div className="columns is-multiline">
                    {this.props.numerics.nameMatrixPairs.map(([name, ndarray]) =>
                        <div className="column" key={name}>
                            <div className="box">
                                <Matrix ndarray={ndarray} />
                                <div>{name}</div>
                            </div>
                        </div>
                    )}
                </div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Tuple
