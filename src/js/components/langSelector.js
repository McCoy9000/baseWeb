import '../../css/styles.css'

import React from 'react'

import {Button} from './common/button'
import {FormattedMessage} from 'react-intl'

export class LangSelector extends React.Component {
  render () {
    return (
      <div className='langSelector'>
        <Button value={<FormattedMessage id='langSelector' />} />
      </div>
    )
  }
}
