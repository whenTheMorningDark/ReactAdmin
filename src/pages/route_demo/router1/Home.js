import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/main">Main</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                    <li>
                        <Link to="/aaa">imocc</Link>
                    </li>
                </ul>
                <hr />
                {this.props.children}
            </div>
            // </HashRouter>
        );
    }
}

export default Home;