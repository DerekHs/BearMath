import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { createMatrix } from "actions/matrices"
import { Dropdown, Level, Button, Box, Field, Control, Input } from "react-bulma-components/full"

class Multiply extends Component {
  constructor(props) {
    super(props)
    this.onChange1 = this.onChange_1.bind(this)
    this.onChange2 = this.onChange_2.bind(this)
    this.state = { matrix_1: "", matrix_2: "" }
  }

  onChange_1 = selected => {
    this.setState({ matrix_1: selected });
  };

  onChange_2 = selected => {
    this.setState({ matrix_2: selected });
  };

  render() {
    return (
      <Box>
        <Level>
          <Level.Side align="left">
            <Level.Item>
              <Dropdown value={this.state.matrix_1} onChange={this.onChange1}>
                {this.props.matrices.keySeq().map(k =>
                  <Dropdown.Item key={k} value={k}>{k}</Dropdown.Item>
                )}
              </Dropdown>
            </Level.Item>
            <Level.Item>
              <Dropdown value={this.state.matrix_2} onChange={this.onChange2}>
                {this.props.matrices.keySeq().map(k =>
                  <Dropdown.Item key={k} value={k}>{k}</Dropdown.Item>
                )}
              </Dropdown>
            </Level.Item>
          </Level.Side>

          <Level.Side align="right">
            <Level.Item>
              <Field kind="addons">
                <Control>
                  <Input placeholder="Find a post" />
                </Control>
                <Control>
                  <Button renderAs="button">Search</Button>
                </Control>
              </Field>
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
    createMatrix
  },
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Multiply);