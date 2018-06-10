import '../../css/styles.css'
import T from 'i18n-react'
import React from 'react'

import {Route, Link} from 'react-router-dom'

import {Image} from '../common/image'

export class Hero extends React.Component {
  render () {
    return (
      <div>
        <h1>Hero!</h1>
        <Link to='/home'><button>Home</button></Link>
      </div>
    )
  }
}
