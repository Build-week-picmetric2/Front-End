import { combineReducers } from 'redux'

import { placeholderReducer } from './placeholderReducer';
import { serverReducers } from './serverReducers'
// import { dsReducer } from './dsReducer';

export const reducer = combineReducers({ placeholderReducer: placeholderReducer, serverReducers: serverReducers})