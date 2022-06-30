//Two Makes Ten
function makesTen(a, b) {
    if (a == 10 ||  b== 10 || a+b ==10 ){
        return true
    }
    return false

}
console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(1, 9) );

//Count Syllables
function numberSyllables(str) {
    let syllables = str.split("-")
    return syllables.length
    
}

console.log(numberSyllables("buf-fet"));
console.log(numberSyllables("beau-ti-ful"));
console.log(numberSyllables("on-o-mat-o-poe-ia"));