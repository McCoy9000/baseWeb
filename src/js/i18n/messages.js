import {addLocaleData} from 'react-intl'
import {en} from 'react-intl/locale-data/en'
import {it} from 'react-intl/locale-data/it'
import {messagesEn} from './messagesEn'
import {messagesIt} from './messagesIt'

let browserLocale = navigator.language

export const messages = {
  'en': messagesEn,
  'it': messagesIt
}

export const language = browserLocale.split(/[-_]/)[0]

export const loadLocaleData = () => {
  addLocaleData([...en, ...it])
}
