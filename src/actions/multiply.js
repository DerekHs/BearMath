import { MULTIPLY_BEGIN, MULTIPLY_SUCCESS, MULTIPLY_ERROR} from actions

function multiplyBegin(m1, m2) {
    return {
        type: MULTIPLY_BEGIN,
        m1,
        m2
    }
}

function multiplySuccess(result) {
    return {
        type: MULTIPLY_SUCCESS,
        result
    }
}

function multiplyError(errorMessage) {
    return {
        type: MULTIPLY_ERROR,
        errorMessage
    }
}


