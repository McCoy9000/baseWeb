import '../../css/styles.css';

import T from 'i18n-react';
import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import {Portfolio} from '../portfolio/portfolio';
import {Resume} from '../resume/resume';
import {Contact} from '../resume/contact';
import {Blog} from '../blog/blog';

export class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <IndexRoute component='Portfolio'></IndexRoute>
                <Route path='/resume' component='Resume'></Route>
                <Route path='/contact' component='Contact'></Route>
                <Route path='/blog' component='Blog'></Route>
                {this.props.children}
            </div>
        )
    }
}