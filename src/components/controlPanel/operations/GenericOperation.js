import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { operationBegin } from "actions/operation"
import { Button } from "react-bulma-components/full"
import { GridLoader } from 'react-spinners';

import Scalar from "components/common/Scalar"
import Matrix from "components/common/Matrix"
import Tuple from "components/bank/Tuple"

const variableNameRe = new RegExp("^[a-zA-Z]+[1-9a-zA-Z_]*$")

const placeholder = "--Select Matrix--"

function matchExact(r, str) {
    var match = str.match(r);
    return match != null && str === match[0];
}

class GenericOperation extends React.Component {
    constructor(props) {
        super(props)
        this.operate = this.operate.bind(this)
        this.showWarning = this.showWarning.bind(this)
        this.closeWarning = this.closeWarning.bind(this)
        this.validMatrixName = this.validMatrixName.bind(this)
        this.setResult = this.setResult.bind(this)
        this.state = { resultVariable: "", displayWarning: false }
    }
    operate = () => {
        console.log(this.props)
        let argv = [...Array(this.props.numDropdowns).keys()].map(i => this[`dropdown${i}`].value)
        this.props.operationBegin(
            this.props.codeCreator(argv),
            argv,
            this.props.dataTypes,
            this.state.resultVariable,
            { ...this.props.misc, save: this.state.resultVariable }
        )
        this.showWarning()
    }

    showWarning = () => {
        this.setState({ displayWarning: true })
    }

    closeWarning = () => {
        this.setState({ displayWarning: false })
    }

    validMatrixName() {
        if (this.state.resultVariable === "") {
            return true
        }
        return matchExact(variableNameRe, this.state.resultVariable)
    }

    setResult(resultVariable) {
        this.setState({ resultVariable: resultVariable })
    }

    render() {
        return (
            <div className="box">
                <div className="level">
                    <div className="level-left">
                        {[...Array(this.props.numDropdowns).keys()].map(i =>
                            <div className="level-item" key={i}>
                                <div className="select">
                                    <select defaultValue="" ref={element => { this[`dropdown${i}`] = element }}>
                                        <option value="" disabled>{placeholder}</option>
                                        {this.props.workspaceMatrices.keySeq().map(k =>
                                            <option value={k} key={k}>{k}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="level-right">
                        <div className="level-item">
                            <div>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Save Result As"
                                    value={this.state.resultVariable}
                                    onChange={e => this.setResult(e.target.value)}
                                />
                                {!this.validMatrixName() && <p className="help is-danger">Result name must be a valid Python variable name</p>}
                            </div>
                        </div>
                    </div>

                </div>
                <br />
                <div className="level">
                    <div className="level-left">
                        {this.state.displayWarning && this.props.mostRecentError && <div className="notification is-warning">
                            <button className="delete" onClick={this.closeWarning}></button>
                            <p><b>Numpy Error: </b>{this.props.mostRecentError}</p>
                        </div>}
                        {helperWrapper(this.props.temp)}
                        {this.props.loading && <GridLoader color="#00bfff" />}
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <Button onClick={this.operate}>Operate</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const helperWrapper = (temp) => {
    if (temp) {
        return (
            <div className="column has-text-centered">
                <h2 className="subtitle is-3">Result:</h2>
                {temp && renderHelper(temp)}
            </div>
        )
    }
    return null
}

const renderHelper = ([name, [type, numerics]]) => {
    switch (type) {
        case "SCALAR":
            return (<Scalar name={name} numerics={numerics} />)
        case "NDARRAY":
            return (<Matrix name={name} numerics={numerics} edit clone delete />)
        case "TUPLE":
            return (<Tuple name={name} numerics={numerics} />)
        default:
            return null
    }
}

function mapStateToProps(state) {
    return {
        workspaceMatrices: state.values.filter(v => v[0] === "NDARRAY"),
        temp: state.temp,
        mostRecentError: state.error,
        loading: state.loading
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        operationBegin
    },
        dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GenericOperation);