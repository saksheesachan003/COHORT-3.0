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

  // Create category element
  let h5 = document.createElement("h5");
  h5.append(catg);

  // Edit button
  let editBtn = document.createElement("button");
  editBtn.append("Edit");

  // Delete button
  let dltBtn = document.createElement("button");
  dltBtn.append("Delete");

  // Complete button
  let completeBtn = document.createElement("button");
  completeBtn.append("Complete");

  // Append to task div
  task.prepend(h3);
  task.append(h5, editBtn, dltBtn, completeBtn);

  // Append task to task_card
  taskCard.appendChild(task);

  form.reset();
});
