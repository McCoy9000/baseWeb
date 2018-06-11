import {combineReducer} from 'redux'
import postReducer from './postReducer'
import { combineReducers } from '../../../node_modules/redux/index'

export default combineReducers({
  posts: postReducer
})
