let pin = 0704;
let yourGuess = [3544, 4444, 3205, 0704]


console.log (`Please make your guess:  ${yourGuess} `)
for (i=0; i<yourGuess.length; i++){
    if (yourGuess[i]==pin) {
        console.log ('That was correct!')
    }
    else{
        console.log ('Sorry that was wrong.')}
}