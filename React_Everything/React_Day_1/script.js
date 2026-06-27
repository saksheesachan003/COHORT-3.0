console.log(React); // Gives React object, as like windoew object

//// Creates Reacl DOM
let h1 = document.createElement("h1");
h1.textContent = "hello";
document.body.append(h1);

console.log("Real DOM :) ", h1);

//// Creates Virtual DOM Using React
let rh1 = React.createElement(
  "h1",
  { class: "heading" },
  "Hello I'm Virtual DOM",
);

// if don't want to give attribute then pass null
let rh2 = React.createElement("h2", null, "Hello I'm Virtual DOM");

// if give span, then use again createElement
let rh3 = React.createElement(
  "h3",
  null,
  React.createElement("span", {}, "Hello, I'm span"),
);

console.log("Virtual DOM :) ", rh1);
console.log("Virtual DOM :) ", rh2);
console.log("Virtual DOM :) ", rh3);

/////// Append Vrirtual DOM into Real DOM ( using ReactDOM)

console.log(ReactDOM);

let realDomElem = document.querySelector("#root");

let rootOfReact = ReactDOM.createRoot(realDomElem);

// rootOfReact.render(rh3);

////// Div -> h1 -> span

let div = React.createElement("div", {}, [
  React.createElement("h2", {}, React.createElement("span", {}, "I'm Span ")),
  React.createElement(
    "h3",
    {},
    React.createElement("span", {}, "I'm Span in h2"),
  ),
]);

ReactDOM.createRoot(realDomElem).render(div);
