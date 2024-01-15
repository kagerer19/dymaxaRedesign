import { combineReducers, applyMiddleware, createStore } from 'redux';
import {composeWithDevTools, devToolsEnhancer} from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';
import { loadJobReducer } from './reducers/jobReducer';
import {loadJobTypeReducer} from "./reducers/jobTypeReducer.js";

// combine reducers
const reducer = combineReducers({
   loadJobs: loadJobReducer,
   jobTypeAll: loadJobTypeReducer
});

// initial state
let initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
