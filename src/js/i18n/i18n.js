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
}

const changeLanguage = (newLanguage) => {
	this.language = newLanguage
}

export messageSource = {
	language: language,
	messages: messages,
	init: loadLocaleData,
	changeLanguage: changeLanguage.bind(this)
}