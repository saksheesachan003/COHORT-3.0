import React, { useState } from "react";
import Login from "./components/login";
import Register from "./components/Register";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, setToggle] = useState(false);

  // will store all form data in array format
  const [users, setUsers] = useState([]);

  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center gap-6">
      {/* {toggle ? <Login setToggle={setToggle} /> : <Register  setToggle={setToggle} setUsers={setUsers} users={users}  />} */}

      <Register setToggle={setToggle} setUsers={setUsers} users={users} />

      <div className="flex gap-4">
        {users.map((elem) => (
          <UserCard user={elem} />
        ))}
      </div>
    </div>
  );
};

export default App;
