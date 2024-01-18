import axios from "axios";
import {toast} from "react-toastify";
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAIL, USER_LOAD_REQUEST, USER_LOAD_SUCCESS, USER_LOAD_FAIL
} from "../constants/userConstants.js";


export const userSignInAction = (user) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST});
    try {
        const {data} = await axios.post("http://localhost:8000/api/signin", user);
        localStorage.setItem('userInfo', JSON.stringify(data));
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        toast.success("Login Successful!");
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}




//Logout action
export const userLogoutAction = () => async (dispatch) => {
    dispatch({type: USER_LOGOUT_REQUEST});
    try {
        const {data} = await axios.get("http://localhost:8000/api/logout");
        localStorage.removeItem('userInfo')
        dispatch({
            type: USER_LOGOUT_SUCCESS,
            payload: data
        });
        toast.success("Logout Successful!");
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

//admin profile action
export const userProfileAction = () => async (dispatch) => {
    dispatch({ type: USER_LOAD_REQUEST });
    try {
        const { data } = await axios.get("http://localhost:8000/api/me");
        dispatch({
            type: USER_LOAD_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

