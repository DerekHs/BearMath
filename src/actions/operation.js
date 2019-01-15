import { OPERATION_BEGIN, OPERATION_SUCCESS, OPERATION_ERROR } from "actions/actions"

export function operationBegin(command, matrixNames, resultVariable) {
    return {
        type: OPERATION_BEGIN,
        command,
        matrixNames,
        resultVariable
    }
}

export function operationSuccess(resultVariable, result) {
    return {
        type: OPERATION_SUCCESS,
        resultVariable,
        result
    }
}

export function operationError(errorMessage) {
    return {
        type: OPERATION_ERROR,
        errorMessage
    }
}


