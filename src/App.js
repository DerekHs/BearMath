import React, { Component } from 'react';
import Matrix from './components/Matrix';
import { List } from 'immutable';
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <Matrix data={{numericValues: List([1, 2, 3, 4]), shape: List([2, 2])}}/>
      </Container>
    );
  }
}

export default App;
