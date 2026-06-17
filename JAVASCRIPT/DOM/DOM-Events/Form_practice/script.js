const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const url = document.querySelector("#url");

const users = document.querySelector(".users");

/// Created manually data and then shown in card user format
let usersData = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    image: "https://i.pravatar.cc/150?img=1",
    dob: "1998-04-15",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    image: "https://i.pravatar.cc/150?img=2",
    dob: "2000-08-22",
  },
  {
    id: 3,
    name: "Rohan Gupta",
    email: "rohan.gupta@example.com",
    image: "https://i.pravatar.cc/150?img=3",
    dob: "1997-12-10",
  },
  {
    id: 4,
    name: "Sneha Singh",
    email: "sneha.singh@example.com",
    image: "https://i.pravatar.cc/150?img=4",
    dob: "1999-06-05",
  },
  {
    id: 5,
    name: "Kabir Mehta",
    email: "kabir.mehta@example.com",
    image: "https://i.pravatar.cc/150?img=5",
    dob: "2001-02-18",
  },
];

const ui = () => {
  users.innerHTML = ""; // blanks users data before adding element

  usersData.forEach((elem, index) => {
    users.innerHTML += ` 
    <div class="user_card">
        <div class="img_box">
          <img
            src= "${elem.image}
            alt="No Image"
          />
        </div>

        <div class="text">
          <h3>Name: ${elem.name}</h3>
          <p>Email: ${elem.email}</p>
          <p>DOB: ${elem.dob} </p>
        </div>

        <div class="actions">
          <button id="edit">Edit</button>
          <button onClick="deleteCard(${index})" id="dlt">Delete</button>
        </div>

      </div>`;
  });
};

ui();

/// In on submit, creates user's card
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = inp1.value;
  let email = inp2.value;
  let imgUrl = url.value;

  //   if (name.trim() === "" && email.trim() === "") return;

  ///// Option 2:) can push directly in usersData array  and then submit event

  usersData.push({
    name,
    email,
    image: imgUrl,
  });

  ui();

  ///// Options 1 :) in time submit this creates but not goes in array

  // users.innerHTML += `
  //  <div class="user_card">
  //       <div class="img_box">
  //         <img
  //           src="${imgUrl}"
  //           alt="No Image"
  //         />
  //       </div>

  //       <div class="text">
  //         <h3>Name: ${name}</h3>
  //         <p>Email: ${email}</p>
  //       </div>
  //     </div>`;

  form.reset();
});

//// Delets user data
let deleteCard = (index) => {
  usersData.splice(index, 1);
  ui();
};
