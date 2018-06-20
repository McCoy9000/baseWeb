import '../../css/styles.css'

import React from 'react'

import {Button} from './common/button'
import {FormattedMessage} from 'react-intl'
import {store} from '../store/store'
import {changeLang} from '../actions/langActions'

const state = store.getState()

function switchLanguage () {
  if (state.language === 'en') {
    store.dispatch(changeLang('it'))
  } else {
    store.dispatch(changeLang('en'))
  }
}

export class LangSelector extends React.Component {
  render () {
    return (
      <div className='langSelector'>
        <Button value={<FormattedMessage id='langSelector' />} onClick={switchLanguage}/>
      </div>
    )
  }
}
