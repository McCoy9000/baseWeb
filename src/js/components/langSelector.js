import '../../css/styles.css'

import React from 'react'

import {Button} from './common/button'
import {FormattedMessage} from 'react-intl'

export class LangSelector extends React.Component {

  render (props) {
    return (
      <div className='langSelector'>
        <Button buttonTitle={<FormattedMessage id='langSelectorButton' />} value={<FormattedMessage id='langSelectorValue' />} onClick={this.props.changeLanguage(<FormattedMessage id='langSelectorButton' />)} />
      </div>
    )
  }
}
