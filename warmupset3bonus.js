//Area of a Triangle

function triArea(base, height) {
    return (base * height) / 2
}

console.log(triArea(3, 2));
console.log(triArea(7, 4));

//Multiple of 100
function divisible(n) {
    if (n % 100 == 0) {
        return true
    }
    return false
}
console.log(divisible(1));
console.log(divisible(1000));


//Capture the Rook -Two rooks can attack each other if they share the same row (letter) or column (number).
//Write a function that returns true if two rooks can attack each other, and false otherwise

function canCapture(positionsArr) {
let positionA = positionsArr[0]
let positionB = positionsArr[1]    
if (positionA[0] == positionB[0] || positionA[1] == positionB[1]){
    return true
}
return false
}

console.log(canCapture(["A8", "E8"]));
console.log(canCapture(["A1", "B2"]));
console.log(canCapture(["H4", "H3"]));