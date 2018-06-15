import '../../../css/styles.css'

import React from 'react'
import {Route, IndexRoute} from 'react-router'

import {Portfolio} from '../portfolio'
import {Resume} from '../resume'
import {Contact} from '../contact'
import {Blog} from '../blog'

export class Body extends React.Component {
  render (props) {
    return (
      <div>
        {this.props.children}
        <Route path='/home/portfolio' component={Portfolio}></Route>
        <Route path='/home/resume' component={Resume}></Route>
        <Route path='/home/contact' component={Contact}></Route>
        <Route path='/home/blog' component={Blog}></Route>
      </div>
    )
  }
}
