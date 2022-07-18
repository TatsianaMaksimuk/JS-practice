//Two Makes Ten
function makesTen(a, b) {
    if (a == 10 || b == 10 || a + b == 10) {
        return true
    }
    return false

}
console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(1, 9));

//Count Syllables
function numberSyllables(str) {
    let syllables = str.split("-")
    return syllables.length

}

console.log(numberSyllables("buf-fet"));
console.log(numberSyllables("beau-ti-ful"));
console.log(numberSyllables("on-o-mat-o-poe-ia"));

//Case Insensitive Comparison
function match(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()) {
        return true
    } else { return false }

}

console.log(match("hello", "hELLo"));
console.log(match("motive", "emotive"));

//H4ck3r Sp34k

function hackerSpeak(str) {
    let hackStr = ""
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
                hackStr += 4;
                break;
            case "i":
                hackStr += 1;
                break;
            case "o":
                hackStr += 0
                break;
            case "e":
                hackStr += 3;
                break;
            case "s":
                hackStr += 5;
                break
            default:
                hackStr += str[i];
        }
    
    }
    return hackStr;
}

console.log(hackerSpeak("javascript is cool") );
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));