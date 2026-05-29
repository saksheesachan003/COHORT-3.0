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

console.log(
  "------------------------------  Variables Question ------------------------------------- ",
);

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

console.log(
  "------------------------------  Dtaa Types Question ------------------------------------- ",
);

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

console.log(
  "------------------------------  Type Conversion Question ------------------------------------- ",
);

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

console.log(
  "------------------------------  Operators Question ------------------------------------- ",
);

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

console.log(
  "------------------------------  Truthy and Falsy Question ------------------------------------- ",
);

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

console.log(
  "------------------------------  Ternary Operator Question ------------------------------------- ",
);

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

console.log(
  "------------------------------  Conditionals Question ------------------------------------- ",
);

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

console.log(
  "------------------------------  Strings Question ------------------------------------- ",
);

// Ques 1 :) Create a string and print its length.
var str = "Hello JavaScript";
console.log(str.length);

// Ques 2 :) Convert a string into uppercase.
console.log(str.toUpperCase());

// Ques 3 :) Convert a string into lowercase
console.log(str.toLowerCase());

// Ques 4 :) Check if a string includes the word "JavaScript".
console.log(str.includes("JavaScript"));

// Ques 5 :) Extract the word "World" from "Hello World".
var wrd = "Hello World";
console.log(wrd.slice(6));

// Ques 6 :) Replace "apple" with "mango" in a sentence.
var sent = "I like apple";
console.log(sent.replace("apple", "mango"));

// Ques 7 :) Split "HTML,CSS,JS" into an array.
var lang = "HTML,CSS,JS";
console.log(lang.split(","));

// Ques 8 :) Remove extra spaces from a string.
var wrd = " hi ";
console.log(wrd.trim());

// Ques 9 :) Repeat the word "Hi" 5 times.
var wrd = "Hi";
console.log(wrd.repeat(5));

// Ques 10 :) Print the first character of a string.
console.log(wrd.charAt(0));

// Ques 11 :) Use template literals to print:"My name is Aman and I am 20 years old"
var name = "Aman";
var age = 20;
console.log(`My name is ${name} and I am ${age} years old`);

// <------------------------------------ Numbers & Math --------------------------------------> ///////////////////////////////////

console.log(
  "------------------------------  Number & Math Question ------------------------------------- ",
);

// Ques 1 :) Round 4.7 using Math.round().
console.log(Math.round(4.7)); // 5

// Ques 2 :) Find the square root of 81.
console.log(Math.sqrt(81)); // 9

// Ques 3 :) Find the maximum number from 10, 20, 5, 99.
console.log(Math.max(10, 20, 5, 99)); // 99

// Ques 4 :) Generate a random number between 1 and 10.
console.log(Math.floor(Math.random() * 10) + 1);

// Ques 5 :) Convert "99.99" into an integer.
console.log(parseInt("99.99")); // 99

// Ques 6 :) Check whether 25 is an integer or not.
console.log(Number.isInteger(25)); // true

// Ques 7 :) Use toFixed(2) on 3.141592.
console.log((3.141592).toFixed(2)); // 3.14

// <------------------------------------ Mixed Practice Questions --------------------------------------> ///////////////////////////////////

console.log(
  "------------------------------ Mixed Question ------------------------------------- ",
);

// Ques 1 :) Create a mini biodata program using variables and template literals.
var name = "Sakshee Sachan";
var age = 22;
var city = "Noida";
console.log(`My Name is: ${name} and  Age is: ${age} and i am from: ${city}`);

// Ques 2 :) Calculate the area of a rectangle.
var height = 10;
var width = 20;
var area = height * width;
console.log(`Area of Rectangle is: ${area}`);

// Ques 3 :) Calculate the simple interest.
var principal = 1000;
var rate = 5;
var time = 2;
var interest = (principal * rate * time) / 100;
console.log(`Simple Interest is: ${interest}`);

// Ques 4 :) Convert temperature from Celsius to Fahrenheit.
var celcius = 43;
var farenhite = (celcius * 9) / 5 + 32;
console.log(`Farenhite is: ${farenhite}`);

// Ques 5 :) Convert kilometers into meters.
var kilometers = 10;
var meters = kilometers * 1000;
console.log(`Meters is: ${meters}`);

// Ques 6 :) Calculate total marks and percentage of 5 subjects.
var sub1 = 80;
var sub2 = 70;
var sub3 = 60;
var sub4 = 50;
var sub5 = 70;
var total_marks = sub1 + sub2 + sub3 + sub4 + sub5;
var percentage = (total_marks / 500) * 100;
console.log(`Total Marks is: ${total_marks} and Percentage is: ${percentage}`);

// Ques 7 :) Calculate electricity bill based on units consumed.
// First 100 units          → ₹5 per unit
// between 101 - 200 units       → ₹7 per unit
// Above 200 units          → ₹10 per unit

var units = 150;
if (units <= 100) {
  var bill = units * 5;
} else if (units > 100 && units <= 200) {
  var bill = 100 * 5 + (units - 100) * 7;
} else {
  var bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
}
console.log(`Electricity Bill is: ${bill}`);

// Ques 8 :) Create a username generator using first name and birth year.
var firstName = "user";
var birthYear = 1999;
var username = firstName + birthYear;
console.log(`Username is: ${username}`);

// Ques 9 :) Check whether a string starts with a specific letter.
var str = "Hello World";
console.log(str.startsWith("H")); // true

// Ques 10 :) Count the total characters in a sentence excluding spaces.

// You Need  :----      one string
// one count variable
// one loop

// Then ------- :    check every character
// if character is not " "
//     increase count

var str = "Hello World";
var count = 0;

for (var i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    count++;
  }
}
console.log(`Total Characters is: ${count}`);

// <------------------------------------ Logical Thinking Questions --------------------------------------> ///////////////////////////////////

console.log(
  "------------------------------  Logical Question ------------------------------------- ",
);

// Ques 1 :) Take two numbers and print which one is greater.
var num1 = 10;
var num2 = 20;
if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else {
  console.log(`${num2} is greater than ${num1}`);
}

// Ques 2 :) Check whether a number lies between 10 and 50.
var num = 45;
if (num >= 10 && num <= 50) {
  console.log(`${num} is between 10 and 50`);
} else {
  console.log(`${num} is not between 10 and 50`);
}

// Ques 3 :) Check whether a password length is greater than 8.
var password = "abc123";
if (password.length > 8) {
  console.log("Password is greater than 8");
} else {
  console.log("Password is not greater than 8");
}

// Ques 4 :) 4. Check if a person can drive:
// - age > 18
// - has license = true

var age = 18;
var hasLicense = true;
if (age > 18 && hasLicense) {
  console.log("Person can drive");
} else {
  console.log("Person can't drive");
}

// Ques 5 :) Check whether a number is divisible by 2, 3, or both.
var num = 6;
if (num % 2 === 0 && num % 3 === 0) {
  console.log(`${num} is divisible by 2 and 3`);
} else if (num % 2 === 0) {
  console.log(`${num} is divisible by 2`);
} else if (num % 3 === 0) {
  console.log(`${num} is divisible by 3`);
} else {
  console.log(`${num} is not divisible by 2 and 3`);
}

// Ques 6 :) Print "Good Morning", "Good Afternoon", or "Good Evening" based on time
const hour = 23;
if (hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 17) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

// Ques 7 :) Find whether a number is a multiple of 10.
var num = 50;
if (num % 10 === 0) {
  console.log(`${num} is a multiple of 10`);
} else {
  console.log(`${num} is not a multiple of 10`);
}

// Ques 8 :) Create a simple discount calculator
var originalPrice = 1000;
var discountPercentage = 10;

var discountAmount = (originalPrice * discountPercentage) / 100;
var discountedPrice = originalPrice - discountAmount;

console.log(`Original Price: ${originalPrice}`);
console.log(`Discount Amount: ${discountAmount}`);
console.log(`Discounted Price: ${discountedPrice}`);

// Ques 9 :) Check whether a product is in stock.  ( need one thing -> quantity)
var quantity = 0;
if (quantity > 0) {
  console.log("Product is in stock");
} else {
  console.log("Product is out of stock");
}

// Ques 10 :) Calculate final bill after GST.
var originalPrice = 1000;
var gstPercentage = 18;

var gstAmount = (originalPrice * gstPercentage) / 100;
var finalPrice = originalPrice + gstAmount;

console.log(`Original Price: ${originalPrice}`);
console.log(`GST Amount: ${gstAmount}`);
console.log(`Final Price: ${finalPrice}`);

// <------------------------------------ Challenge Questions for Beginners --------------------------------------> ///////////////////////////////////

console.log(
  "------------------------------  Challenging Question ------------------------------------- ",
);