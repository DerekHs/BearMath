import React, { Component } from 'react';

import { Dropdown } from "react-bulma-components/full"
import GenericOperation from "components/controlPanel/operations/GenericOperation"
import * as Creators from "components/controlPanel/CodeCreators"

class ControlPanel extends Component {
  constructor(props) {
    super(props)
    this.isActive = this.isActive.bind(this)
    this.selectTab = this.selectTab.bind(this)
    this.operationSelected = this.operationSelected.bind(this)
    this.state = { operationType: "Arithmetic", operation: "" }
  }

  selectTab = selected => {
    this.setState({ operationType: selected, operation: "" });
  };

  operationSelected = selected => {
    this.setState({ operation: selected })
  }

  isActive = operationType => {
    if (this.state.operationType === operationType) {
      return "is-active"
    }
    return ""
  }

  render() {
    return (
      <div>
        <div className="tabs">
          <ul>
            <li className={this.isActive("Arithmetic")}>
              <a onClick={() => this.selectTab("Arithmetic")}>Arithmetic</a>
            </li>
            <li className={this.isActive("Decompositions")}>
              <a onClick={() => this.selectTab("Decompositions")}>Decompositions</a>
            </li>
            <li className={this.isActive("Misc")}>
              <a onClick={() => this.selectTab("Misc")}>Misc.</a>
            </li>
          </ul>
        </div>
        {this.state.operationType === "Arithmetic" && <div className="box">
          <Dropdown value={this.state.operation} onChange={this.operationSelected} color="info">
            <Dropdown.Item value="">--Select Arithmetic Operation--</Dropdown.Item>
            <Dropdown.Item value="invert">Invert</Dropdown.Item>
            <Dropdown.Item value="transpose">Transpose</Dropdown.Item>
            <Dropdown.Item value="add">Add</Dropdown.Item>
            <Dropdown.Item value="subtract">Subtract</Dropdown.Item>
            <Dropdown.Item value="multiply">Multiply</Dropdown.Item>
            <Dropdown.Item value="determinant">Determinant</Dropdown.Item>
          </Dropdown>
          <hr />
          {this.state.operation === "invert" && <GenericOperation numDropdowns={1} codeCreator={Creators.invert} dataTypes={Creators.invertTypes} />}
          {this.state.operation === "transpose" && <GenericOperation numDropdowns={1} codeCreator={Creators.transpose} dataTypes={Creators.transposeTypes} />}
          {this.state.operation === "add" && <GenericOperation numDropdowns={2} codeCreator={Creators.add} dataTypes={Creators.addTypes} />}
          {this.state.operation === "subtract" && <GenericOperation numDropdowns={2} codeCreator={Creators.subtract} dataTypes={Creators.subtractTypes} />}
          {this.state.operation === "multiply" && <GenericOperation numDropdowns={2} codeCreator={Creators.multiply} dataTypes={Creators.multiplyTypes} />}
          {this.state.operation === "determinant" && <GenericOperation numDropdowns={1} codeCreator={Creators.determinant} dataTypes={Creators.determinantTypes} />}
        </div>}
        {this.state.operationType === "Decompositions" && <div className="box">
          <Dropdown value={this.state.operation} onChange={this.operationSelected} color="info">
            <Dropdown.Item value="">--Select Decomposition--</Dropdown.Item>
            <Dropdown.Item value="svd">SVD</Dropdown.Item>
            <Dropdown.Item value="eigenvectors">Eigenvectors/values</Dropdown.Item>
            <Dropdown.Item value="qr">QR</Dropdown.Item>
          </Dropdown>
          <hr />
          {this.state.operation === "svd" && <GenericOperation numDropdowns={1} codeCreator={Creators.svd} dataTypes={Creators.svdTypes} misc={{ "namev": ["U", "Σ", "V"] }} />}
          {this.state.operation === "eigenvectors" && <GenericOperation numDropdowns={1} codeCreator={Creators.eigenvectors} dataTypes={Creators.eigenvectorsTypes} misc={{ "namev": ["eigenvalues", "eigenvectors"] }} />}
          {this.state.operation === "qr" && <GenericOperation numDropdowns={1} codeCreator={Creators.qr} dataTypes={Creators.qrTypes} misc={{ "namev": ["Q", "R"] }} />}
        </div>}
        {this.state.operationType === "Misc" && <div className="box">
          <Dropdown value={this.state.operation} onChange={this.operationSelected} color="info">
            <Dropdown.Item value="">--Select Operation--</Dropdown.Item>
            <Dropdown.Item value="nullspace">NullSpace</Dropdown.Item>
          </Dropdown>
          <hr />
          {this.state.operation === "nullspace" && <GenericOperation numDropdowns={1} codeCreator={Creators.nullspace} dataTypes={Creators.nullspaceTypes} misc={{ "namev": ["U", "Σ", "V"] }} />}
        </div>}
      </div>
    );
  }
}

export default ControlPanel