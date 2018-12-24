import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

import Matrix from './Matrix';
import { List } from 'immutable';
import { Container } from "reactstrap";
import { createMatrix } from "../actions/matrices"

class App extends Component {
  componentDidMount() {
    this.props.createMatrix("foo", [1,3], [1, 2, 3])
  }

  render() {
    return (
      <Container>
        <Matrix data={{numericValues: List([1, 2, 3, 4]), shape: List([2, 2])}}/>
      </Container>
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
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
