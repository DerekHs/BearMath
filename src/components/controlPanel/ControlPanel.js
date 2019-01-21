import React, { Component } from 'react';

import { Dropdown } from "react-bulma-components/full"
import GenericOperation from "components/controlPanel/operations/GenericOperation"
import * as Creators from "components/controlPanel/CodeCreators"

class ControlPanel extends Component {
  constructor(props) {
    super(props)
    this.isActive = this.isActive.bind(this)
    this.selectTab = this.selectTab.bind(this)
    this.state = { operationType: "Decompositions", operation: "" }
  }

  selectTab = selected => {
    this.setState({ operationType: selected });
  };

  isActive = operationType => {
    if (this.state.operationType === operationType) {
      return "is-active"
    }
    return ""
  }

  render() {
    return (
      <div className="tabs">
        <ul>
          <li className={this.isActive("Arithmetic")}>
            <a onClick={() => this.selectTab("Arithmetic")}>Arithmetic</a>
          </li>
          <li className={this.isActive("Decompositions")}>
            <a onClick={() => this.selectTab("Decompositions")}>Decompositions</a>
          </li>
        </ul>
      </div>
      // <div className="box">
      //   <h2 className="subtitle is-3">Operations</h2>
      //   <Dropdown value={this.state.selected} onChange={this.onChange} color="info">
      //     <Dropdown.Item value="">--Select Operation--</Dropdown.Item>
      //     <Dropdown.Item value="invert">Invert</Dropdown.Item>
      //     <Dropdown.Item value="transpose">Transpose</Dropdown.Item>
      //     <Dropdown.Item value="add">Add</Dropdown.Item>
      //     <Dropdown.Item value="subtract">Subtract</Dropdown.Item>
      //     <Dropdown.Item value="multiply">Multiply</Dropdown.Item>
      //     <Dropdown.Item value="svd">SVD</Dropdown.Item>
      //     <Dropdown.Item value="eigenvectors">Eigenvectors/values</Dropdown.Item>
      //     <Dropdown.Item value="qr">QR</Dropdown.Item>
      //   </Dropdown>
      //   <hr />
      //   {this.state.selected === "invert" && <GenericOperation numDropdowns={1} codeCreator={Creators.invert} dataTypes={Creators.invertTypes} />}
      //   {this.state.selected === "transpose" && <GenericOperation numDropdowns={1} codeCreator={Creators.transpose} dataTypes={Creators.transposeTypes} />}
      //   {this.state.selected === "add" && <GenericOperation numDropdowns={2} codeCreator={Creators.add} dataTypes={Creators.addTypes} />}
      //   {this.state.selected === "subtract" && <GenericOperation numDropdowns={2} codeCreator={Creators.subtract} dataTypes={Creators.subtractTypes} />}
      //   {this.state.selected === "multiply" && <GenericOperation numDropdowns={2} codeCreator={Creators.multiply} dataTypes={Creators.multiplyTypes} />}
      //   {this.state.selected === "svd" && <GenericOperation numDropdowns={1} codeCreator={Creators.svd} dataTypes={Creators.svdTypes} misc={{ "namev": ["U", "Σ", "V"] }} />}
      //   {this.state.selected === "eigenvectors" && <GenericOperation numDropdowns={1} codeCreator={Creators.eigenvectors} dataTypes={Creators.eigenvectorsTypes} misc={{ "namev": ["eigenvalues", "eigenvectors"] }} />}
      //   {this.state.selected === "qr" && <GenericOperation numDropdowns={1} codeCreator={Creators.qr} dataTypes={Creators.qrTypes} misc={{ "namev": ["Q", "R"] }} />}
      // </div>
    );
  }
}

export default ControlPanel