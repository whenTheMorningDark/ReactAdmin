import React, { Component } from 'react';
class Info extends Component {
    render() {
        return (
            <div>
                Info
                {this.props.match.params.mainId}
            </div>
        );
    }
}
export default Info;