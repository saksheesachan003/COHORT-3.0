///////////////////////// <---------------------------------- Array -------------------------------------- > //////////////////////////////

/// Easy :) Find Expensive Product ( create new array prices grater than 300 )
/// Concept :) Filter Method

const array = [100, 250, 500, 150, 700];
let arr = [];

array.filter((price) => {
  if (price > 300) arr.push(price);
});
console.log("Expensive Product", arr);

/// Moderate :) Student Average ( Calculate the average marks of all students )
/// Concept :) Reduce, Length

let marks = [80, 90, 70, 85, 95];
let totalMarks = marks.reduce((acc, currentvalue) => {
  let total = acc + currentvalue;
  return total;
}, 0);
let avg = totalMarks / marks.length;
console.log("Student Average", avg);

/// Hard :) Most Frequent Number ( Find the number that appears the most )
/// Concept :) Loops, Object For Counting, Problem Solving

let numbers = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];
let count = {};

for (let i = 0; i < numbers.length; i++) {
  if (count[numbers[i]]) {
    count[numbers[i]]++;
  } else {
    count[numbers[i]] = 1;
  }
}
console.log("Frequency Of Each Number: ", count);

/////  1st Approach (Using Object.entries + forEach ) .......

// let max = 0;

// Object.entries(count).forEach((item) => {
//     console.log("Item :", item);
//     if(item[1] > max){
//         max = item;
//     }
// })
// console.log("Most Frequent Number: ", max[0]);

///// 2nd Approach (using For...in Loop ) .......

let frequency = 0;
let mostFrequent;

for (let key in count) {
  console.log(`Key: ${key}, Value: ${count[key]}`);
  if (count[key] > frequency) {
    frequency = count[key];
    mostFrequent = key;
  }
}
console.log("Most Frequent Number: ", mostFrequent);

/////////////////////////////// <---------------------------------- Objects -------------------------------------- > /////////////////////

/// Easy :) Update User Age ( Update age to 21)
/// Concept :) Object property access, Object update

let letuser = {
  name: "Ritik",
  age: 20,
};
letuser.age = 21;
console.log("Updated User", letuser);

/// Moderate :) Print User Information (Instead of manually, do dynamically)
/// Concepts :) Object.entries(), for...of

letuser = {
  name: "Ritik",
  age: 20,
  city: "Bhopal",
};
for (let [key, value] of Object.entries(letuser)) {
  console.log(`${key}: ${value}`);
}

/// Hard :) Highest Paid Employee ( Find the employee with highest salary )
/// Concepts :) Loops, Comparisons

let employees = {
  aman: 25000,
  ritik: 50000,
  priya: 45000,
};

let highestPaid;
let max = 0;

/// 1st Approach ( Using for...in Loop)
// for (let key in employees) {
//     if(employees[key] > max){
//         max = employees[key];
//         highestPaid = key;
//     }
// }
// console.log("Highest Paid Employee: ", highestPaid);

// 2nd Approach (Using Object.entries + forEach )
Object.entries(employees).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
  if (value > max) {
    max = value;
    highestPaid = key;
  }
});
console.log("Highest Paid Employee: ", highestPaid);

/////////////////////////////// <---------------------------------- Functions -------------------------------------- > /////////////////////

/// easy :) Greeting Function

const greet = (name) => {
  console.log(`Hello ${name}`);
};
greet("Ritik"); // Hello Ritik

/// Moderate :) Discount Calculator ( 10% discount )
/// Concepts :) Function, parameters, Return

function calculateDiscount(price) {
  let discount = 0.1 * price;
  let discountedPrice = price - discount;
  return discountedPrice;
}
console.log("Discount Calculator:", calculateDiscount(500)); // 450

/// Hard :) Dynamic Sum Function
/// Concepts :) Function , Rest Parameter, Reduce

const sum = (...numbers) => {
  let num = numbers.reduce((acc, int) => {
    total = acc + int;
    return total;
  });
  return num;
};
console.log("Dynamic Sum: ", sum(1, 2, 3, 4, 5)); // 15

/////////////////////////////// <---------------------------------- Arrays + Objects + Functions Together -------------------------------------- > /////////////////////

/// Easy :) Find Adult Users ( Return only users whose age is 18 or above. )
/// Concepts :) Array of objects, filter(), Functions

let letusers = [
  { name: "Ritik", age: 20 },
  { name: "Aman", age: 16 },
  { name: "Priya", age: 25 },
];

const getAdults = (users) => {
  return users.filter((user) => user.age >= 18);
};
console.log("Find Adult User:", getAdults(letusers));

/// Moderate :) Shopping Cart Total ( Calculate Total Bill : price × quantity )
/// Concepts :) Array of objects, Functions, reduce()

const cart = [
  { name: "Mouse", price: 500, qty: 2 },
  { name: "Keyboard", price: 1000, qty: 1 },
  { name: "Monitor", price: 10000, qty: 1 },
];

const getCartTotal = (cart) => {
  return cart.reduce((acc, item) => {
    let total = acc + item.price * item.qty;
    return total;
  }, 0);
};
console.log("Shopping Cart Total:", getCartTotal(cart));

//// Hard :) Student Grade Report ( Calculate average -> Decide grade -> Create a new Object -> Return a new array)
//// Concepts :) Array, Nested Arrays, Objects, Functions, map(), reduce(), conditional Logic

let students = [
  {
    name: "Ritik",
    marks: [80, 90, 85],
  },
  {
    name: "Aman",
    marks: [50, 40, 60],
  },
];

const generateReport = (students) => {
  return students.map((student) => {
    let totalMarks = student.marks.reduce((acc, currentvalue) => {
      let total = acc + currentvalue;
      return total;
    })
    let avg = totalMarks / student.marks.length;
    let grade;
    if (avg >= 90) {
      grade = "A";
    } else if (avg >= 80) {
      grade = "B";
    } else if (avg >= 60) {
      grade = "C";
    } else {
      grade = "D";
    }
    return{
      name: student.name,
      avg: avg,
      grade: grade,
    }
  })
}
console.log("Student Grade Report:",  generateReport(students));



/////////////////////////////// <---------------------------------- 🚀 Final Challenge (Very Hard) -------------------------------------- > /////////////////////
////// <--------------------- Mini Library Management System ------------------------->


