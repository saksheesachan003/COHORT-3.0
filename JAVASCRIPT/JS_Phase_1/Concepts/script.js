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
