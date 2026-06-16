const inp = document.querySelector("input");
const btn = document.querySelector("button");
const todoBox = document.querySelector(".todo-list");

btn.addEventListener("click", () => {
  const value = inp.value;

  // If space is there then don't add
  if (value.trim() === "") return;

  todoBox.innerHTML += ` <div class="li">
          <h3>${value}</h3>
          <div>
            <button class="btn edit">Edit</button>
            <button class="btn dlt">Delete</button>
          </div>
        </div>`;

  inp.value = "";
});
