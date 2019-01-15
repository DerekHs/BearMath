export function invert(argv) {
    return `np.linalg.inv(${argv[0]})`
}

export function transpose(argv) {
    return `np.transpose(${argv[0]})`
}

export function add(argv) {
    return `np.add(${argv[0]}, ${argv[1]})`
}

export function subtract(argv) {
    return `np.subtract(${argv[0]}, ${argv[1]})`
}

export function multiply(argv) {
    return `np.dot(${argv[0]}, ${argv[1]})`
}