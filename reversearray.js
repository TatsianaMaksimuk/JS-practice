function reverse(arr) {
    const result = []
    const initialLength = arr.length
    for (let i = 0; i < initialLength; i++) {
        result.push(arr.pop())
    }

    return result
}

console.log(reverse([1,2,3,4,5]))