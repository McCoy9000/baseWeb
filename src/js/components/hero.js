import '../../css/styles.css'

import React from 'react'

import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

export class Hero extends React.Component {
  render() {
    return (
      <div>
        <h1><FormattedMessage id='hero' /></h1>
        <Link to='/home'><button><FormattedMessage id='home' /></button></Link>
        <button>
          <FormattedMessage id='alert' />
        </button>
      </div>
    )
  }
}
