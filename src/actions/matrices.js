import { CREATE_MATRIX, DELETE_MATRIX } from "./actions";

export const createMatrix = (name, shape, numeric_values) => ({
    type: CREATE_MATRIX,
    name,
    shape,
    numeric_values
})

export const deleteMatrix = (name) => ({
    type: DELETE_MATRIX,
    name
})
