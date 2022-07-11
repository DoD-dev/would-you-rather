import { combineReducers } from 'redux'
import authendUser from './authendUser'
import users from './users'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  authendUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
})