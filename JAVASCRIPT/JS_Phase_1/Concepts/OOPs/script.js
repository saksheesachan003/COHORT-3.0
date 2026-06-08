/////////// <----------------------------------------- Function Constructor -------------------------------------------------> ////////////////////////////////
//// Creating Function Before ES6

///////////////// Example - 1 //////////////////////

//// Created a Constructor Function (Pascal Case)
// Defined default value

console.log("---------------------- Function Constructor -------------");

function CreateSongs() {
  this.songName = "Cry for me";
  this.albumName = "Hurry up tomorrow";
  this.singer = "Weeknd";
  this.duration = 3.5;
  this.isLiked = true;
}

// Created a new Object
// (new keyword -> create an instance of a user-defined object type or built-in object type that has constructor func has)
let song1 = new CreateSongs();
console.log(song1);

let song2 = new CreateSongs();
console.log(song2);

///////////////// Example - 2 //////////////////////

/// Created a default func constructor and then pass value to create new diff diff object
function CreateBook(bookName, authorName, pages) {
  this.bookName = bookName;
  this.authorName = authorName;
  this.pages = pages;
  this.getFrontpage = function () {
    console.log("Book Name:", this.bookName);
    console.log("Author Name:", this.authorName);
    console.log("Pages:", this.pages);
  };
}

let book1 = new CreateBook("Harry Potter", "JK Rowling", 500);
console.log(book1);

let book2 = new CreateBook("Ikigai", "Hector Garcia", 300);
console.log(book2);

let book3 = new CreateBook("Rich Dad Poor Dad", "Robert Kiyosaki", 400);
console.log(book3);

// Accesing getFrontPage Method
book1.getFrontpage();

///////////////// Example - 3 //////////////////////
// Created a structure
function MakeStudents(fname, lname, contact, isVerified) {
  this.fname = fname;
  this.lname = lname;
  this.contact = contact;
  this.isVerified = isVerified;
  this.showProfile = function () {
    if (this.isVerified) {
      console.log(`Student Name: ${this.fname} ${this.lname}`);
    } else {
      console.log("User is not Verified");
    }
  };
}

// Created Instance
let s1 = new MakeStudents("Ritika", "Chaurasiya", 1876943221, true);
console.log(s1);

let s2 = new MakeStudents("kanika", "mittal", 893456123, false);
console.log(s2);

s1.showProfile();
s2.showProfile();

///// Before ES6, we uses the constructor func, now after ES6 we uses the classes

/////////// <----------------------------------------- Classes (Syntactical Sugar ) -------------------------------------------------> ////////////////////////////////

console.log("---------------------- Classes -------------");

///////////////// Example - 1 //////////////////////
class MakeStudent {
  constructor(fname, lname, contact, isVerified) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
    this.isVerified = isVerified;
  }
  // made common func, not
  showProfile = function () {
    if (this.isVerified) {
      console.log(`Student Name: ${this.fname} ${this.lname}`);
    } else {
      console.log("User is not Verified");
    }
  };
}

// Created Instance
let student1 = new MakeStudent("Vertika", "Yadav", 1876943221, true);
console.log(student1);

let student2 = new MakeStudent("akshay", "mittal", 893456123, false);
console.log(student2);

student1.showProfile();
student2.showProfile();

/////////// <----------------------------------------- Classical Student -------------------------------------------------> ////////////////////////////////

console.log("---------------------- Classical Inheritance -------------");

class User {
  constructor(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
  }
  greetUser() {
    console.log(`Hello ${this.fname} ${this.lname}`);
  }
}

let u1 = new User("Ayush", "Rane", 123456789);
console.log(u1);
u1.greetUser();

class Admin extends User {
  constructor(fname, lname, contact, isAdmin) {
    super(fname, lname, contact); // super -> Call the parent class constructor
    this.isAdmin = isAdmin;
  }
  addCourse() {
    console.log("New Course Added");
  }
  removeAllCourses() {
    console.log("all Courses Removed");
  }
}

let u2 = new Admin("sumit", "mittal", 892318546, true);
console.log(u2);
u2.greetUser();

/////////// <----------------------------------------- Prototypal Inheritance -------------------------------------------------> ////////////////////////////////

console.log("---------------------- Protypal Inheritance -------------");

/// prototype is object then we can assign prototype
let papa = {
  fname: "Amar",
  lname: "Singh",
  property: "50lakh",
};

let beta = {
  fname: "Avneet",
  lname: "Singh",
};

// Assigning the prototype of papa in beta
beta.__proto__ = papa;

console.log(beta);
console.log(beta.property); // 50 lakh

//////////////////// Example - 2 ////////////////////////////

function MakeStudent2(fname, lname, contact, isVerified) {
  this.fname = fname;
  this.lname = lname;
  this.contact = contact;
  this.isVerified = isVerified;
}

let showProfile = function () {
  if (this.isVerified) {
    console.log(`Student Name: ${this.fname} ${this.lname}`);
  } else {
    console.log("User is not Verified");
  }
};

// set "showProfile" function in prototype and available in all
MakeStudent2.prototype.showProfile = showProfile;

// Created Instance
let st1 = new MakeStudent2("Ritika", "Chaurasiya", 1876943221, true);
console.log(st1);

let st2 = new MakeStudent2("kanika", "mittal", 893456123, false);
console.log(st2);

st1.showProfile();
st2.showProfile();
