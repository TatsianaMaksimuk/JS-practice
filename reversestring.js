
function reverseString(str) {
   let array = []
    for (let i = str.length - 1; i >= 0; i--) {
        array.push(str[i])


    }
    let result ="";
    for (j = 0; j < array.length; j++) {
        result += array[j]
    }
    return result;
}

const result = reverseString("hello");
console.log(result);
