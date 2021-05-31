import { combineReducers } from 'redux'
import AppReducer from './reducers/AppReducer'

export const mainReducer = combineReducers({
  App: AppReducer
})

export type IRootState = ReturnType<typeof mainReducer>