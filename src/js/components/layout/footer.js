import '../../../css/styles.css'

import React from 'react'

import {FormattedMessage} from 'react-intl'

export class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <h1 className='title'>
          <FormattedMessage id='footerTitle' />
        </h1>
        <h2 className='body'>
          <FormattedMessage id='footerTitle' />
        </h2>
        <div className='imgDiv'>
          header.imgDiv
        </div>
      </div>
    )
  }
}
