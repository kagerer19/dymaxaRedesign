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
