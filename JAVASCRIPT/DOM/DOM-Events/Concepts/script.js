////////////////////////////////////// <------------------------------------ EVENTS --------------------------------------> /////////////////////////////

const btn = document.querySelector(".btn");

////////////////////// <----------------- POINTER EVENTS ---------------------> //////////////
// on single click triggers "Pointer Event"
btn.addEventListener("click", (events) => {
  console.log(events);
});

////////////////////// <----------------- MOUSE EVENTS ---------------------> //////////////

// on double clicks triggers "Mouse Event"
btn.addEventListener("dblclick", (events) => {
  console.log(events);
});

// On hover btn, triggers "mouse events"
btn.addEventListener("mouseover", (events) => {
  console.log(events);
});

// On leave btn, triggers "mouse events"
btn.addEventListener("mouseleave", (events) => {
  console.log(events);
});

////////////////////// <----------------- KEYBOARD EVENTS ---------------------> //////////////

// On press key on window triggers "keyboard Events"
window.addEventListener("keypress", (events) => {
  console.log(events);
});

////////////////////////////////////// <------------------------------------ EVENT PROPOGATION ( Events Travals) --------------------------------------> /////////////////////////////

const div = document.querySelector("div");
const main = document.querySelector("main");
const body = document.querySelector("body");

btn.addEventListener(
  "click",
  (events) => {
    console.log("button triggered.....");
  },
  true, // to enable capturing, can use "true"
);

body.addEventListener(
  "click",
  (events) => {
    console.log("body triggered.....");
  },
  { capture: true }, // also use "capture: true"
);

div.addEventListener(
  "click",
  (events) => {
    console.log("div triggered.....");
  },
  true,
);

main.addEventListener(
  "click",
  (events) => {
    console.log("main triggered.....");
  },
  { capture: true },
);

////////////////////////////////////// <------------------------------------ FORM --------------------------------------> /////////////////////////////

const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");

form.addEventListener("submit", (events) => {
  events.preventDefault(); // stops reloading page
  console.log("form submitted");

  //// First Approach ......
  let name = inp1.value;
  let email = inp2.value;
  console.log("Name:", name);
  console.log("Email", email);

  /// Second approach .....
  //   console.log("Name:", events.target[0].value);
  //   console.log("Email", events.target[1].value);

  // reset value
  form.reset();
});
