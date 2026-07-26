import React, { useState } from "react";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  // const [toggle, setToggle] = useState("home");

  return (
    <div classname="h-screen p-2">
      {/* Step - 1 :-   Using toggle approach ( but can use in two component ) */}
      {/* <nav className=" flex items-center justify-between mb-4 bg-gray-400 rounded p-4 m-2">
        <h1>Logo</h1>
        <div className=" flex items-center gap-10 justify-between">

          <p onClick={() => setToggle("home")}>Home</p>
          <p onClick={() => setToggle("about")}>About</p>
          <p onClick={() => setToggle("contact")}>Contact</p> 


        </div>
        <button>Login</button>
      </nav> */}

      {/* <div>
        {toggle === "home" && <Home />}
        {toggle === "about" && <About />}
        {toggle === "contact" && <Contact />}
      </div> */}

      {/* Step 2 :- React-Router approach -> as for many navbar links */}
      <Navbar />

      <AppRoutes />
    </div>
  );
};

export default App;
