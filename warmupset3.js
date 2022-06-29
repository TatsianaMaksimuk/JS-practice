//Return the Sum of Two Numbers

function SumOfTwoNumbers(num1, num2) {
    return num1 + num2

}
console.log(SumOfTwoNumbers(3, 2))
console.log(SumOfTwoNumbers(-3, -6))

//Are the Numbers Equal?


function isSameNum(num1, num2) {
    if (num1 == num2) {
        return true
    }
    return false
}

console.log(isSameNum(4, 8));
console.log(isSameNum(2, 2));

//Convert Age to Days

function calcAge(age) {
    return age * 365
}

console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));

//Name Greeting!
function helloName(name) {
    return `Hello ${name}!`
}

console.log(helloName("Gerald"));

//Reverse the Order of a String
function reverse(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]


    }
    return reversed
}

console.log(reverse("Hello World"));
console.log(reverse("The quick brown fox."));