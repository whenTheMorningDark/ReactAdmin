import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Admin from "./admin";
import Buttons from "./pages/ui/Buttons";
import Modals from "./pages/ui/Modal";
import Loading from "./pages/ui/Loading";

import Form from "./pages/form/Login";
import Register from "./pages/form/Register";
// import NoMatch from "./pages/NoMatch/index"
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
                  <Route exact path="/admin/ui/modals" component={Modals} />
                  <Route exact path="/admin/ui/loadings" component={Loading} />
                  <Route exact path="/admin/form/login" component={Form} />
                  <Route exact path="/admin/form/reg" component={Register} />
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