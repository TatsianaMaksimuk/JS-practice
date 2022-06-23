// Ex1. Reverse boolean

function reverse (boolean){
    return !boolean
}


//Ex2. Get Word Count
function wordCount (str) {
let wordCountArr = str.split(" ")
return wordCountArr.length
}

console.log (wordCount ("Just an example here move along"))
console.log (wordCount ("This is a test") )

//Ex.3 Exists a Number Higher?

function higherNumCheck (arr, n){
    let existsHigher = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>n){
            return existsHigher
            break
        }
    }
    return !existsHigher
}
console.log(higherNumCheck([5, 3, 15, 22, 4], 10))
console.log(higherNumCheck([1, 2, 3, 4, 5], 8))

function countVowels (word){
let count = 0
let vowels = ["a", "e", "i", "o", "u" ]
for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < word.length; j++) {
        if (vowels[i]== word[j] ){
            count +=1
        }
       
    }
    
}
return count
}
console.log(countVowels("Celebration"))