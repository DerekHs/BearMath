export default class Composite {
    constructor(namev, ndarrayv) {
        this.namev = namev
        this.ndarrayv = ndarrayv
    }

    get size() {
        return this.namev.length
    }

    get nameMatrixPairs() {
        return this.namev.map((e, i) => {
            return [e, this.ndarrayv[i]];
        });
    }
}