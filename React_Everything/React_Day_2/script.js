import React from "react";

console.log(React);

let root = document.querySelector("#root");

const h1 = React.createElement("h1", {}, "Hello This is Heading");

ReactDOM.createRoot(root).render(h1);

