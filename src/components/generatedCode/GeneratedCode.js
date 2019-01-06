import React from 'react';
import { connect } from "react-redux"
import Textarea from "react-textarea-autosize"

class GeneratedCode extends React.Component {
    render() {
        return (
            <div>
                < Textarea className="textarea" value={this.props.generatedCode.join('\n')} readOnly>
                </Textarea >
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        generatedCode: state.generatedCode
    }
}

export default connect(mapStateToProps)(GeneratedCode);
