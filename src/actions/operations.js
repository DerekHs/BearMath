import * as actions from "actions/actions"

export function multiply(m1, m2, resultVariable) {
    return {
        type: actions.MULTIPLY,
        m1,
        m2,
        resultVariable
    }
}

export function invert(m1, resultVariable) {
    return {
        type: actions.INVERT,
        m1,
        resultVariable
    }
}




