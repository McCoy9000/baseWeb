import {CHANGE_LANG} from './types'

export const changeLang = (lang) => ({
  type: CHANGE_LANG,
  newLang: lang
})
