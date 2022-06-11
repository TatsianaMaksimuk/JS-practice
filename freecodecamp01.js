
function abTest(a, b) {
    let error
    if (a < 1 || b < 0) {
        return error
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2), abTest(0, 2))

/////////////////////////////////////////////////////////////////////////////

