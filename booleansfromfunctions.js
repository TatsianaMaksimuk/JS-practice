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

function compare(a,b) {
    if (isLess(a,b)) {
        return -1;
    }
    else if (isEqual(a, b)) {
        return 0;
    }
    else return 1;
}

console.log(isLess(10, 15), isLess1(15, 10))

console.log(compare(5,10))