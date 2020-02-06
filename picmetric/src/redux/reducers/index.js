import { combineReducers } from 'redux'

import { serverReducer } from './serverReducers'

export const reducers = combineReducers({ serverReducers: serverReducer })