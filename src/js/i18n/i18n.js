import it from 'react-intl/locale-data/it'
import es from 'react-intl/locale-data/es'
import { addLocaleData } from 'react-intl'
import messagesEn from './messagesEn.json'
import messagesIt from './messagesIt.json'

const messages = {
  en: messagesEn,
  it: messagesIt,
}

const browserLocale = navigator.language

const availableLanguages = ['en', 'it']

const fallbackLanguage = 'en'

let language = browserLocale.split(/[-_]/)[0]

if (!availableLanguages.includes(language)) {
  language = fallbackLanguage
}

const localeData = [...it, ...es]

const initialize = function () {
  const locales = localeData
  addLocaleData(locales)
};

const changeLanguage = function (newLanguage) {
  if (availableLanguages.includes(newLanguage)) {
    this.setState({
      language: newLanguage,
      availableLanguage: (function (currentLanguage) {
        switch (currentLanguage) {
          case 'en':
            return 'it'
          case 'it':
            return 'en'
          default:
            return 'en'
        }
      })(newLanguage)
    })
  } else {
    return 'It was not possible to change language'
  }
}

export const messageSource = {
  language: language,
  availableLanguages: availableLanguages,
  messages: messages,
  changeLanguage: changeLanguage,
  init: initialize
}
