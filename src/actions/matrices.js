import { CREATE_MATRIX, DELETE_MATRIX } from "./actions";

export const createMatrix = (name, shape, numericValues) => ({
    type: CREATE_MATRIX,
    name,
    shape,
    numericValues
})

export const deleteMatrix = (name) => ({
    type: DELETE_MATRIX,
    name
})
