function letterCounterF() {
    let enteredName = document.getElementById("input").value
    let lettersEntered = document.getElementById("result");
    lettersEntered.innerText = `${enteredName.length}`
    console.log(lettersEntered)
}
