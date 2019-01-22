import React, { Component } from 'react';

class BankWrapper extends Component {

    render() {
        return (
            <div>
                <nav className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <h2 className="subtitle is-3">{this.props.title} </h2>
                        </div>
                        <div className="level-item">
                            {this.props.createNew}
                        </div>
                    </div>
                </nav>
                <div className="box">
                    <div className="columns is-multiline">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default BankWrapper
