////////////////////////////////////////////////// ------------------- DOM CONCEPTS -------------------////////////////////////////////////////////////
console.log(document);

console.log(document.childNodes); // Gives NodeList of children

///////// <--------------------------- Selection Element --------------------> ///////////////
// Selecting body
const body = document.body;
console.log(body.childNodes); // NodeList(4) [text, main, text, script]
console.log(body.children); // HTMLCollection(2) [main, script]

// Selecting main
const main = document.querySelector("main");
console.log(main.childNodes); // NodeList(3) [text, h1, text]
console.log(main.children); // HTMLCollection [h1]

///////// <--------------------------- Change & Update Element --------------------> ///////////////

// Change the text of h1
const h1 = document.querySelector("#head-1");

const div = document.querySelector("#div");

// TextContent -> change and update text
h1.textContent = "Hello World";

// innerText -> change and update also
h1.innerText = "Hello Worlds";

// innerHTML -> change text with tag
h1.innerHTML = "hey..... <i>I'm Italic </>";

///////// <--------------------------- Styling Element --------------------> ///////////////

h1.style.color = "red";
h1.style.fontSize = "50px";
h1.style.textTransform = "uppercase";

///////// <--------------------------- Class --------------------> ///////////////

// is my h1 has some class?
const isClass = h1.classList.contains("heading");
console.log(isClass); // true

// Change class and replace
h1.classList.replace("heading", "newHead");

// Toggle class (if class is added then rmove, if class is removed then add)
h1.classList.toggle("newHead");

// Remove -> remove class but don't add

// Adds the class "box" in div container
div.classList.add("box");

///////// <--------------------------- Attrributes Vs Properties --------------------> ///////////////

const h3 = document.querySelector("#id1");

// getAttribute -> gets the value of id and class
let res = h3.getAttribute("class");
console.log(res);

// setAttribute -> sets the attribute with value
h3.setAttribute("width", "200px");
console.log(h3);
console.log(h3.getAttribute("width"));

// removeAtttribute -> removes the attribute
h3.removeAttribute("class");

// hasAttribute -> returns boolean
console.log(h3.hasAttribute("class")); // false

///// with data -* name > can make custom attribute in html ///////
const userCard = document.querySelector(".user_card");

// Can check value
console.log(userCard.getAttribute("data-user-id"));

// can update value
userCard.dataset.userId = "678";
console.log(userCard.getAttribute("data-user-id"));

///// input.value (property, current state) vs input.getAttribute("value") ///////
const inp = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("This is inp.value:", inp.value); // gives input core live value
  console.log("This is inp.getAttribute('value'):", inp.getAttribute("value")); // gives input value attribute value
});

///////// <--------------------------- Creating, Inserting and Removing Elements From DOM --------------------> ///////////////

/// Creation of Element

let footer = document.createElement("footer");
console.log(footer);

//// Inserting element
// appendChild
// append
document.body.appendChild(footer); //  Insert footer after main

const span = document.createElement("span");
span.textContent = "Hey, I'm span....";

main.appendChild(span); // Insert span under main

//// Remove Element
// main.removeChild(span); // removes span





