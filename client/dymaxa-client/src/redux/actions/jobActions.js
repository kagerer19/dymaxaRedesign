import {
    JOB_LOAD_SUCCESS,
    JOB_LOAD_REQUEST,
    JOB_LOAD_FAIL,
    SINGLE_JOB_LOAD_REQUEST,
    SINGLE_JOB_LOAD_SUCCESS, SINGLE_JOB_LOAD_FAIL, REGISTER_JOB_REQUEST, REGISTER_JOB_SUCCESS, REGISTER_JOB_FAIL
} from "../constants/jobConstants.js";
import axios from "axios";
import {toast} from "react-toastify";

export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });

    try {
        //!TODO {Add dynamic URL for production launch}
        const url = `http://localhost:8000/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`;
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            dispatch({
                type: JOB_LOAD_SUCCESS,
                payload: data,
            });
        } else {
            const errorData = await response.json();
            dispatch({
                type: JOB_LOAD_FAIL,
                payload: errorData,
            });
        }
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.message,
        });
    }
};


export const jobLoadSingleAction = (id) => async (dispatch) => {
    dispatch({ type: SINGLE_JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`http://localhost:8000/api/job/${id}`);
        dispatch({
            type: SINGLE_JOB_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: SINGLE_JOB_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

export const registerAjobAction = (job) => async (dispatch) => {
    dispatch({ type: REGISTER_JOB_REQUEST })

    try {
        const { data } = await axios.post("/api/job/create", job)
        dispatch({
            type: REGISTER_JOB_SUCCESS,
            payload: data
        })
        toast.success("Job created successfully");

    } catch (error) {
        dispatch({
            type: REGISTER_JOB_FAIL,
            payload: error.response.data.error
        })
        toast.error(error.response.data.error);
    }
}