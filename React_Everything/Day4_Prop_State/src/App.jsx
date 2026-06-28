import React, { useState } from "react";
import Contact from "./Components/Contact";
import Something, { One, Two } from "./test";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

const App = () => {
  // Before return, Runs Javascript, and made javascript funx not functional Component
  // Something();
  // One();
  // Two();

  // made state for count ( re-render APP  -> hooks )
  const [count, setCount] = useState(0);

  let [flag, setFlag] = useState(true);

  console.log(flag);

  console.log(count);

  return (
    <div>
      {/* <h1>Hey I'm an UI</h1>
      <Contact /> */}

      {/* <Navbar />
      <Hero />
      <Footer /> */}

      <h1>Count is - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* No re - render */}
      <button onClick={() => setFlag(true)}>Change True</button>

      {/* Two times re-render, 1st time render 2nd time render to check */}
      <button onClick={() => setFlag(false)}>Change Boolean</button>
      
    </div>
  );
};

export default App;
