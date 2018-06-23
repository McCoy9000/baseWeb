import it from 'react-intl/locale-data/it'
import es from 'react-intl/locale-data/es'
import {addLocaleData} from 'react-intl'
import {messagesEn} from './messagesEn'
import {messagesIt} from './messagesIt'
import {messagesEs} from './messagesEs'

let browserLocale = navigator.language

export const messages = {
  'en': messagesEn,
  'it': messagesIt,
  'es': messagesEs
}

export const language = browserLocale.split(/[-_]/)[0]

const locales = [...it, ...es]

export const loadLocaleData = () => {
  addLocaleData(locales)
}
