import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

import { upsertMatrix } from "actions/matrices"
import { renameMatrix } from "actions/matrices"

const variableNameRe = new RegExp("^[a-zA-Z]+[1-9a-zA-Z_]*$")

function matchExact(r, str) {
    var match = str.match(r);
    return match != null && str === match[0];
}

class InputGrid extends React.Component {
    constructor(props) {
        super(props)
        if (props.create) {
            this.state = {
                numRows: props.initialRows,
                numCols: props.initialCols,
                matrixName: ''
            }
            this.finishedPopulating = true
        }

        else if (props.edit) {
            console.log(props.ndarray)
            this.state = {
                numRows: props.ndarray.rows(),
                numCols: props.ndarray.cols(),
                numericValues: props.ndarray.numericValues,
                matrixName: props.matrixName
            }
            this.finishedPopulating = false
        }

        else if (props.clone) {
            this.state = {
                numRows: props.ndarray.rows(),
                numCols: props.ndarray.cols(),
                numericValues: props.ndarray.numericValues,
                matrixName: props.matrixName + "_CLONE"
            }
            this.finishedPopulating = false
        }

        this.addRow = this.addRow.bind(this)
        this.addCol = this.addCol.bind(this)
        this.removeRow = this.removeRow.bind(this)
        this.removeCol = this.removeCol.bind(this)
        this.submit = this.submit.bind(this)
        this.updateMatrixName = this.updateMatrixName.bind(this)
        this.getStartingValue = this.getStartingValue.bind(this)
        this.setFinishedPopulating = this.setFinishedPopulating.bind(this)
        this.validMatrixName = this.validMatrixName.bind(this)
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

    submit() {
        let numericValues = []
        for (let r = 0; r < this.state.numRows; r++) {
            for (let c = 0; c < this.state.numCols; c++) {
                numericValues.push(parseFloat(this[`textInput${r},${c}`].value) || 0)
            }
        }
        if (this.props.edit) {
            this.props.upsertMatrix(this.props.matrixName, [this.state.numRows, this.state.numCols], numericValues)
            this.props.renameMatrix(this.props.matrixName, this.state.matrixName)
        } else {
            this.props.upsertMatrix(this.state.matrixName, [this.state.numRows, this.state.numCols], numericValues)
        }
        this.props.toggle()
    }

    getStartingValue(i, j) {
        if (!this.finishedPopulating) {
            return this.state.numericValues[i * this.state.numCols + j]
        }
        return null
    }

    setFinishedPopulating(status) {
        this.finishedPopulating = status
    }

    validMatrixName() {
        if (this.state.matrixName === "") {
            return true
        }
        return matchExact(variableNameRe, this.state.matrixName)
    }

    render() {
        let ret = (
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <input
                            className="input"
                            type="text"
                            value={this.state.matrixName}
                            placeholder="Matrix Name"
                            onChange={(e) => this.updateMatrixName(e.target.value)} />
                        {!this.validMatrixName() && <p className="help is-danger">Matrix name must be a valid Python variable name</p>}
                    </div>
                    <div className="columns is-mobile" style={{ paddingTop: "25px" }}>
                        <div className="column is-narrow">
                            {[...Array(this.state.numRows).keys()].map(i =>
                                <div key={i}>
                                    {[...Array(this.state.numCols).keys()].map(j =>
                                        <input
                                            type="text"
                                            size="4"
                                            style={{ fontSize: "20px" }}
                                            defaultValue={this.getStartingValue(i, j)}
                                            key={`${i},${j}`}
                                            ref={element => { this[`textInput${i},${j}`] = element }} />
                                    )}
                                    <br />
                                </div>)}
                        </div>
                        <div className="column is-one-fifth has-text-left">
                            <button className="button is-small" onClick={this.removeRow}>Remove Row</button>
                            <br />
                            <button className="button is-small" onClick={this.addRow}>Add Row</button>
                        </div>
                    </div>

                    <div className="columns" >
                        <div className="column is-narrow has-text-left">
                            <span className="button is-small" onClick={this.removeCol}>Remove Col</span>
                            <span className="button is-small" onClick={this.addCol}>Add Col</span>
                            <div style={{ paddingTop: "20px" }}>
                                <button className="button" disabled={this.state.matrixName === "" || !this.validMatrixName()} onClick={this.submit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        this.setFinishedPopulating(true)
        return ret
    }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        upsertMatrix,
        renameMatrix
    },
        dispatch)
}

export default connect(null, mapDispatchToProps)(InputGrid);

