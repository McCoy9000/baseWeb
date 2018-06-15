import {combineReducers} from 'redux'
import langReducer from './langReducer'

const rootReducer = combineReducers({
  langs: langReducer
})

export default rootReducer
