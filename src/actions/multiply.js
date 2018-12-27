import { MULTIPLY_BEGIN, MULTIPLY_SUCCESS, MULTIPLY_ERROR } from "actions/actions"

export function multiplyBegin(m1, m2, resultVariable) {
    return {
        type: MULTIPLY_BEGIN,
        m1,
        m2,
        resultVariable
    }
}

export function multiplySuccess(result) {
    console.log(result + " yay, request succeeded")
    return {
        type: MULTIPLY_SUCCESS,
        result
    }
}

export function multiplyError(errorMessage) {
    return {
        type: MULTIPLY_ERROR,
        errorMessage
    }
}


