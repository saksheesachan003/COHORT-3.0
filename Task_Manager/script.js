let form = document.querySelector("form");
let inp = document.querySelector("#taskTitle");
let dropdown = document.querySelector("#category");
let btn = document.querySelector("button");
let taskCard = document.querySelector(".task_card");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = inp.value;
  let catg = dropdown.value;

  //////// Task Creation Module //////////

  // create task container
  let task = document.createElement("div");

  // Create title
  let h3 = document.createElement("h3");
  let titleText = document.createTextNode(title);
  h3.appendChild(titleText);

  // Create category
  let h5 = document.createElement("h5");
  h5.append(catg);

  // Append to task div
  task.append(h3, h5);

  // Append task to task_card
  taskCard.appendChild(task);

  form.reset();
});
