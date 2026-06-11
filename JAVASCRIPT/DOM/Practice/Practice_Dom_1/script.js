const bulb = document.querySelector(".bulb");

const btn = document.querySelector("button");

let flag = true;

btn.addEventListener("click", function () {
  ////// 1st Approach :)
  //   bulb.style.backgroundColor = "yellow";
  //   btn.textContent = "OFF";


  /////// 2nd Approach :) Toggle form using flag
  //   if (flag) {
  //     bulb.style.backgroundColor = "yellow";
  //     btn.textContent = "OFF";
  //     flag = false;
  //   } else {
  //     bulb.style.backgroundColor = "transparent";
  //     btn.textContent = "ON";
  //     flag = true;
  //   }

  /////// 3rd Approach :) Using className
  bulb.classList.toggle("lightup");
  btn.textContent = bulb.classList.contains("lightup") ? "OFF" : "ON";
});
