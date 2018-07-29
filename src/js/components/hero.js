import '../../css/styles.css'

import React from 'react'

import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import { Image } from './common/image'

export class Hero extends React.Component {
  render() {
    return (
      <div>
        <Link to='/home'><Image src={`/${require('images/hero/hero.jpg')}`} /></Link>
      </div>
    )
  }
}
