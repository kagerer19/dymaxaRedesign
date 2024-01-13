import { JOB_LOAD_SUCCESS, JOB_LOAD_REQUEST, JOB_LOAD_FAIL } from "../constants/jobConstants.js";

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
            // Handle the error, e.g., log it or show an error message
            const errorData = await response.json(); // Assuming error response is in JSON format
            dispatch({
                type: JOB_LOAD_FAIL,
                payload: errorData,
            });
        }
    } catch (error) {
        // Handle any other errors (e.g., network issues)
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.message,
        });
    }
};
