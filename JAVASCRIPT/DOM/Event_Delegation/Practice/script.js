//// Project Logic -> when clicks on start btn, that box should place randomly any where
//// Clicks on start and timer starts for 10 second and box jumbled also random in each second
//// Now, color will be show random also
//// after 10 second completing timer, should show a screen "Game Over"
//// when will click on boxes, then should increase score
//// Hide "game over" screen after 3 seconds & make sure to reset your time and score

/// after 3 seconds also should remove box 
/// don't count score when user clicks more than one time on box


// Logic :) Static ( using position : absolute)

const main = document.querySelector("main");

// const box = document.querySelector(".box");

const btn = document.querySelector("button");

const timer = document.querySelector("#timer");

const scr = document.querySelector("#score");

const overlay = document.querySelector("#overlay");

const box = document.createElement("div");
box.classList.add("box");

let time = 0;

let interval;

let score = 0;

// change the random color ( random color creates using -> rgb )
const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

// Place in random place
const randomBox = () => {
  box.style.backgroundColor = randomColor(); // generates random color

  main.append(box); // add box in main

  // Parent width and height - childern offset width and height == so that don't go outside of box
  let mainHeight = main.clientHeight - box.offsetHeight;
  let mainWidth = main.clientWidth - box.offsetWidth;

  const rY = Math.random() * mainHeight;
  const rX = Math.random() * mainWidth;

  box.style.top = `${rY}px`;
  box.style.left = `${rX}px`;
};

btn.addEventListener("click", () => {
  randomBox();

  clearInterval(interval); // clear interval, restarts
  //// change position ( static )
  //   box.style.top = "30%";
  //   box.style.left = "60%";

  //// Using random, change position random

  interval = setInterval(() => {
    randomBox();

    time += 1;

    timer.textContent = time;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);

    overlay.style.display = "flex";
  }, 10000);

  setTimeout(() => {
    
    overlay.style.display = "none";

    score = 0;

    time = 0;
    timer.textContent = time;
  }, 13000);
});

// when click on box, then should score score increase
box.addEventListener("click", () => {
  score += 1;
  scr.textContent = score;
});
