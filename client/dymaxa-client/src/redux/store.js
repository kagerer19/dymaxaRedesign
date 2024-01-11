import { combineReducers, applyMiddleware, createStore } from 'redux';
import {composeWithDevTools, devToolsEnhancer} from '@redux-devtools/extension';
import {thunk} from 'redux-thunk'; // Change the import statement
import { loadJobReducer } from './reducers/jobReducer';

// combine reducers
const reducer = combineReducers({
   loadJobs: loadJobReducer,
});

// initial state
let initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
