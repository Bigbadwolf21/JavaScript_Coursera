//The logical AND operator
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

// The logical OR operator
var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);

// The logical NOT operator
var petHungry = true;
console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry);
console.log(petHungry);

/*
var petHungry = true;
petHungry = !petHungry;
*/

//The Modulus operator
console.log(22 % 5);

//The equality operator ==
console.log(3 == 3);
console.log(3 == "3");
console.log(3 == 2);

//The strict equality operator ===
console.log(2 === 2);
console.log(2 === "2");

//The inequality operator !=
console.log(5 != 5);
console.log(5 != 4);

//The strict inequality operator !==
console.log(5 !== 5);
console.log(5 !== 4);

//Strings concatenation with +
console.log("Note" + "book");
console.log(12 + "months");

//The assignment and addition operator
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime);

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); 
