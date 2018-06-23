import './css/styles.css'

import React from 'react'
import ReactDOM from 'react-dom'

import {App} from './js/app'

import {IntlProvider} from 'react-intl'
import {messages, language, loadLocaleData} from './js/i18n/messages'

loadLocaleData()

ReactDOM.render(
  <div>
    <IntlProvider locale={language} key={language} messages={messages[language]}>
      <App />
    </IntlProvider>
  </div>,

  document.getElementById('root')
)
