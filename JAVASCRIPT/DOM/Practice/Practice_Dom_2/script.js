const main = document.querySelector("main");

/////// Option 1 :) selecting element and then

// const box1 = document.querySelector(".box1");
// const box2 = document.querySelector(".box2");
// const box3 = document.querySelector(".box3");

// box2.style.backgroundColor = "blue";

// box3.style.backgroundColor = "yellow";

///// Option - 2 :)  Create box and then in in main

const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");

box1.classList.add("box");
box2.classList.add("box");
box3.classList.add("box");

box1.style.backgroundColor = "red";
box2.style.backgroundColor = "green";
box3.style.backgroundColor = "blue";

main.append(box1);
main.append(box2);
main.append(box3);

//// Prepend () -> insert always before(sabse pahle)
// main.prepend(box3);

//// insertBefore() -> insert box2 from before box1
// main.insertBefore(box2, box1);

//// before() -> always before
// main.before(box2);

//// after() -> always last
// box2.after(box1);

//// replaceChild() -> replace child
// main.replaceChild(box3, box1);

//// replaceWith() -> replace content
box3.replaceWith(box1);
