import { UPSERT_MATRIX, RENAME_MATRIX, DELETE_MATRIX, OPERATION_SUCCESS } from "../actions/actions";
import { OrderedMap } from "immutable"

import Ndarray from "util/Ndarray"
import Tuple from "util/Tuple"
import Scalar from "util/Scalar"

const ndarrayv = [new Ndarray([1, 1, 1, 0], [2, 2]), new Ndarray([1, 1, 1, 4], [2, 2]), new Ndarray([1, 1, 1, 4], [2, 2])]
const namev = ["charmander", "bulbasaur", "squirtle"]

// const initialState = new OrderedMap({
//   exampleScalar: ["SCALAR", new Scalar(5)],
//   exampleNdarray: ["NDARRAY", new Ndarray([1, 2, 3, 4], [2, 2])],
//   exampleTuple: ["TUPLE", new Tuple(namev, ndarrayv)]
// })

const initialState = new OrderedMap({
  exampleNdarray: ["NDARRAY", new Ndarray([1, 2, 3, 4], [2, 2])],
})

const values = (state = initialState, action) => {
  var dataTypeObjectPair
  switch (action.type) {
    case UPSERT_MATRIX:
      dataTypeObjectPair = ["NDARRAY", new Ndarray(action.numericValues, action.shape)]
      return upsert(state, action.name, dataTypeObjectPair)
    case RENAME_MATRIX:
      return state.mapKeys(k => {
        if (k === action.name) {
          return action.newName
        }
        return k
      })
    case DELETE_MATRIX:
      return state.remove(action.name)
    case OPERATION_SUCCESS:
      if (action.result.validOperation && action.misc.save) {
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
        return upsert(state, action.resultVariable, dataTypeObjectPair)
      } else {
        return state
      }
    default:
      return state
  }
}

function upsert(state, name, dataTypeObjectPair) {
  if (state.contains(name)) {
    return state.updateIn([name], () => dataTypeObjectPair)
  }
  return state.set(name, dataTypeObjectPair)
}

export default values
