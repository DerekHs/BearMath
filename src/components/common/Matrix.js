import React from 'react';
import { List } from 'immutable';
import katex from 'katex';
import Parser from 'html-react-parser';

const START = "\\begin{pmatrix}"
const END = "\\end{pmatrix}"

class Matrix extends React.Component {
    convertStateToLatex(props) {
        console.log(props.ndarray)
        let fragments = new List()
        var numericValues = props.ndarray.numericValues
        var rows, cols
        [rows, cols] = props.ndarray.shape
        var count
        for (count = 0; count < rows; count++) {
            fragments = fragments
                .push(numericValues
                    .slice(count * cols, (count + 1) * cols)
                    .join(' & '))
        }
        return START + fragments.join(' \\\\ ') + END
    }

    render() {
        let math = katex.renderToString(this.convertStateToLatex(this.props));
        return (
            <div>{Parser(math)}</div>
        )
    }
}

export default Matrix;