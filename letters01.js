let letterArray = [
    {
        letter: 'A'
    },
    {
        letter: 'B'
    },
    {
        letter: 'C'
    },
    {
        letter: 'D'
    },
    {
        letter: 'E'
    }
]

//counter

let c = 0

//function display next letter

function nextLetter () {
    if (c <letterArray.length){
        document.getElementById("header").innerText = letterArray[c].letter
        c++
    } else {
        document.getElementById("header").innerText = "No letters"
    }
}

nextLetter()