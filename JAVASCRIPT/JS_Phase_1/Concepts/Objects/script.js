////// Creating Object
var obj = {
  userName: "Ritika",
  age: 25,
  city: "bangluru",
};

console.log("Object: ", obj);

////// (Read) Access Object property { Using dot (.) }
console.log(obj.userName);

///// CRUD ( create -> read -> Update -> Delete) Operation
let user = {
  name: "Kanika",
  age: 30,
  marks: 70,
  isSingle: true,
  batch: "Tech3.0",
};

//// (Create) Add "city" property
user.city = "Noida";
console.log("Create User:", user);

//// Update "isSingle" and "marks" Property
user.marks = 95;
user.isSingle = false;
console.log("Update User:", user);

//// delete "marks" property
delete user.marks;
console.log("Delete User Marks:", user);

//// Access all keys
console.log("Keys Of User:", Object.keys(user));

//// Access all values
console.log("Values Of User:", Object.values(user));

//// Access key-value entries
console.log("Entries Of User:", Object.entries(user));

//// takes from user prompt
// let username = prompt("Enter name....");
// let age = Number(prompt("Enter age...."));
// let city = prompt("Enter city....");

// var obj = { username, age, city };
// console.log("Object: ", obj);

/// Can store array also
var obj1 = {
  name: "Virat Kohli",
  age: 36,
  team: "India",
  isCaptain: true,
  skills: ["Batting", "Bowling", "Fielding"],
};
console.log("Passing Array in object: ", obj1.skills[0]);

///// can store object under object
var obj1 = {
  name: "Virat Kohli",
  age: 36,
  team: "India",
  isCaptain: true,
  skills: ["Batting", "Bowling", "Fielding"],
  spouse: {
    name: "anushka sharma",
    profession: "acting",
  },
};
console.log("Passing Object in object: ", obj1.spouse.profession);

////// Can Create function under object
var obj = {
  name: "robot",
  ram: "20mb",
  age: 15,
  isWorking: false,
  skills: ["fight", "walk", "dance"],
  creator: {
    name: "vashi",
    age: 40,
    isIntelligent: true,
  },
  sayHi: function (a) {
    console.log("Hi, I am Robot.", a);
  },
};
obj.sayHi("vaibhav");

// console.log(obj.sayHi);      // ƒ (a) {
//     console.log("Hi, I am Robot.", a);
// }

// console.log(obj.sayHi())      // Hi, I am Robot.
// undefinied,
// bcs func is not return so "undefinied"

///// calculator .... ( Using Methods)
let calc = {
  add: (a, b) => {
    return a + b;
  },
  square: (a) => {
    return a * a;
  },
  cube: (a) => {
    return a * a * a;
  },
  mul: (a, b) => {
    return a * b;
  },
};
console.log("Calculator:", calc.square(5));

//// Can make condition under object ( not if-else, can use ternary)
var my_age = 20;
var obj = {
  name: "Sakshee",
  age: my_age > 25 ? my_age : 33,
};
console.log(obj.age); // 33

///// using const, can change value not key value
const user1 = {
  name: "aditya",
  age: 56,
};
user1.name = "akshat";
console.log(user1.name); // akshat

// user1 = "Hello"
// console.log(user1) // Not convert object to string

///// Using var and let can change the value
let user2 = {
  name: "aditya",
  age: 56,
};
user2 = "Hello";
console.log(user2); // Hello

/////////////// How to stop to These
//// 1. Object.seal() method ( only can add and delete value ) --------

const user3 = {
  name: "aditya",
  age: 56,
  city: "mumbai",
};
Object.seal(user3);

// Can update value
user3.age = 30;
console.log(user3); // {name: 'aditya', age: 30, city: 'mumbai'}
// Can read value
console.log(user3.age); // 30

// Can't add value
user3.isMarried = true;
console.log(user3);

////// 2. Object.freeze() method ( freeze, no-one perform action)

Object.freeze(user3);

// Can't update value
user3.age = 30;
// Can read value
console.log(user3); // {name: 'aditya', age: 30, city: 'mumbai'}

///// Array is also object so can perform seal() and freeze()
const arr = [10, 20, 30];

Object.seal(arr);
arr[2] = 99; // can update
console.log(arr); //  [10, 20, 99]

Object.freeze(arr);
arr[1] = 49; // can't update
console.log(arr); // [10, 20, 99]

////////////// Destructuring In Array /////////////
var arr1 = [11, 22, 33, 44];
var [a, b, c, d] = arr1;
console.log("Array Destructuring:", a, b, c, d); // 11 22 33 44

// Rest operator -> ...
var arr2 = ["aman", "akash", "prince", "akshay", "deep", "laxman"];
var [a, b, ...c] = arr2;
console.log("Rest Operator:", c); // ['prince', 'akshay', 'deep', 'laxman']

////////////// Destructuring In Objects ( use same property name can't use a, b) /////////////
var obj = {
  name: "akash",
  age: 20,
  batch: "Tech 3.0",
};
var { name, age } = obj;
console.log("Object Destructuring:", name, age); // akash 20

/// Change property name
var { name: fullName } = obj;
console.log("Change Property Name:", fullName); // akash

/// Rest Operator
var { name, ...rest } = obj;
console.log("Rest Operator:", rest); // {age: 20, batch: 'Tech 3.0'}

////////////// Shallow Copy /////////////

/// Spread Operator In Array
var arr3 = [10, 20, 30, 40];
var arr4 = [...arr3];
console.log("Spread Operator:", arr4);

/// Spread Operator in Object
var obj1 = {
  name: "ritu",
  age: 20,
  marks: 35,
};

/// Copying, then both object will change bcs of refrence datatype -> stores address
var obj2 = obj1;
obj2.name = "rishuka";
console.log("Normal Copy:", obj1, obj2);

var obj2 = { ...obj1 };
obj2.name = "aditya";
console.log("Spread Operator:", obj1, obj2); // in obj2, will reflect 'aditya' name

////////////// Deep Copy ( Nested Copy ) /////////////

var obj = {
  name: "satyam",
  age: 20,
  marks: 65,
  college: {
    name: "IIT",
    student: 5000,
  },
  skills: ["HTML", "CSS", "JS"],
};

/// Shallow Copy ( Don't work in Nested form)
var obj2 = { ...obj };
obj2.skills.push("React");
console.log("Shallow Copy:", obj.skills, obj2.skills); // added "react" in both object

//// Deep Copy ( copy properly in nested)
// JSON.stringify method -> conversts a javascript value to a javascript object notation (JSON) string
// JSON.parse method -> converts a JSON string into object
var obj3 = JSON.parse(JSON.stringify(obj));
obj3.skills.push("Node.js");
console.log("Deep Copy In Objects:", obj.skills, obj3.skills); // added "node.js" only in obj3



var arr4 = [10, {name: "harsh", age: 20}, 30];
var arr5 = JSON.parse(JSON.stringify(arr4));
arr5[1].name = "Harshita";
console.log("Deep Copy In Array:", arr4, arr5);


////////////// For...in LOOP /////////////
const object = {
  name: 'akshita',
  age: 20
}

for (let key in object) {
  console.log(`Key ${key}, Value : ${object[key]}`) 
}

