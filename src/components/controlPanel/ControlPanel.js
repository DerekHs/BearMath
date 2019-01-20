import React, { Component } from 'react';

import { Dropdown } from "react-bulma-components/full"
import GenericOperation from "components/controlPanel/operations/GenericOperation"
import * as Creators from "components/controlPanel/CodeCreators"

class ControlPanel extends Component {
  constructor(props) {
    super(props)
    this.state = { selected: "" }
  }

  onChange = selected => {
    this.setState({ selected });
  };

  render() {
    return (
      <div className="box">
        <Dropdown value={this.state.selected} onChange={this.onChange} color="info">
          <Dropdown.Item value="">Select Matrix Operation</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item value="invert">Invert</Dropdown.Item>
          <Dropdown.Item value="transpose">Transpose</Dropdown.Item>
          <Dropdown.Item value="add">Add</Dropdown.Item>
          <Dropdown.Item value="subtract">Subtract</Dropdown.Item>
          <Dropdown.Item value="multiply">Multiply</Dropdown.Item>
          <Dropdown.Item value="svd">SVD</Dropdown.Item>
        </Dropdown>
        <hr />
        {this.state.selected === "invert" && <GenericOperation numDropdowns={1} codeCreator={Creators.invert} dataTypes={Creators.invertTypes} />}
        {this.state.selected === "transpose" && <GenericOperation numDropdowns={1} codeCreator={Creators.transpose} dataTypes={Creators.transposeTypes} />}
        {this.state.selected === "add" && <GenericOperation numDropdowns={2} codeCreator={Creators.add} dataTypes={Creators.addTypes} />}
        {this.state.selected === "subtract" && <GenericOperation numDropdowns={2} codeCreator={Creators.subtract} dataTypes={Creators.subtractTypes} />}
        {this.state.selected === "multiply" && <GenericOperation numDropdowns={2} codeCreator={Creators.multiply} dataTypes={Creators.multiplyTypes} />}
        {this.state.selected === "svd" && <GenericOperation numDropdowns={1} codeCreator={Creators.svd} dataTypes={Creators.svdTypes} misc={{ "namev": ["a", "b", "c"] }} />}
      </div>
    );
  }
}

export default ControlPanel