import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { operationBegin } from "actions/operation"
import { Dropdown, Level, Button, Box } from "react-bulma-components/full"

class Multiply extends Component {
  constructor(props) {
    super(props)
    this.onChange1 = this.onChange_1.bind(this)
    this.onChange2 = this.onChange_2.bind(this)
    this.updateResultVariable = this.updateResultVariable.bind(this)
    this.multiply = this.multiply.bind(this)
    this.state = { matrix_1: "", matrix_2: "", resultVariable: "" }
  }

  onChange_1 = selected => {
    this.setState({ matrix_1: selected });
  };

  onChange_2 = selected => {
    this.setState({ matrix_2: selected });
  };

  updateResultVariable = input => {
    this.setState({ resultVariable: input.target.value })
  }

  multiply = () => {
    this.props.operationBegin(`np.dot(${this.state.matrix_1}, ${this.state.matrix_2})`, [this.state.matrix_1, this.state.matrix_2], this.state.resultVariable)
  }

  render() {
    return (
      <Box>
        <Level>
          <Level.Side align="left">
            <Level.Item>
              <Dropdown value={this.state.matrix_1} onChange={this.onChange1}>
                <Dropdown.Item value="">Select Matrix</Dropdown.Item>
                {this.props.matrixMap.keySeq().map(k =>
                  <Dropdown.Item key={k} value={k}>{k}</Dropdown.Item>
                )}
              </Dropdown>
            </Level.Item>
            <Level.Item>
              <Dropdown value={this.state.matrix_2} onChange={this.onChange2}>
                <Dropdown.Item value="">Select Matrix</Dropdown.Item>
                {this.props.matrixMap.keySeq().map(k =>
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
    matrixMap: state.matrices.matrixMap
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    operationBegin
  },
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Multiply);