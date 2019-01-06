import { UPSERT_MATRIX, RENAME_MATRIX, DELETE_MATRIX } from "../actions/actions";
import { List, toJS } from "immutable"

const initialState = new List(["import numpy as np"])

const generatedCode = (state = initialState, action) => {
    switch (action.type) {
        case UPSERT_MATRIX:
            return state.push(`${action.name} = np.ndarray(shape=[${action.shape.toJS()}], buffer=np.array([${action.numericValues.map(x => x + '.').toJS()}]), dtype=float)`)
        case RENAME_MATRIX:
            return state.push("renamed")
        case DELETE_MATRIX:
            return state.push("deleted")
        default:
            return state
    }
}

export default generatedCode
