import React from 'react';
import {BrowserRouter as Router, Route, IndexRoute, Link, hashHistory} from 'react-router-dom';

export class Routing extends React.Component {
    render() {
        return (
            <div class='routing'>
                <Router>
                    <Layout />
                </Router>
            </div>
        )
    }
}