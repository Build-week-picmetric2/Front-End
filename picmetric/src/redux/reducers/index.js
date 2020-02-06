import { combineReducers } from 'redux'

import { placeholderReducer } from './placeholderReducer';
import { serverReducers } from './serverReducers'

export const reducer = combineReducers({ placeholderReducer: placeholderReducer, serverReducers: serverReducers})