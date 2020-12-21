import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'