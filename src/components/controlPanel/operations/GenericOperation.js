import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { operationBegin } from "actions/operation"
import { Button } from "react-bulma-components/full"

const placeholder = "--Select Matrix--"
class GenericOperation extends React.Component {
    constructor(props) {
        super(props)
        this.operate = this.operate.bind(this)
        this.showWarning = this.showWarning.bind(this)
        this.closeWarning = this.closeWarning.bind(this)
        this.state = { matrix_1: "", matrix_2: "", resultVariable: "", displayWarning: false }
    }
    operate = () => {
        let argv = [...Array(this.props.numDropdowns).keys()].map(i => this[`dropdown${i}`].value)
        this.props.operationBegin(this.props.codeCreator(argv), argv, this["resultName"].value)
        this.showWarning()
    }

    showWarning = () => {
        this.setState({ displayWarning: true })
    }

    closeWarning = () => {
        this.setState({ displayWarning: false })
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
                                        {this.props.matrixMap.keySeq().map(k =>
                                            <option value={k} key={k}>{k}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="level-right">
                        <div className="level-item">
                            <input
                                className="input"
                                type="text"
                                placeholder="Store Result As"
                                ref={element => { this["resultName"] = element }}
                            />
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

function mapStateToProps(state) {
    return {
        matrixMap: state.matrices.matrixMap,
        mostRecentError: state.matrices.mostRecentError
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        operationBegin
    },
        dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GenericOperation);