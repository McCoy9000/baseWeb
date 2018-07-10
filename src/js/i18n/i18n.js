import it from 'react-intl/locale-data/it'
import es from 'react-intl/locale-data/es'
import { addLocaleData } from 'react-intl'
import { messagesEn } from './messagesEn'
import { messagesIt } from './messagesIt'
import { messagesEs } from './messagesEs'

const messages = {
  en: messagesEn,
  it: messagesIt,
  es: messagesEs
}

const browserLocale = navigator.language

let language = browserLocale.split(/[-_]/)[0]

const availableLanguages = ['en', 'es', 'it']

const localeData = [...it, ...es]

const initialize = function () {
  const locales = localeData
  addLocaleData(locales)
};

const changeLanguage = function (newLanguage) {
  this.setState({
    language: newLanguage,
    // availableLanguage: (function (currentLanguage) {
    //   switch (currentLanguage) {
    //     case 'en':
    //       return 'it'
    //     case 'it':
    //       return 'en'
    //     default:
    //       return 'en'
    //   }
    // })(newLanguage)
  })
}

export const messageSource = {
  language: language,
  availableLanguages: availableLanguages,
  messages: messages,
  changeLanguage: changeLanguage,
  init: initialize
}
