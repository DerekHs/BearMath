import React from 'react';
// import { connect } from "react-redux"
// import { bindActionCreators } from 'redux'

class Scalar extends React.Component {
    render() {
        return (
            <div className="box has-text-centered">
                {this.props.value}
                <p>{this.props.scalarName}</p>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         ...
//   }
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         ...
//   },
//         dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Scalar);

export default Scalar

