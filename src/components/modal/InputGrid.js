import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import { List } from 'immutable';

import { createMatrix } from "actions/matrices"

class InputGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = { numRows: props.initialRows, numCols: props.initialCols, matrixName: '' }
        this.addRow = this.addRow.bind(this)
        this.addCol = this.addCol.bind(this)
        this.removeRow = this.removeRow.bind(this)
        this.removeCol = this.removeCol.bind(this)
        this.createMatrix = this.createMatrix.bind(this)
        this.updateMatrixName = this.updateMatrixName.bind(this)
    }

    addRow() {
        this.setState((prevState) => ({
            numRows: Math.min(prevState.numRows + 1, 7)
        }))
    }

    addCol() {
        this.setState((prevState) => ({
            numCols: Math.min(prevState.numCols + 1, 7)
        }))
    }

    removeRow() {
        this.setState((prevState) => ({
            numRows: Math.max(prevState.numRows - 1, 1)
        }))
    }

    removeCol() {
        this.setState((prevState) => ({
            numCols: Math.max(prevState.numCols - 1, 1)
        }))
    }

    updateMatrixName(newName) {
        this.setState(
            { ...this.state, matrixName: newName }
        )
    }

    createMatrix() {
        let numericValues = new List()
        for (let r = 0; r < this.state.numRows; r++) {
            for (let c = 0; c < this.state.numCols; c++) {
                numericValues = numericValues.push(this[`textInput${r},${c}`].value)
            }
        }
        console.log(numericValues)
        this.props.createMatrix(this.state.matrixName, new List([this.state.numRows, this.state.numCols]), numericValues)
        this.props.toggle()
    }

    render() {
        return (
            <div className="columns">
                <div className="column">
                    <input
                        className="input"
                        type="text"
                        value={this.state.matrixName}
                        placeholder="Matrix Name"
                        onChange={(e) => this.updateMatrixName(e.target.value)} />
                    <div className="columns" style={{ paddingTop: "25px" }}>
                        <div className="column is-narrow">
                            {[...Array(this.state.numRows).keys()].map(i =>
                                <div key={i}>
                                    {[...Array(this.state.numCols).keys()].map(j =>
                                        <input
                                            type="text"
                                            size="4"
                                            style={{ fontSize: "20px" }}
                                            defaultValue="0"
                                            key={`${i},${j}`}
                                            ref={input => { this[`textInput${i},${j}`] = input }} />
                                    )}
                                    <br />
                                </div>)}
                        </div>
                        <div className="column is-one-fifth">
                            <button className="button is-small" onClick={this.removeRow}>Rem. Row</button>
                            <br />
                            <button className="button is-small" onClick={this.addRow}>Add Row</button>
                        </div>
                    </div>

                    <span className="button is-small" onClick={this.removeCol}>Rem. Col</span>
                    <span className="button is-small" onClick={this.addCol}>Add Col</span>
                    <div style={{ paddingTop: "40px" }}>
                        <button onClick={this.createMatrix}>Create Matrix</button>
                    </div>
                </div>
            </div>
        )
    }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createMatrix
    },
        dispatch)
}

export default connect(null, mapDispatchToProps)(InputGrid);

