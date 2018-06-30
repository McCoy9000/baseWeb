import it from 'react-intl/locale-data/it'
import es from 'react-intl/locale-data/es'
import {addLocaleData} from 'react-intl'
import {messagesEn} from './messagesEn'
import {messagesIt} from './messagesIt'
import {messagesEs} from './messagesEs'

const messages = {
  'en': messagesEn,
  'it': messagesIt,
  'es': messagesEs
}

const browserLocale = navigator.language

var language = browserLocale.split(/[-_]/)[0]

const locales = [...it, ...es]

const loadLocaleData = () => {
  addLocaleData(locales)
  return locales
}

export function changeLang (newLanguage) {
  this.setState({
    language: newLanguage
  })
}

const changeLanguage = newLanguage => {
  messageSource.language = newLanguage
  return newLanguage
}

export const messageSource = {
  language: language,
  messages: messages,
  changeLanguage: changeLanguage,
  init: loadLocaleData
}
