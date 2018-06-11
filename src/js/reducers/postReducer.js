import {CHANGE_LANG} from '../actions/types'

const initialState = {
  locale: 'en'
}

export default function (state = initialState, action) {
  switch (action) {
    case CHANGE_LANG:
      return state
    default:
      return state
  }
}
