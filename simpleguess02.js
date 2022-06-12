let color = "orange";
let yourGuess = [ "white", "orange", "blue"]
let myGuess = ["black", "yellow", "red"]

function colorGuess (arr){
for (let i=0; i<arr.length; i++){
    if (arr[i]==color){
        console.log('Correct')
    }
    else {
        console.log ("Incorrect")
    }
}

}

colorGuess(myGuess)
colorGuess(yourGuess)