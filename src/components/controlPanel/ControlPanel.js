import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { upsertMatrix } from "actions/matrices"
import { Dropdown } from "react-bulma-components/full"
import Multiply from "components/controlPanel/operations/Multiply"
import Invert from "components/controlPanel/operations/Invert"

const footerStyle = {
  backgroundColor: "white",
  color: "white",
  borderTop: "2px solid gray",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "200px",
  width: "100%"
};


const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "100px",
  width: "100%"
};

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
      <div>
        <div style={phantomStyle} />
        <div style={footerStyle}>
          <Dropdown value={this.state.selected} onChange={this.onChange} color="info">
            <Dropdown.Item value="">Select</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item value="multiply">Multiply</Dropdown.Item>
            <Dropdown.Item value="invert">Invert</Dropdown.Item>
          </Dropdown>
          <hr />
          {this.state.selected === "multiply" && <Multiply />}
          {this.state.selected === "invert" && <Invert />}
        </div>
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