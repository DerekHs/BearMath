import * as tf from '@tensorflow/tfjs';

import { UPSERT_MATRIX, RENAME_MATRIX, DELETE_MATRIX, MULTIPLY, INVERT } from "../actions/actions";
import { OrderedMap } from "immutable"

const initialState = new OrderedMap({
  "fibonacci_q": tf.tensor([1, 1, 1, 0], [2, 2]),
  "first_fibonacci": tf.tensor([1, 1], [2, 1])
})

const matrices = (state = initialState, action) => {
  switch (action.type) {
    case UPSERT_MATRIX:
      if (state.contains(action.name)) {
        return state.updateIn([action.name], () => tf.tensor(action.numericValues, action.shape))
      }
      return state.set(action.name, tf.tensor(action.numericValues, action.shape))
    case RENAME_MATRIX:
      return state.mapKeys(k => {
        if (k === action.name) {
          return action.newName
        }
        return k
      })
    case DELETE_MATRIX:
      return state.remove(action.name)
    case MULTIPLY:
      let [matrix_1, matrix_2] = [state.get(action.m1), state.get(action.m2)]
      return state.set(action.resultVariable, tf.mul(matrix_1, matrix_2))
    case INVERT:
      let matrix = state.get(action.m1)
      return state.set(action.resultVariable, matrix)
    default:
      return state
  }
}

export default matrices