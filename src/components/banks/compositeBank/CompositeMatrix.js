import React from 'react';
import Matrix from "components/common/Matrix"

class CompositeMatrix extends React.Component {
    render() {
        return (
            <div className="box has-text-centered">
                <div className="level">
                    <div className="level-left">
                        {this.props.composite.nameMatrixPairs.map(([name, ndarray]) =>
                            <div className="level-item" key={name}>
                                <div className="box">
                                    <Matrix ndarray={ndarray} />
                                    <div>{name}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {this.props.matrixName}
            </div>
        )
    }
}

export default CompositeMatrix
