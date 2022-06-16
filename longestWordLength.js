function findLongestWordLength(str) {
    const words = str.split(' ')
    let longestLength = 0
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestLength) {
            longestLength = words[i].length
        }
    }
    return longestLength
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

//The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.