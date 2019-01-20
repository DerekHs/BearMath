import { UPSERT_MATRIX, RENAME_MATRIX, DELETE_MATRIX, OPERATION_SUCCESS } from "../actions/actions";
import { OrderedMap } from "immutable"

const initialState = new OrderedMap({
    meaningOfLife: 42,
    weinersConstant: 2
})

const scalars = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default scalars