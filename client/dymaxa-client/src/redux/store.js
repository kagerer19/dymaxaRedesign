import { combineReducers, applyMiddleware, createStore } from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';
import {
   CreateJobReducer,
   deleteJobReducer,
   loadJobReducer,
   loadJobSingleReducer,
   updateJobReducer
} from './reducers/jobReducer';
import {userReducerSignIn, userReducerLogout, userReducerProfile} from "./reducers/UserReducer.js";

// combine reducers
const reducer = combineReducers({
   loadJobs: loadJobReducer,
   singleJob: loadJobSingleReducer,
   signIn: userReducerSignIn,
   logout: userReducerLogout,
   userProfile: userReducerProfile,
   registerJob: CreateJobReducer,
   deleteJob: deleteJobReducer,
   updateJob: updateJobReducer,

});

// initial state
let initialState = {
   signIn: {
      userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
   }
};

console.log(initialState)

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
