import React, { Component } from 'react';
import {List} from 'immutable';
import katex from 'katex';
import Parser from 'html-react-parser';
import { Row, Col } from 'reactstrap';

const START = "\\begin{bmatrix}"
const END = "\\end{bmatrix}"

class Matrix extends Component {
    convertStateToLatex(props) {
        let fragments = List()
        var numericValues = props.data.numericValues
        var rows, cols
        [rows, cols] = props.data.shape
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
            <Row>
                <Col>
                    {Parser(math)}
                </Col>
                <Col>
                    <p>{this.props.name}</p>
                </Col>
            </Row>
      )
    }
}

export default Matrix;