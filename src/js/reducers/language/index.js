import {CHANGE_LANG} from '../../actions/types'

const initialState = {
  language: navigator.language
}

export default function lang (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANG:
      return Object.assign({}, state, {
        language: action.language
      })
    default:
      return state
  }
}
