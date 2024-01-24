import {
    DELETE_JOB_FAIL,
    DELETE_JOB_REQUEST, DELETE_JOB_RESET, DELETE_JOB_SUCCESS,
    JOB_LOAD_FAIL,
    JOB_LOAD_REQUEST,
    JOB_LOAD_RESET,
    JOB_LOAD_SUCCESS,
    REGISTER_JOB_FAIL,
    REGISTER_JOB_REQUEST,
    REGISTER_JOB_RESET,
    REGISTER_JOB_SUCCESS,
    SINGLE_JOB_LOAD_FAIL,
    SINGLE_JOB_LOAD_REQUEST,
    SINGLE_JOB_LOAD_RESET,
    SINGLE_JOB_LOAD_SUCCESS, UPDATE_JOB_FAIL, UPDATE_JOB_REQUEST, UPDATE_JOB_RESET, UPDATE_JOB_SUCCESS
} from "../constants/jobConstants"


//Load Jobs
export const loadJobReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
        case JOB_LOAD_REQUEST:
            return { loading: true }
        case JOB_LOAD_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                page: action.payload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                setUniqueLocation: action.payload.setUniqueLocation,
                employmentTpe: action.payload.employmentTpe,
                jobs: action.payload.jobs
            }
        case JOB_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case JOB_LOAD_RESET:
            return {}
        default:
            return state;
    }
}


//Load single job
export const loadJobSingleReducer = (state = { job: {} }, action) => {
    switch (action.type) {
        case SINGLE_JOB_LOAD_REQUEST:
            return { loading: true }
        case SINGLE_JOB_LOAD_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                singleJob: action.payload.job,
            }
        case SINGLE_JOB_LOAD_FAIL:
            return { loading: false, error: action.payload }
        case SINGLE_JOB_LOAD_RESET:
            return {}
        default:
            return state;
    }

}

//Create job;
export const CreateJobReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_JOB_REQUEST:
            return { loading: true }
        case REGISTER_JOB_SUCCESS:
            return {
                loading: false,
                job: action.payload,
            }
        case REGISTER_JOB_FAIL:
            return { loading: false, error: action.payload }
        case REGISTER_JOB_RESET:
            return {}
        default:
            return state;
    }
}

//Update Job
export const updateJobReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_JOB_REQUEST:
            return { loading: true };
        case UPDATE_JOB_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                job: action.payload.job,
            };
        case UPDATE_JOB_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case UPDATE_JOB_RESET:
            return {};
        default:
            return state;
    }
};

//Delete Job
export const deleteJobReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_JOB_REQUEST:
            return { loading: true }
        case DELETE_JOB_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                message: action.payload.message
            }
        case DELETE_JOB_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case DELETE_JOB_RESET:
            return {}
        default:
            return state;
    }
}