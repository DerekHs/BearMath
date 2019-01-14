import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import { List } from 'immutable';

import { upsertMatrix } from "actions/matrices"
import { renameMatrix } from "actions/matrices"

class InputGrid extends React.Component {
    constructor(props) {
        super(props)
        this.finishedPopulating = false
        if (props.create) {
            this.state = {
                numRows: props.initialRows,
                numCols: props.initialCols,
                matrixName: ''
            }
        }

        else if (props.edit) {
            this.state = {
                numRows: props.ndarray.rows(),
                numCols: props.ndarray.cols(),
                numericValues: props.ndarray.numericValues,
                matrixName: props.matrixName
            }
        }

        else if (props.clone) {
            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var timestamp = date + ' ' + time
            this.state = {
                numRows: props.ndarray.rows(),
                numCols: props.ndarray.cols(),
                numericValues: props.ndarray.numericValues,
                matrixName: props.matrixName + ' __CLONED_AT__' + timestamp
            }
        }

        this.addRow = this.addRow.bind(this)
        this.addCol = this.addCol.bind(this)
        this.removeRow = this.removeRow.bind(this)
        this.removeCol = this.removeCol.bind(this)
        this.submit = this.submit.bind(this)
        this.updateMatrixName = this.updateMatrixName.bind(this)
        this.getStartingValue = this.getStartingValue.bind(this)
        this.setFinishedPopulating = this.setFinishedPopulating.bind(this)
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
        let numericValues = new List()
        for (let r = 0; r < this.state.numRows; r++) {
            for (let c = 0; c < this.state.numCols; c++) {
                numericValues = numericValues.push(this[`textInput${r},${c}`].value)
            }
        }
        if (this.props.edit) {
            this.props.upsertMatrix(this.props.matrixName, new List([this.state.numRows, this.state.numCols]), numericValues)
            this.props.renameMatrix(this.props.matrixName, this.state.matrixName)
        } else {
            this.props.upsertMatrix(this.state.matrixName, new List([this.state.numRows, this.state.numCols]), numericValues)
            this.props.toggle()
        }
    }

    getStartingValue(i, j) {
        if (this.state.numericValues &&
            i * this.state.numCols + j < this.state.numericValues.size &&
            !this.finishedPopulating) {
            return this.state.numericValues.get(i * this.state.numCols + j)
        }
        return 0
    }

    setFinishedPopulating(status) {
        this.finishedPopulating = status
    }

    render() {
        let ret = (
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
                                            disabled={this.props.clone}
                                            size="4"
                                            style={{ fontSize: "20px" }}
                                            defaultValue={this.getStartingValue(i, j)}
                                            key={`${i},${j}`}
                                            ref={input => { this[`textInput${i},${j}`] = input }} />
                                    )}
                                    <br />
                                </div>)}
                        </div>
                        <div className="column is-one-fifth has-text-left">
                            <button className="button is-small" onClick={this.removeRow}>Rem. Row</button>
                            <br />
                            <button className="button is-small" onClick={this.addRow}>Add Row</button>
                        </div>
                    </div>

                    <div className="columns" >
                        <div className="column is-narrow has-text-left">
                            <span className="button is-small" onClick={this.removeCol}>Rem. Col</span>
                            <span className="button is-small" onClick={this.addCol}>Add Col</span>
                            <div style={{ paddingTop: "20px" }}>
                                <button className="button" onClick={this.submit}>Submit</button>
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

