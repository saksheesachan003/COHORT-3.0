//////////////////////////////// Beginner Level ////////////////////////////

// Ques 1 :)  ### Create an object for a student with:
// - name
// - age
// - course
// Then print all values.
const student = {
  name: "Sakshee",
  age: 22,
  course: "Cohort 3.0",
};
console.log(
  `Name: ${student.name}, Age: ${student.age}, Course: ${student.course}`,
);

// Ques 2 :)  ### Access Properties
// Print:
// - brand
// - model

// using both:
// - dot notation
// - bracket notation

const car = {
  brand: "BMW",
  model: "M4",
  year: 2022,
};
console.log(`Brand: ${car.brand}, Model: ${car.model}`);
console.log(`Brand: ${car["brand"]}, Model: ${car["model"]}`);

// Ques 3 :) ### Update Object Value
// Change the age of a user from 20 to 25.

const user = {
  name: "Anubhav",
  age: 20,
};
user.age = 25;
console.log(user);

// Ques 4 :) Add New Property
user.isAdmin = true;
console.log(user);

/// Ques 5 :) ### Delete Property
// Remove the `password` property from the object.
const account = {
  username: "john",
  password: "12345",
};
delete account.password;
console.log(account);

//////////////////////////////// Intermediate Level ////////////////////////////

// Ques 6 :) ### Count Properties (Use -> Object.Keys)
// Write a function that returns how many properties an object has.

function countProperties(obj) {
  let count = 0;
  Object.keys(obj).forEach((key) => {
    count++;
  });
  return count;
}
console.log(countProperties({ a: 1, b: 2, c: 3 }));

// Ques 7 :) Loop Through Object (Use -> For...in)
const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi",
};
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Ques 8 :) ### Check Property Exists (Use -> in)
// Check whether `"email"` exists inside an object or not.
console.log("email" in person);

// Ques 9 :) Merge Two Objects (Use -> Spread Operator)
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergeObj = { ...obj1, ...obj2 };
console.log(mergeObj);

// Ques 10 :)  Convert Object to Array (Use -> Object.entries)
const user1 = {
  name: "Aman",
  age: 21,
};
const userArray = Object.entries(user1);
console.log(userArray);

//////////////////////////////// Problem Solving Level ////////////////////////////

// Ques 11 :) Find the student with highest marks.
const marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 100,
};

// Take first student as initial topper
let highestStudent = Object.keys(marks)[0];
let highestMarks = marks[highestStudent];

for (let student in marks) {
  if (marks[student] > highestMarks) {
    highestMarks = marks[student];
    highestStudent = student;
  }
}
console.log(`${highestStudent}: ${highestMarks}`);

// Ques 12 :) Sum of Object Values
const salaries = {
  john: 1000,
  alex: 2000,
  bob: 1500,
};
let sum = 0;
for (let salary in salaries) {
  sum += salaries[salary];
}
console.log(sum);

// Ques 13 :) ### Nested Object Access
      // Print:
          // - city
          // - pincode
