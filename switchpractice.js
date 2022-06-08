
const lowercaseLetter = "a"
switch (lowercaseLetter) { //syntax
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}


function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha"
      break
    case 2:
      answer = "beta"
      break
    case 3:
      answer = "gamma"
      break
    case 4:
      answer = "delta"
      break
  }
  return answer;
}

console.log(caseInSwitch(1));

function switchOfStuff(val) {
  let answer = "";

  switch (val) {
    case "a":
      answer = "apple"
      break
    case "b":
      answer = "bird"
      break
    case "c":
      answer = "cat"
      break
    default:
      answer = "stuff"
      break

  }

  return answer;
}

switchOfStuff(1);
console.log(switchOfStuff(1))


function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low"
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid"
      break
      break;
    case 7:
    case 8:
    case 9:
      answer = "High"
      break
  }

  return answer;
}

console.log(sequentialSizes(1));

function sequentialSizes1(val){
  let answer = ""
  if(val == 1 || val == 2|| val == 3){
    answer = "Low"
  }
  else if (val == 4 || val == 5|| val == 6){
    answer = "Mid"
  }
  else if (val == 7 || val == 8|| val ==9){
    answer = "High"
  }
  return answer
}

console.log(sequentialSizes1(1));

function chainToSwitch(val) {
  let answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break
    case 42:
      answer = "The Answer"
      break
    case 1:
      answer = "There is no #1"
      break
    case 99:
      answer = "Missed me by this much!"
      break
    case 7:
      answer = "Ate Nine";
      break
  }

  return answer;
}

console.log(chainToSwitch(7));