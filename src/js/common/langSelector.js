import '../../css/styles.css'

import React from 'react'

import {Button} from './button'
import { FormattedMessage } from 'react-intl';

const switchLocale = function (props) {
  let locale = navigator.language.split(/[-_]/)[0]

  if (locale === 'en') {
    props.locale = 'it'
    props.key = 'it'
  } else {
    props.locale = 'en'
    props.key = 'en'
  }
}

export class LangSelector extends React.Component {
  render () {
    return (
      <div className='langSelector'>
        <Button buttonTitle={<FormattedMessage id= 'langSelector' />} onClick={switchLocale}/>
      </div>
    )
  }
}
