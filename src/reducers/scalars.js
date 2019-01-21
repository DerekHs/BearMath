import { UPSERT_SCALAR, RENAME_SCALAR, DELETE_SCALAR, OPERATION_SUCCESS } from "../actions/actions";
import { OrderedMap } from "immutable"

const initialState = new OrderedMap({
    LegendresConstant: 1.
})

const scalars = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default scalars