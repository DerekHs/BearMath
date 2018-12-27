import { CREATE_MATRIX, DELETE_MATRIX } from "actions/actions";

export function createMatrix(name, shape, numericValues) {
    console.log(name, shape, numericValues)
    return {
        type: CREATE_MATRIX,
        name,
        shape,
        numericValues
    }
}

export function deleteMatrix(name) {
    return {
        type: DELETE_MATRIX,
        name
    }
}
