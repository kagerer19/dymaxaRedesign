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
import {toast} from "react-toastify";


export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });

    try {
        const response = await axios.get(`https://dymaxa-redesign.vercel.app/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`);

        if (response.status === 200) {
            const contentType = response.headers['content-type'];
            if (contentType && contentType.includes('application/json')) {
                const data = response.data;
                dispatch({
                    type: JOB_LOAD_SUCCESS,
                    payload: data,
                });
            } else {
                dispatch({
                    type: JOB_LOAD_FAIL,
                    payload: 'Response is not valid JSON',
                });
            }
        } else {
            dispatch({
                type: JOB_LOAD_FAIL,
                payload: 'Failed to load jobs',
            });
        }
    } catch (error) {
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
        const { data } = await axios.get(`https://dymaxa-redesign.vercel.app/api/job/${id}`);
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
        const { data } = await axios.post("https://dymaxa-redesign.vercel.app/api/job/create", job)
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

export const updateJobAction = (id, updateValues) => async (dispatch) => {
    dispatch({ type: UPDATE_JOB_REQUEST });

    try {
        const { data } = await axios.put(`https://dymaxa-redesign.vercel.app/api/job/update/${id}`, updateValues);
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
        const { data } = await axios.delete(`https://dymaxa-redesign.vercel.app/api/job/delete/${job_id}`);
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