import {
    JOB_TYPE_LOAD_FAIL,
    JOB_TYPE_LOAD_REQUEST,
    JOB_TYPE_LOAD_RESET,
    JOB_TYPE_LOAD_SUCCESS
} from "../constants/jobTypeConstants.js";

export const jobType_LoadAction = () => async (dispatch) => {
    dispatch({ type: JOB_TYPE_LOAD_REQUEST });

    try {
        //!TODO {Add dynamic URL for production launch}
        const url = `http://localhost:8000/api/type/jobs`;
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            dispatch({
                type: JOB_TYPE_LOAD_SUCCESS,
                payload: data,
            });
        } else {
            const errorData = await response.json();
            dispatch({
                type: JOB_TYPE_LOAD_FAIL,
                payload: errorData,
            });
        }
    } catch (error) {
        dispatch({
            type: JOB_TYPE_LOAD_RESET,
            payload: error.message,
        });
    }
};
