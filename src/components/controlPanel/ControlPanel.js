import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { upsertMatrix } from "actions/matrices"
import { Dropdown } from "react-bulma-components/full"
import Multiply from "components/controlPanel/operations/Multiply"
import Invert from "components/controlPanel/operations/Invert"

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
          <Dropdown.Item value="multiply">Multiply</Dropdown.Item>
        </Dropdown>
        <hr />
        {this.state.selected === "multiply" && <Multiply />}
        {this.state.selected === "invert" && <Invert />}
      </div>
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
    upsertMatrix
  },
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);