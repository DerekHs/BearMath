import { OPERATION_SUCCESS } from "../actions/actions";
import { OrderedMap } from "immutable"

import Ndarray from "util/Ndarray"
import Composite from "util/Composite"

const ndarrayv = [new Ndarray([1, 1, 1, 0], [2, 2]), new Ndarray([1, 1, 1, 4], [2, 2]), new Ndarray([1, 1, 1, 4], [2, 2])]
const namev = ["sasuke", "sakura", "naruto"]

const initialState = new OrderedMap({
    ninjas: new Composite(namev, ndarrayv)
})

const matrices = (state = initialState, action) => {
    switch (action.type) {
        case OPERATION_SUCCESS:
            if (action.result.validOperation && action.result.dataType === 'TUPLE') {
                console.log(action)
                let namev = action.misc.namev
                let ndarrayv = action.result.result
                if (state.contains(action.result.resultVariable)) {
                    return state.updateIn([action.resultVariable], () => new Composite(namev, ndarrayv))
                }
                return state.set(action.resultVariable, new Composite(namev, ndarrayv))
            }
            return state
        default:
            return state
    }
}

export default matrices
