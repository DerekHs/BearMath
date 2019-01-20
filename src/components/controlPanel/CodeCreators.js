export function invert(argv) {
    return `np.linalg.inv(${argv[0]})`
}
export const invertTypes = ["NDARRAY"]

export function transpose(argv) {
    return `np.transpose(${argv[0]})`
}
export const transposeTypes = ["NDARRAY"]

export function add(argv) {
    return `np.add(${argv[0]}, ${argv[1]})`
}
export const addTypes = ["NDARRAY", "NDARRAY"]

export function subtract(argv) {
    return `np.subtract(${argv[0]}, ${argv[1]})`
}
export const subtractTypes = ["NDARRAY", "NDARRAY"]

export function multiply(argv) {
    return `np.dot(${argv[0]}, ${argv[1]})`
}
export const multiplyTypes = ["NDARRAY", "NDARRAY"]

export function svd(argv) {
    return `np.linalg.svd(${argv[0]}, full_matrices=False)`
}
export const svdTypes = ["NDARRAY"]

export function eigenvectors(argv) {
    return `np.linalg.eig(${argv[0]})`
}
export const eigenvectorsTypes = ["NDARRAY"]