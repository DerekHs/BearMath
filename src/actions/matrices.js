import { UPSERT_MATRIX, RENAME_MATRIX, DELETE_MATRIX } from "actions/actions";


export function upsertMatrix(name, shape, numericValues) {
    return {
        type: UPSERT_MATRIX,
        name,
        shape,
        numericValues
    }
}

export function renameMatrix(name, newName) {
    return {
        type: RENAME_MATRIX,
        name,
        newName
    }
}

export function deleteMatrix(name) {
    return {
        type: DELETE_MATRIX,
        name
    }
}
