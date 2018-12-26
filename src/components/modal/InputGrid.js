import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import { List } from 'immutable';

import { createMatrix } from "actions/matrices"

class InputGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {numRows: props.initialRows, numCols: props.initialCols, matrixName:''}
        this.addRow = this.addRow.bind(this)
        this.addCol = this.addCol.bind(this)
        this.removeRow = this.removeRow.bind(this)
        this.removeCol = this.removeCol.bind(this)
        this.createMatrix = this.createMatrix.bind(this)
        this.updateMatrixName = this.updateMatrixName.bind(this)
    }

    addRow() {
        this.setState((prevState) => ({
            numRows: prevState.numRows + 1
        }))
    }

    addCol() {
        this.setState((prevState) => ({
            numCols: prevState.numCols + 1
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
            {...this.state, matrixName: newName}
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
            <div className="container">
                <input className="input" type="text" value={this.state.matrixName} placeholder="Matrix Name" onChange={(e) => this.updateMatrixName(e.target.value)}/>
                <div className="level">
                    <div>
                        {[...Array(this.state.numRows).keys()].map(i =>  
                            <div key={i}>
                                {[...Array(this.state.numCols).keys()].map(j =>
                                    <input 
                                        type="text" 
                                        size="5" 
                                        style={{fontSize: "15px"}} 
                                        defaultValue="0"
                                        key={`${i},${j}`}
                                        ref={input => { this[`textInput${i},${j}`] = input }} />
                                )}
                                <br/>
                            </div>)}
                    </div>
                    <div className="column">
                        <button className="button is-small" onClick={this.removeRow}>Remove Row</button>
                        <br/>
                        <button className="button is-small" onClick={this.addRow}>Add Row</button>
                    </div>
                </div>
                <span className="button is-small" onClick={this.removeCol}>Remove Col</span>
                <span className="button is-small" onClick={this.addCol}>Add Col</span>
                <br/>
                <button onClick={this.createMatrix}>Create Matrix</button>
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

