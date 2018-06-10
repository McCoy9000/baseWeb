import '../../css/styles.css'

import React from 'react'

import {FormattedMessage} from 'react-intl'

import {LangSelector} from '../common/langSelector'

export class Header extends React.Component {
  render () {
    return (
      <div className='header'>
        <h1 className='title'>
          <FormattedMessage id='title' />
        </h1>
        <h2 className='body'>
          header.body
        </h2>
        <div className='imgDiv'>
          header.imgDiv
        </div>
        <LangSelector />
      </div>
    )
  }
}
