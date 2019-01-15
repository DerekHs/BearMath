export default class Composite {
    constructor(compositeName, namev, ndarrayv) {
        this.compositeName = compositeName
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