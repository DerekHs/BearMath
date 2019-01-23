import { OPERATION_BEGIN, OPERATION_SUCCESS, OPERATION_ERROR } from "../actions/actions";

const initialState = false

const loading = (state = initialState, action) => {
    switch (action.type) {
        case OPERATION_BEGIN:
            return true
        case OPERATION_SUCCESS:
            return false
        case OPERATION_ERROR:
            return "error"
        default:
            return state
    }
}

export default loading