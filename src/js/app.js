import React from 'react';
import {BrowserRouter as Router, Route, IndexRoute, hashHistory} from 'react-router-dom';

import {Layout} from './layout/layout';
import {Portfolio} from './portfolio/portfolio';
import {Resume} from './resume/resume';
import {Contact} from './resume/contact';
import {Blog} from './blog/blog';


export class App extends React.Component {
    render() {
        return (
                <Router>
                    <div>
                        <Route exact path='/portfolio' component={Portfolio}></Route>
                        <Route exact path='/resume' component={Resume}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                        <Route exact path='/blog' component={Blog}></Route>
                    </div>
                </Router>
        )
    }
}