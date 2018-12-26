import React, { Component } from 'react';
import {List} from 'immutable';
import katex from 'katex';
import Parser from 'html-react-parser';

const START = "\\begin{pmatrix}"
const END = "\\end{pmatrix}"

class Matrix extends Component {
    convertStateToLatex(props) {
        console.log(props.data.toJS())
        let fragments = new List()
        var numericValues = props.data.get('numericValues')
        var rows, cols
        [rows, cols] = props.data.get('shape')
        var count
        for (count = 0; count < rows; count++) {
            fragments = fragments
                .push(numericValues
                    .slice(count*cols, (count+1)*cols)
                    .join(' & '))
        }
        return START + fragments.join(' \\\\ ') + END
    }

    render() {
        let math = katex.renderToString(this.convertStateToLatex(this.props));
        return (
            <div className="box has-text-centered">
                <div>{Parser(math)}</div>
                <div style={{display: "flex", marginTop: "auto"}}>{this.props.name}</div>
            </div>
      )
    }
}

export default Matrix;