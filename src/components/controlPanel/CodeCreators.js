export function invert(argv) {
    return `np.linalg.inv(${argv[0]})`
}

export function transpose(argv) {
    return `np.transpose(${argv[0]})`
}