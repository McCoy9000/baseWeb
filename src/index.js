import './css/styles.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import {App} from './js/app'
import {store} from './js/store/store'
import {ConnectedIntlProvider} from './js/i18n/connectedIntlProvider'
import {messages, language, loadLocaleData} from './js/i18n/messages'

loadLocaleData()

ReactDOM.render(
  <div>
    <Provider store={store}>
      <ConnectedIntlProvider locale={language} key={language} messages={messages[language]}>
        <App />
      </ConnectedIntlProvider>
    </ Provider>
  </div>,

  document.getElementById('root')
)
