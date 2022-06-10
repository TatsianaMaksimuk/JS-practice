let arr_3   = [4, 6, 7];
let arr_4   = [8, 1, 9];


function arraySums (arr01,arr02){
    let sum1 = 0
    let sumArr= []

for (let i=0; i< arr01.length; i++){

    for (let j=0; j<arr02.length; j++) {
        if (i==j){
            sum1=arr01[i]+arr02[j]

            sumArr.push(sum1)

        }
    }
    console.log(sum1)
    console.log(sumArr)
}
}

arraySums(arr_3,arr_4)
