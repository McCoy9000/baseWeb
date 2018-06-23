import React from 'react'
import {BrowserRouter as Router, Route, IndexRoute, hashHistory} from 'react-router-dom'

import {Layout} from './components/layout/layout'
import {Hero} from './components/hero'

export class App extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <div>
          <Route exact path='/' component={Hero}></Route>
          <Route path='/home' component={Layout}></Route>
        </div>
      </Router>
    )
  }
}
