import './css/styles.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './js/app'

import {IntlProvider, addLocaleData} from 'react-intl'
import messages_en from 'texts/en.i18n-lang.json'
import messages_it from 'texts/it.i18n-lang.json'

let browserLocale = navigator.language

const messages = {
  'en': messages_en,
  'it': messages_it
}

const language = 'en' //browserLocale.split(/[-_]/)[0]

//addLocaleData([...locale_en, ...locale_it])

ReactDOM.render(
  <div>
    <IntlProvider locale={language} key={browserLocale} messages={messages[language]}>
      <App />
    </IntlProvider>
  </div>,

  document.getElementById('root')
)
