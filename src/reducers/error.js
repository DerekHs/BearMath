import { OPERATION_BEGIN, OPERATION_SUCCESS } from "../actions/actions";

const initialState = ""

const error = (state = initialState, action) => {
    switch (action.type) {
        case OPERATION_BEGIN:
            return ""
        case OPERATION_SUCCESS:
            if (!action.result.validOperation) {
                return action.result.result
            }
            return state
        default:
            return state
    }
}

export default error