import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topic from './Topic';
import Main from './Main';
import Info from "./info";
import NoMatch from "./NoMatch";


// class BasicRoute extends Component {
//     render() {
//         return (
//             <HashRouter>
//                 <Home>
//                     <Route exact path="/" component={Home} />
//                     <Route exact path="/about" component={About} />
//                     <Route exact path="/topics" component={Topic} />
//                 </Home>
//             </HashRouter>
//         )
//     }
// }

// 不可以在外层添加精准匹配 使用箭头函数则不需要使用return关键字
const BasicRoute = () => (
    <HashRouter>
        <Home>
            <Switch>
                <Route path="/main" render={() =>
                    <Main>
                        <Route path="/main/:mainId" exact component={Info}>
                        </Route>
                    </Main>
                }>
                </Route>
                <Route exact path="/about" component={About} />
                <Route exact path="/topics" component={Topic} />
                <Route component={NoMatch} />
            </Switch>
        </Home>
    </HashRouter>
);


export default BasicRoute;