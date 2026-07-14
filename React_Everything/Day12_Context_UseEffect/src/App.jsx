import React, { useContext, useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { MyStore } from "./context/MyContext";

import axios from "axios";

const App = () => {
  //// here re-render again and again
  // console.log("app rendering...");

  // let {count, setCount} = useContext(MyStore);

  const [toggle, setToggle] = useState(false);

  const [apiData, setApiData] = useState(null);

  /// now console will run only one time not re-render -> blank dependency
  // useEffect(() => {
  //   console.log("app rendering...");
  // }, []);

  /// now console will run only when toggle will change
  useEffect(() => {
    console.log("app rendering...");
  }, [toggle]);

  let getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setApiData(res.data);
  };
  
  useEffect(() => {
    getData();
  }, []);

  console.log(apiData);


  return (
    <div>
      {/* <h1>Count : {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="p-0.5 rounded bg-blue-400"
      >
        Increment
      </button> */}
      {/*  <Home />
      <About />
      <Contact /> */}

      <h1> Toggle : {toggle ? "ON" : "OFF"}</h1>
      <button
        className="p-0.5 rounded bg-blue-400"
        onClick={() => setToggle((prev) => !prev)}
      >
        Change Toggle State
      </button>

      {toggle ? <Contact /> : <About />}
    </div>
  );
};

export default App;
