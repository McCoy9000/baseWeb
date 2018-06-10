import './css/styles.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './js/app'

import {IntlProvider} from 'react-intl'

let browserLocale = navigator.language

ReactDOM.render(
  <div>
    <IntlProvider locale={browserLocale} key={browserLocale} messages={require('texts/' + browserLocale.split('-')[0] + '.18n-lang.js')}>
      <App />
    </IntlProvider>
  </div>,

  document.getElementById('root')
)
