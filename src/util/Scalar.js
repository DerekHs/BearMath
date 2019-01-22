export default class Scalar {
    constructor(value) {
        this.value = value
    }

    serialize() {
        return this.value
    }
}