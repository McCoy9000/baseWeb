import {combineReducers} from 'redux'
import lang from './language/index'

const rootReducer = combineReducers({
  language: lang
})

export default rootReducer
