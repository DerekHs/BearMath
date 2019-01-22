export default class Ndarray {
    constructor(numericValues, shape) {
        this.numericValues = numericValues;
        this.shape = shape;
    }

    rows() {
        return this.shape[0]
    }

    cols() {
        return this.shape[1]
    }

    toMap() {
        return { numericValues: this.numericValues, shape: this.shape }
    }
}