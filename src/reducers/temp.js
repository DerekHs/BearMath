import { OPERATION_BEGIN, OPERATION_SUCCESS, CLEAR_TEMP } from "../actions/actions";

import Ndarray from "util/Ndarray"
import Tuple from "util/Tuple"
import Scalar from "util/Scalar"

const initialState = null

const temp = (state = initialState, action) => {
    switch (action.type) {
        case OPERATION_BEGIN:
            return null
        case OPERATION_SUCCESS:
            if (action.result.validOperation) {
                var dataTypeObjectPair
                switch (action.result.dataType) {
                    case "NDARRAY": {
                        dataTypeObjectPair = ["NDARRAY", new Ndarray(action.result.result.numericValues, action.result.result.shape)]
                        break
                    }
                    case "TUPLE": {
                        dataTypeObjectPair = ["TUPLE", new Tuple(action.misc.namev, action.result.result.map(entry =>
                            new Ndarray(entry.numericValues, entry.shape)))]
                        break
                    }
                    case "SCALAR": {
                        dataTypeObjectPair = ["SCALAR", new Scalar(action.result.result)]
                        break
                    }
                    default:
                        break
                }
                return [action.resultVariable, dataTypeObjectPair]
            } else {
                return state
            }
        case CLEAR_TEMP:
            return null
        default:
            return state
    }
}

export default temp