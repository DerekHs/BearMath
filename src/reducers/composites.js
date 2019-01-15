import { OrderedMap } from "immutable"

import Ndarray from "util/Ndarray"
import Composite from "util/Composite"

const ndarrayv = [new Ndarray([1, 1, 1, 0], [2, 2]), new Ndarray([1, 1, 1, 4], [2, 2]), new Ndarray([1, 1, 1, 4], [2, 2])]
const namev = ["sasuke", "sakura", "naruto"]

const initialState = new OrderedMap({
    ninjas: new Composite("naruto", namev, ndarrayv),
    samurai: new Composite("naruto", namev, ndarrayv)
})

const matrices = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default matrices
