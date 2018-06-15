import '../../css/styles.css'

import React from 'react'

import {changeLang} from '../actions/langActions'
import {Button} from './button'
import { FormattedMessage } from 'react-intl';

function switchLanguage () {
  store.
}

export class LangSelector extends React.Component {
  render () {
    return (
      <div className='langSelector'>
        <Button buttonTitle={<FormattedMessage id='langSelector' />} onClick={switchLanguage}/>
      </div>
    )
  }
}
