/// Can't give one by one id in btn and put event listener, we can put in main parent 

const main = document.querySelector("main");

main.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target); // gives element
});
