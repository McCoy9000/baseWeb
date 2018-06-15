import '../../css/styles.css'

import React from 'react'

import {LangSelector} from '../langSelector'
import {FormattedMessage} from 'react-intl'

export class Header extends React.Component {
  render () {
    return (
      <div className='header'>
        <h1 className='title'>
          <FormattedMessage id='headerTitle' />
        </h1>
        <h2 className='body'>
          header.body
        </h2>
        <div className='imgDiv'>
          header.imgDiv
        </div>
        <div>
          <LangSelector />
        </div>
      </div>
    )
  }
}
