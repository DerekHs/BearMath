import React, { Component } from 'react';
import Matrix from './components/Matrix';
import { List } from 'immutable';
import { Container } from "reactstrap";

class App extends Component {
  render() {
    let m1 = new List([new List([1, 2, 3]), new List([4, 5, 6])])
    return (
      <Container>
        <Matrix props={{foo: "asdf"}}/>
        <Matrix/>
      </Container>
    );
  }
}

export default App;
