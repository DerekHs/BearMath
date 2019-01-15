import React, { Component } from 'react';

import { Dropdown } from "react-bulma-components/full"
import Multiply from "components/controlPanel/operations/Multiply"
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
          <Dropdown.Item value="">Select</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item value="invert">Invert</Dropdown.Item>
          <Dropdown.Item value="transpose">Transpose</Dropdown.Item>
          <Dropdown.Item value="add">Add</Dropdown.Item>
          <Dropdown.Item value="subtract">Subtract</Dropdown.Item>
          <Dropdown.Item value="multiply">Multiply</Dropdown.Item>
        </Dropdown>
        <hr />
        {this.state.selected === "invert" && <GenericOperation numDropdowns={1} codeCreator={Creators.invert} />}
        {this.state.selected === "transpose" && <GenericOperation numDropdowns={1} codeCreator={Creators.transpose} />}
        {this.state.selected === "add" && <GenericOperation numDropdowns={2} codeCreator={Creators.add} />}
        {this.state.selected === "subtract" && <GenericOperation numDropdowns={2} codeCreator={Creators.subtract} />}
        {this.state.selected === "multiply" && <GenericOperation numDropdowns={2} codeCreator={Creators.multiply} />}
      </div>
    );
  }
}

export default ControlPanel