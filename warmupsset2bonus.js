//Ex.1 Reverse Number
function reverseNum(num) {
    let numInt = num.toString();
    let reversedNum = "";
    for (let i = numInt.length - 1; i >= 0; i--) {
        reversedNum += numInt[i]
    }
    return parseInt(reversedNum)

}
console.log(reverseNum(5121))


//Ex.2 Video Length in Seconds

function minutesToSeconds(timeStr) {
    let timeArr = timeStr.split(":")
    let min = parseInt(timeArr[0]) * 60
    let sec = parseInt(timeArr[1])
    if (sec > 59) {
        return -1
    } else {
        return min + sec
    }
}
console.log(minutesToSeconds("01:00"))
console.log(minutesToSeconds("13:56"))
console.log(minutesToSeconds("10:60"));

//Ex.3 Difference of Max and Min Numbers in Array

function differenceMaxMin(arr) {
    let min = arr[0];
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        } else if (arr[i] > max) {
            max = arr[i]
        }

    }
    return max - min

}

console.log(differenceMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
console.log(differenceMaxMin([44, 32, 86, 19]));


//Ex.4 Double Letters

function doubleLetters(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < str.length; j++) {
            if (i !== j && str[i] == str[j]) {
                return true
            }

        }

    }
    return false
}

console.log(doubleLetters("loop"))
console.log(doubleLetters("orange"));


//Ex.5 Sort Numbers

function sortNumsAscending(arr) {
   function sort(arrToSort) {
        if (arrToSort.length == 1) {
            return arrToSort;
        }

        let lowest = Math.min(...arrToSort)
        let index = arrToSort.indexOf(lowest)
        arrToSort.splice(index, 1);
        return [lowest, ...sort(arrToSort)];
    }

    return sort(arr);
}


console.log(sortNumsAscending([1, 2, 10, 50, 5]));