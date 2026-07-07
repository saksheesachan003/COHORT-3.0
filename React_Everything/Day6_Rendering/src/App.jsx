import React, { useState } from "react";

const App = () => {
  console.log("App Rendering...");

  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    name: "Raman",
  });
  console.log(user);

  const handleClick = () => {
    setUser({
      name: "Rohit",
    });
  };

  return (
    <div>
      <h1>Hello</h1>
      <h2>Count is - {count}</h2>
      <h2>Name is - {user.name}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={handleClick}

        // Need to re-render, bcs value save in lexical scope
        // onClick={() => {
        //   user.name = "Rohit";
        // }}

        // Doesn't re-render...
        // onClick={() => {
        //   user.name = "Rohit";
        //   setUser(user);
        // }}
      >
        Change Name
      </button>
    </div>
  );
};

export default App;
