import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { multiplyBegin } from "actions/multiply"
import { Dropdown, Level, Button, Box } from "react-bulma-components/full"

class Invert extends Component {
    constructor(props) {
        super(props)
        this.matrixSelected = this.matrixSelected.bind(this)
        this.updateResultVariable = this.updateResultVariable.bind(this)
        this.multiply = this.multiply.bind(this)
        this.state = { matrix: "", resultVariable: "" }
    }

    matrixSelected = function (selected) {
        console.log(selected)
        this.setState({ matrix: selected });
        if (selected !== "") {
            this.setState({ resultVariable: `${selected}_INV` })
        } else {
            this.setState({ resultVariable: "" })
        }
    };

    updateResultVariable = input => {
        this.setState({ resultVariable: input.target.value })
    }

    multiply = () => {
        this.props.multiplyBegin(this.state.matrix_1, this.state.matrix_2, this.state.resultVariable)
    }

    render() {
        return (
            <Box>
                <Level>
                    <Level.Side align="left">
                        <Level.Item>
                            <Dropdown value={this.state.matrix} onChange={this.matrixSelected}>
                                <Dropdown.Item value="">Select Matrix</Dropdown.Item>
                                {this.props.matrices.keySeq().map(k =>
                                    <Dropdown.Item key={k} value={k}>{k}</Dropdown.Item>
                                )}
                            </Dropdown>
                        </Level.Item>
                    </Level.Side>

                    <Level.Side align="right">
                        <Level.Item>
                            <input
                                className="input"
                                type="text"
                                value={this.state.resultVariable}
                                placeholder="Store Result As"
                                onChange={this.updateResultVariable} />
                        </Level.Item>
                    </Level.Side>

                </Level>
                <br />
                <Level>
                    <Level.Side align="left">
                    </Level.Side>
                    <Level.Side align="right">
                        <Level.Item>
                            <Button onClick={this.multiply}>Multiply</Button>
                        </Level.Item>
                    </Level.Side>
                </Level>
            </Box>
        );
    }
}

function mapStateToProps(state) {
    return {
        matrices: state.matrices
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        multiplyBegin
    },
        dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Invert);