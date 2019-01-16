import { OPERATION_BEGIN, OPERATION_SUCCESS, OPERATION_ERROR } from "actions/actions"

export function operationBegin(command, dataNames, dataTypes, resultVariable, misc) {
    return {
        type: OPERATION_BEGIN,
        command,
        dataNames,
        dataTypes,
        resultVariable,
        misc
    }
}

export function operationSuccess(resultVariable, result, misc) {
    return {
        type: OPERATION_SUCCESS,
        resultVariable,
        result,
        misc
    }
}

export function operationError(errorMessage) {
    return {
        type: OPERATION_ERROR,
        errorMessage
    }
}


