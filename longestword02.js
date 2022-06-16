function findLongestWordLength(str) {
    let currentWordLength = 0
    let longestWordLength = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            currentWordLength += 1
        }
        else {
            if (currentWordLength > longestWordLength) {
                longestWordLength = currentWordLength
            }
            currentWordLength = 0
        }
    }
    if (currentWordLength > longestWordLength) { //because our last symbol isn't " " we have to compare one more time
        longestWordLength = currentWordLength
    }
    console.log(longestWordLength)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");