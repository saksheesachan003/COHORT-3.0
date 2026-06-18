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
  task.classList.add("task");

  // Create title
  let h3 = document.createElement("h3");
  let titleText = document.createTextNode(title);
  h3.appendChild(titleText);

  // Create category element
  let h5 = document.createElement("h5");
  h5.append(catg);

  // Edit button
  let editBtn = document.createElement("button");
  editBtn.classList.add("editButton");
  editBtn.append("Edit");

  // Delete button
  let dltBtn = document.createElement("button");
  dltBtn.classList.add("dltButton");
  dltBtn.append("Delete");

  // Complete button
  let completeBtn = document.createElement("button");
  completeBtn.classList.add("cmpltButton");
  completeBtn.append("Complete");

  // Append to task div
  task.prepend(h3);
  task.append(h5, editBtn, dltBtn, completeBtn);

  // Append task to task_card
  taskCard.appendChild(task);

  dltBtn.addEventListener("click", () => {
    task.remove();
  });

  completeBtn.addEventListener("click", () => {
    task.classList.add("completed");
  });

  editBtn.addEventListener("click", () => {
    let newTitle = prompt("Enter new title");

    if (newTitle) {
      h3.textContent = newTitle;
    }
  });

  form.reset();
});


const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});
