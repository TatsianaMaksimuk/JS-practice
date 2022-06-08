//instead of
function isEqual(a, b) {
    if (a === b) {
        return true;
    } else {
        return false
    }
}


// can write
function isEqual1(a, b) {
    return a === b
}

console.log(isEqual(1, 1), isEqual1(2, 1))

//instead of 
function isLess(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}


//can write
function isLess1(a, b) {
    return a < b
}

console.log(isLess(10, 15), isLess1(15, 10))