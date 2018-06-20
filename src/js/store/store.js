import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/reducers'

const thunk = require('redux-thunk').default

const initialState = {}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk))

export default store
