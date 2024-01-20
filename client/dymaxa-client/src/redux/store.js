import { combineReducers, applyMiddleware, createStore } from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';
import {CreateJobReducer, loadJobReducer, loadJobSingleReducer} from './reducers/jobReducer';
import {loadJobTypeReducer} from "./reducers/jobTypeReducer.js";
import {userReducerSignIn, userReducerLogout, userReducerProfile} from "./reducers/UserReducer.js";

// combine reducers
const reducer = combineReducers({
   loadJobs: loadJobReducer,
   singleJob: loadJobSingleReducer,
   jobTypeAll: loadJobTypeReducer,
   signIn: userReducerSignIn,
   logout: userReducerLogout,
   userProfile: userReducerProfile,
   registerJob: CreateJobReducer

});

// initial state
let initialState = {
   signIn: {
      userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
   }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
