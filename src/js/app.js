import React from 'react'
import {BrowserRouter as Router, Route, IndexRoute, hashHistory} from 'react-router-dom'

import {Layout} from './layout/layout'
import {Hero} from './hero/hero'

export class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Hero}></Route>
          <Route path='/home' component={Layout}></Route>
        </div>
      </Router>
    )
  }
}
