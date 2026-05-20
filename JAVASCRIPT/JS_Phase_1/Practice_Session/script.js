// <------------------------------------ Console & Basics ----------------------------------> ////////////////////////

// Ques 1 :)  Print "Hello JavaScript" in the console.
console.log("Hello JavaScript");

// Ques 2 :) Print your name, age, and city using one console.log().
console.log(`Name : Sakshee Sachan, Age: 22, City: Noida `);

// Ques 3 :) Print a warning message using console.warn().
console.warn("This is warning, can't access page!");

// Ques 3 :) Print an error message using console.error().
console.error("This is Error, Solve as fast as possible!");

// Ques 4 :) Use console.table() to display an array of 5 numbers.
console.table([10, 20, 30, 40, 50]);

// <------------------------------------ Variables --------------------------------------> ///////////////////////////////////

// Ques 1 :) Create a variable called studentName and store your name in it.
var studentName = "Sakshee Sachan";

// Ques 2 :) Create a variable age and print it.
var age = 22;
console.log(`Ag: ${age}`);

// Ques 3 :) Create two variables and swap their values.
var a = 10;
var b = 20;
var temp = a;
a = b;
b = temp;
console.log(`a: ${a}, b: ${b}`);

// Ques 4 :) Create a constant variable for PI and print it.
const PI = 3.14;
console.log(`PI: ${PI}`);

// Ques 5 :) Declare a variable without assigning a value and print it.
var x;
console.log(`x: ${x}`);

// Ques 6 :) Create a variable score and increase it by 10.Create a variable score and increase it by 10.
var score = 10;
score += 10;
console.log(`Score: ${score}`);

// Ques 7 :) Create three variables for first name, last name, and full name.
var firstName = "Sakshee ";
var lastName = "Sachan";
var fullName = firstName + lastName;
console.log(`Full Name: ${fullName}`);

// <------------------------------------ Data Types --------------------------------------> ///////////////////////////////////

// Ques 1 :) Create variables of type string, number, boolean, null, and undefined.
var str = "Ritika";
var num = 43;
var bool = true;
var nul = null;
var undef = undefined;

// Ques 2 :) Check the type of different variables using typeof. (null -> undefinied)
console.log(
  `Str: ${typeof str}, Num: ${typeof num}, Bool: ${typeof bool}, Nul: ${typeof nul}, Undef: ${typeof undef}`,
);

// Ques 3 :) Store your mobile number in a variable and check its type.
var mobNo = 1234567890;
console.log(`MobNo: ${typeof mobNo}`);

// Ques 4 :) Create a variable with value null and check its type.
var val = null;
console.log(`Val: ${typeof val}`); // object

// Ques 5 :) Create a bigint number and print it.
var bigInt = 12345678901234567890n;
console.log(`BigInt: ${bigInt}, typeof: ${typeof bigInt}`);

// <------------------------------------ Type Conversion & Coercion --------------------------------------> ///////////////////////////////////

// Ques 1 :) Convert the string "50" into a number.
console.log(Number("50"));

// Ques 2 :) Convert the number 100 into a string.
console.log(String(100));

// Ques 3 :) Convert "true" into a boolean.
console.log(Boolean("true"));

// Ques 4 :) Check the output of:
// - `"5" + 2`
// - `"5" - 2`
// - `true + 1`
console.log("5" + 2); // "5" + "2" -> "52" (concatenation)
console.log("5" - 2); // 3
console.log(true + 1); // 1 + 1 -> 2

// Ques 5 :) Create a variable with value "123abc" and convert it into a number.
console.log(Number("123abc")); // NaN

// Ques 6 :) Use parseInt() on "500px".
console.log(parseInt("500px")); // 500

// <------------------------------------ Operators --------------------------------------> ///////////////////////////////////

// Ques 1 :) Add two numbers and print the result.
console.log(10 + 20);

// Ques 2 :) Find the remainder when 25 is divided by 4.
console.log(25 % 4);

// Ques 3 :) Find the square of a number using exponent operator.
console.log(2 ** 2);

// Ques 4 :) Increment a variable using ++.
var m = 10;
console.log(++m); // 11
console.log(m++); // 11

// Ques 5 :) Decrement a variable using --
console.log(m--); // 12
console.log(--m); // 10

// Ques 6 :) Use += operator to increase a variable by 20.
var n = 10;
n += 20;
console.log(n); //30

// Ques 7 :) Compare two numbers using >, <, >=, <=.
console.log(10 > 20); // false
console.log(10 < 20); // true
console.log(10 >= 20); // false
console.log(10 <= 20); // true

// Ques 8 :) Check if two values are strictly equal using ===.
console.log(20 === "20"); // false

// Ques 9 :) Compare "10" and 10 using both == and ===.
console.log("10" == 10); // true
console.log("10" === 10); // false

// Ques 10 :) Create two boolean variables and test &&, ||, and !
var a = true;
var b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

// <------------------------------------ Truthy & Falsy --------------------------------------> ///////////////////////////////////

// Ques 1 :) Check whether an empty string is truthy or falsy.
console.log(Boolean("")); // falsy

// Ques 2 :) Check whether 0 is truthy or falsy.
console.log(Boolean(0)); // falsy

// Ques 3 :) Check whether [] is truthy or falsy.
console.log(Boolean([])); // truthy

// Ques 4 :) Create a variable and print "Valid" if it has a value otherwise print "Invalid".
var x = 10;
if (x) {
  console.log("Valid");
} else {
  console.log("Invalid");
}

// <------------------------------------ Ternary Operator --------------------------------------> ///////////////////////////////////

// Ques 1 :) Check whether a number is even or odd using ternary operator.
var num = 10;
var rst = num % 2 === 0 ? "Even" : "Odd";
console.log(rst);

// Ques 2 :) Check whether age is above 18 using ternary operator.
var age = 15;
var result = age >= 18 ? "Above 18" : "Below 18";
console.log(result);

// Ques 3 :) Find the greater number between two values using ternary operator.
var a = 10;
var b = 20;
var grater = a > b ? a : b;
console.log("Grater Number :", grater);

// <------------------------------------ Conditionals --------------------------------------> ///////////////////////////////////

// Ques 1 :) Check whether a number is positive or negative.
var num = -10;
if (num > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

// Ques 2 :) Check whether a number is even or odd.
var num = 13;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Ques 3 :) Check whether a person is eligible to vote.
var age = 15;
if (age >= 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible to Vote");
}

// Ques 4 :) Find the largest among two numbers.
var a = 10;
var b = 20;
if (a > b) {
  console.log("A is Grater", a);
} else {
  console.log("B is Grater", b);
}

// Ques 5 :) Find the largest among three numbers.
var a = 10;
var b = 50;
var c = 30;
if (a > b && a > c) {
  console.log("A is Grater", a);
} else if (b > a && b > c) {
  console.log("B is Grater", b);
} else {
  console.log("C is Grater", c);
}

// Ques 6 :) Check whether a year is a leap year.
// Checks Leap year ->
// The year is divisible by 400
// If the year is divisible by 4, but not divisible by 100

var year = 2024;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(`${year} is Leap Year`);
} else {
  console.log(`${year} is Not Leap Year`);
}

// Ques 7 :) Check whether a number is divisible by both 3 and 5.
var num = 15;
if (num % 3 === 0 && num % 5 === 0) {
  console.log(`${num} is divisible by both 3 and 5`);
}

// Ques 8 :) 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail

var marks = 80;
if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
} else if (marks >= 50) {
  console.log("C");
} else {
  console.log("Fail");
}

// Ques 1 :) Check whether a character is a vowel or consonant.
var ch = "h";
ch = ch.toLowerCase();

switch (ch) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vowel is : " + ch);
    break;
  default:
    console.log("consonant is : " + ch);
}

// Ques 2 :) Create a calculator using switch statement.
var num1 = 10;
var num2 = 20;
var operator = "*";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("Invalid Operator");
}

// Ques 3 :) Print the day name based on a number (1–7).
var day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

// Ques 4 :) Check whether a username is "admin" and password is "1234".
var username = "admin";
var password = "134";

if (username === "admin" && password === "1234") {
  console.log("Login Successful");
} else if (username !== "admin") {
  console.log("Invalid Username");
} else if (password !== "1234") {
  console.log("Invalid Password");
} else {
  console.log("Login Failed");
}

// <------------------------------------ Strings --------------------------------------> //////////////////////////////////////

// <------------------------------------ Numbers & Math --------------------------------------> ///////////////////////////////////
