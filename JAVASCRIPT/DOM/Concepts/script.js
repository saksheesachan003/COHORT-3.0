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



