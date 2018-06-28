import '../../css/styles.css'

import React from 'react'

import {Button} from './common/button'
import {FormattedMessage} from 'react-intl'

export class LangSelector extends React.Component {

  render (props) {
    return (
      <div className='langSelector'>
        <Button buttonTitle={<FormattedMessage id='langSelectorButton' />} value='en' onClick={this.props.changeLanguage('en')} />
      </div>
    )
  }
}
