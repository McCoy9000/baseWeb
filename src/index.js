import './css/styles.css'

import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import {App} from './js/app'
import {store} from './js/store'
import {ConnectedIntlProvider} from 'js/i18n/ConnectedIntlProvider'
import {IntlProvider, addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import it from 'react-intl/locale-data/it'
import messages_en from 'texts/en.i18n-lang.json'
import messages_it from 'texts/it.i18n-lang.json'

let browserLocale = navigator.language

const messages = {
  'en': messages_en,
  'it': messages_it
}

const language = browserLocale.split(/[-_]/)[0]

addLocaleData([...en, ...it])

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
