const myDog = {
    "name": "Leta",
    "legs": 4,
    "tails": 1,
    "friends": ["me", "Roman", "Momo"]
};


// "" are not obligatory in objects and can be omitted. " are usually used when there's special symbol or space etc":
const myCat = {
    name: "Momo",
    legs: 4,
    tails: 1,
    friends: ["me", "Roman", "Leta"]
};


//Accessing obj properties with . notation:
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;   

//Accessing obj properties with [] notation (if the property of the object has a space in it, can use also when it doesn't):
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  const entreeValue = testObj2["an entree"];   
  const drinkValue = testObj2["the drink"]