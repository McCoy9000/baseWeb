import '../../css/styles.css'

import React from 'react'

import {Button} from './button'
import {FormattedMessage} from 'react-intl';
import {store} from '../../store/store'
import {changeLang} from '../../actions/langActions'

function switchLanguage () {
  store.dispatch(changeLang)
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
