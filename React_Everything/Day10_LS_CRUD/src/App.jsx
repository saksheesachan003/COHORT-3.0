import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  ///// LocalStorage -> stores data in browser
  // let obj = {
  //   "name" : "Ritika",
  //   "age" : 25,
  //   "adress" : "kanpur"
  // }

  // //// JSON.stringify() -> converts in string, bcs in localstorage value is in string
  // localStorage.setItem("user", JSON.stringify(obj));

  // let lsd = localStorage.getItem("user");
  // ///// JSON.parse()  -> converts string in object again
  // console.log(JSON.parse(lsd));

  const [toggle, setToggle] = useState(true);

  const [users, setUsers] = useState(() => {
    /// get users data, if true then users data o/w empty array
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const handleDelete = (id) => {
    let filterUser = users.filter((elem, index) => {
      return index !== id;
    });
    console.log("Filtered User:", filterUser);
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };

  // sores data to update
  const [updatedData, setUpdatedData] = useState(null);
  console.log("Updated Data:", updatedData);

  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex gap-4 flex-wrap">
          {/* <UserCard /> */}
          {users.map((elem, index) => {
            return (
              <UserCard
                setUpdatedData={setUpdatedData}
                index={index}
                deleteUser={handleDelete}
                key={index}
                user={elem}
                setToggle={setToggle}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[70%]">
          <Form updatedData={updatedData} setUsers={setUsers} users={users} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};

export default App;
