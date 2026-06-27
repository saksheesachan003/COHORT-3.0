console.log(React); // Gives React object, as like windoew object

//// Creates Reacl DOM
let h1 = document.createElement("h1");
h1.textContent = "hello";
document.body.append(h1);

console.log("Real DOM :) ", h1);

//// Creates Virtual DOM
let h2 = React.createElement(
  "h1",
  { class: "heading" },
  "Hello I'm Virtual DOM",
);

console.log("Virtual DOM :) ", h2);
