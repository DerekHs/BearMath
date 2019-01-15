import { UPSERT_COMPOSITE, RENAME_COMPOSITE, DELETE_COMPOSITE } from "actions/actions"

export function upsertComposite(compositeName, namev, matrixv) {
    return {
        type: UPSERT_COMPOSITE,
        compositeName,
        namev,
        matrixv
    }
}

export function renameComposite(oldCompositeName, newCompositeName) {
    return {
        type: RENAME_COMPOSITE,
        oldCompositeName,
        newCompositeName
    }
}

export function deleteComposite(compositeName) {
    return {
        type: DELETE_COMPOSITE,
        compositeName
    }
}