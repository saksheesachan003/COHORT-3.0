// ------------------------------ Condition Statements -----------------

// <----------- if else statement ----------------->

// var mathMarks = Number(prompt("Enter math marks..."));
// var scienceMarks = Number(prompt("Enter science marks..."));
// var englishMarks = Number(prompt("Enter english marks..."));

// var avg = (mathMarks + scienceMarks + englishMarks) / 3;

// if (avg >= 85) {
//   console.log("Got IT Scholorship");
// } else {
//   console.log("No Scholorship");
// }

// <----------- if else if statement --------------->

var marks = 78;

if (marks >= 85) {
  console.log("A++ ");
} else if (marks >= 70) {
  console.log("A+");
} else if (marks >= 60) {
  console.log("B+");
} else if (marks >= 50) {
  console.log("C+");
} else if (marks >= 40) {
  console.log("D");
} else {
  console.log("Fail");
}

// <------------------- Nested if -------------------->
// <----- age checks from 18 to 60 years ( Using "and" operator) ------------>

// var gender = prompt("Enter your gender....").toUpperCase();
// var age = Number(prompt("Enter your age..."));

// if (gender == "F") {
//   if (age >= 18 && age <= 60) {
//     console.log("Get Free Frebbies");
//   } else {
//     console.log("Not Get Freebies");
//   }
// } else {
//   console.log("Not Eligible ");
// }

// <------------------- Ternary Operator ---------------------->

console.log(10 > 5 ? "Yes" : "No");

// <------------------- Switch Case ---------------------->

var mrks = 65;

switch (true) {
  case mrks > 85:
    console.log("A++");
    break;
  case mrks > 70:
    console.log("A+");
    break;
  case mrks > 60:
    console.log("B+");
    break;
  case mrks > 50:
    console.log("C+");
    break;
  case mrks > 40:
    console.log("D");
    break;
  default:
    console.log("Fail");
}

// <------------------- Loops ---------------------->

// -- While LOOP ( when condition is true, only then run o/w won't run) ---------
var a = 10;

// Decrement ( 10 to 1 )
while (a > 0) {
  console.log(a);
  a--; // 10 to 1
}

// Increment ( 0 to 9)
var b = 0;
while (b < 10) {
  console.log(b);
  b++; // 0 to 9
}

// Print even number ( odd -> !== )

var num = Number(prompt("Enter Your Number...."));
var a = 0;
while (a <= num) {
  if (a % 2 === 0) {
    console.log(a);
  }
  a++;
}

// Ask a user any number and prints its table

// var num = Number(prompt("Enter Your Number...."));
var a = 1;
while (a <= 10) {
  console.log(a * num);
  a++;
}

// -------------- do-while loop ( atleast one time loop run , and then check condition) -------------

var a = 11;
do {
  console.log(a);
  a++;
} while (a < 10);

// ask for password, and if password is correct then run o/w repeat
do {
  var paswd = prompt("Enter Password");
} while (paswd !== "123");
console.log("Welcome");

// -------------- for-loop ( alernative of while, all things in one, variable, condition and increment) ------

for (var a = 1; a <= 5; a++) {
  console.log(a); // 0 to 5
}

for (var a = 1; a <= 10; a++) {
  if (a % 2 != 0) {
    continue;
  }
  console.log(a);
}
