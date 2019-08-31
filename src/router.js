import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Admin from "./admin";
import Buttons from "./pages/ui/Buttons";
import NoMatch from "./pages/NoMatch/index"
class IRouter extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <App>
                        <Switch>
                            <Route exact path="/login" component={Login}></Route>
                            <Route path="/admin" render={() =>
                                <Admin>
                                    <Route exact path="/admin/ui/buttons" component={Buttons} />
                                    {/* <Route component={NoMatch} /> */}
                                </Admin>
                            }></Route>
                        </Switch>
                    </App>
                </HashRouter>
            </div>
        );
    }
}

export default IRouter;