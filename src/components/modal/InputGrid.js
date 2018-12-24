import React from 'react';

class InputGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {numRows: props.initialRows, numCols: props.initialCols}
        this.addRow = this.addRow.bind(this)
        this.addCol = this.addCol.bind(this)
        this.removeRow = this.removeRow.bind(this)
        this.removeCol = this.removeCol.bind(this)
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

    render() {
        return (
            <div className="container">
                <div className="level">
                    <div>
                        {[...Array(this.state.numRows).keys()]
                            .map(i => <RowOfInputs key={i} length={this.state.numCols}/>)}
                    </div>
                    <div className="column">
                        <button className="button" onClick={this.removeRow}>Remove Row</button>
                        <br/>
                        <br/>
                        <button className="button" onClick={this.addRow}>Add Row</button>
                    </div>
                </div>
                <br/>
                <div className="buttons">
                    <span className="button" onClick={this.removeCol}>Remove Col</span>
                    <span className="button" onClick={this.addCol}>Add Col</span>
                </div>
            </div>
      )
  }
}

function SmallBox(props) {
    return (
        <input type="text" size="5" placeholder="0"/>
    )
}

function RowOfInputs(props) {
    return (
        <div>
            {[...Array(props.length).keys()].map(i => <SmallBox key={i}/>)}
            <br/>
        </div>)
}

export default InputGrid;