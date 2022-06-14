//js
//Ex.1
function firstElement(arr) {
    return arr[0]
}

console.log(firstElement([1, 2, 3]), firstElement([80, 5, 100]), firstElement([-500, 0, 50]))

//Ex.2
function addition(num) {
    return num + 1
}
console.log(addition(0), addition(9), addition(-3))

//Ex.3
function findIndex(arr, num) {
    return arr.indexOf(num)
}
console.log(findIndex([1, 2, 3, 4], 3), findIndex([2, 4, 6, 8, 10], 8), findIndex([1, 3, 5, 7, 9], 11))

//Ex.4
function minIntoSec(min) {
    return min * 60
}
console.log(minIntoSec(5), minIntoSec(3), minIntoSec(2))

//Ex.5
function giveMeSomething(string) {
    return `Something ${string}`
}

console.log(giveMeSomething("is better than nothing,"), giveMeSomething("Bob Jane,"), giveMeSomething("something"))


//========================================================================================================================================================