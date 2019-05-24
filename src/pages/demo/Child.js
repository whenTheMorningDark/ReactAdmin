import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <p>这是子组件</p>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default Child;