import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Main extends Component {
    render() {
        return (
            <div>
                main
                <Link to="/main/4">Main/4</Link>
                <br />
                <Link to="/main/456">Main/456</Link>
                <hr />
                {this.props.children}
            </div>
        );
    }
}
export default Main;