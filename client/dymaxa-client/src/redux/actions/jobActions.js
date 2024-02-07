import {
    JOB_LOAD_SUCCESS,
    JOB_LOAD_REQUEST,
    JOB_LOAD_FAIL,
    SINGLE_JOB_LOAD_REQUEST,
    SINGLE_JOB_LOAD_SUCCESS,
    SINGLE_JOB_LOAD_FAIL,
    REGISTER_JOB_REQUEST,
    REGISTER_JOB_SUCCESS,
    REGISTER_JOB_FAIL,
    DELETE_JOB_REQUEST, DELETE_JOB_SUCCESS, DELETE_JOB_FAIL, UPDATE_JOB_REQUEST, UPDATE_JOB_SUCCESS, UPDATE_JOB_FAIL
} from "../constants/jobConstants.js";
import axios from "axios";
import { toast } from "react-toastify";

// Define your API base URL
const BASE_URL =  "https://dymaxa-redesign.vercel.app";

//Load jobs
//Load jobs
export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });

    try {
        const url = `${BASE_URL}/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`;
        console.log('Request URL:', url); // Log the request URL
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.text();
            console.log('Response:', data); // Log the response
            try {
                const jsonData = JSON.parse(data); // Attempt to parse as JSON
                dispatch({
                    type: JOB_LOAD_SUCCESS,
                    payload: jsonData,
                });
            } catch (error) {
                console.error('Error parsing JSON:', error);
                dispatch({
                    type: JOB_LOAD_FAIL,
                    payload: 'Error parsing JSON response',
                });
            }
        } else {
            const errorData = await response.text();
            console.error('Error response:', errorData);
            dispatch({
                type: JOB_LOAD_FAIL,
                payload: errorData,
            });
        }
    } catch (error) {
        console.error('Fetch error:', error);
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.message,
        });
    }
};


//Load single job
export const loadSingleJobAction = (id) => async (dispatch) => {
    dispatch({ type: SINGLE_JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`${BASE_URL}/api/job/${id}`);
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

//Create a job
export const createAJobAction = (job) => async (dispatch) => {
    dispatch({ type: REGISTER_JOB_REQUEST })

    try {
        const { data } = await axios.post(`${BASE_URL}/api/job/create`, job)
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

// Update a job by ID
export const updateJobAction = (id, updateValues) => async (dispatch) => {
    dispatch({ type: UPDATE_JOB_REQUEST });
    try {
        const { data } = await axios.put(`${BASE_URL}/api/job/update/${id}`, updateValues);
        console.log('Update Payload:', updateValues);
        dispatch({
            type: UPDATE_JOB_SUCCESS,
            payload: data,
        });
        toast.success('Job updated successfully');
    } catch (error) {
        dispatch({
            type: UPDATE_JOB_FAIL,
            payload: error.response.data.error,
        });
        toast.error(error.response.data.error);
    }
};

// delete a job by ID
export const deleteSingleJobAction = (job_id) => async (dispatch) => {
    dispatch({ type: DELETE_JOB_REQUEST });
    try {
        const { data } = await axios.delete(`${BASE_URL}/api/job/delete/${job_id}`);
        dispatch({
            type: DELETE_JOB_SUCCESS,
            payload: data
        });
        toast.success("Job deleted successfully");
    } catch (error) {
        dispatch({
            type: DELETE_JOB_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}
