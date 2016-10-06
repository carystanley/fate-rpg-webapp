import { combineReducers } from 'redux'
import history from './history'
import app from './app'

const reducers = combineReducers({
  history,
  app
})

export default reducers
