/////////// <----------------------------------------- Function Constructor -------------------------------------------------> ////////////////////////////////
//// Creating Function Before ES6

///////////////// Example - 1 //////////////////////

//// Created a Constructor Function (Pascal Case)
// Defined default value

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
}

let showProfile = function () {
  if (this.isVerified) {
    console.log(`Student Name: ${this.fname} ${this.lname}`);
  } else {
    console.log("User is not Verified");
  }
};

// set "showProfile" function in prototype
MakeStudents.prototype.showProfile = showProfile;

// Created Instance
let s1 = new MakeStudents("Ritika", "Chaurasiya", 1876943221, true);
console.log(s1);

let s2 = new MakeStudents("kanika", "mittal", 893456123, false);
console.log(s2);

s1.showProfile();
s2.showProfile();

///// Before ES6, we uses the constructor func, now after ES6 we uses the classes

/////////// <----------------------------------------- Classes (Syntactical Sugar ) -------------------------------------------------> ////////////////////////////////

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

///////////////// Example - 2 //////////////////////
