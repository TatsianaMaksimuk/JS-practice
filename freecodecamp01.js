
function abTest(a, b) {
    let error = "error"
    if (a < 1 || b < 0) {
        return error
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2), abTest(0, 2))

/////////////////////////////////////////////////////////////////////////////


function findLongestWordLength(string) {
    let words = string.split(' ')
    let longest = 0

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length
        }

    }

    return longest;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

function findLongestWordLength2(str) {
    let longest = 0
    let current = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            current += 1
            if (current > longest) {
                longest = current
            }
        } else {
            current = 0
        }

    }
    return longest;
}
console.log(findLongestWordLength2("The quick brown fox jumped over the lazy dog"))

/////////////////////////////////////////////////////////////////////////////

function largestNumber(arr) {
    let highest = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > highest) {
                highest = arr[i][j]
            }

        }

    }
    return highest
}

console.log(largestNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

////////////////////////////////////////////////////////////////////////////////////////////////////

function largestOfFour(arr) {
    let highestNumbers = []
    let highest = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > highest) {
                highest = arr[i][j]
            }
        }
        highestNumbers.push(highest)
        highest = 0

    }
    return highestNumbers
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))

function largestOfFour2(arr) {
    let highestNumbers =[]
    let highest = Number.NEGATIVE_INFINITY
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr [i][j]> highest){
                highest = arr [i][j]
            }
          

            
        }
        highestNumbers.push(highest)
        highest = Number.NEGATIVE_INFINITY
        
    }
    return highestNumbers
  }


console.log(largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour2([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))