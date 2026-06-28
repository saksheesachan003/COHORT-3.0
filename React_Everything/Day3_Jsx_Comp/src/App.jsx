import React from "react";
import About from "./About";

let App = () => {
  ////// Behind process ( creates h1 element )
  // let h1 = React.createElement("h1", null, "Hello Guys...");
  // return h1;

  //////// Design this  UI In DOM ( Hardest way )
  // <div>
  //   <h1>Hello</h1>
  //   <h2>Bye</h2>
  //   <h3>Now Come</h3>
  // </div>

  // let ui = React.createElement("div", {}, [
  //   React.createElement("h1", null, "Hello"),
  //   React.createElement("h2", null, "Bye"),
  //   React.createElement("h3", null, "Now Come"),
  // ])
  // return ui;

  //////// Design this  UI In DOM ( Using Bable + JSX -> easy way)
  return (
    <main>
      <h1>Hello</h1>
      <h2>Bye</h2>
      <h3>Now Come</h3>
      {/* {About("rishika")} */}
      <About name="rishika" age="21" element={<h1>Hello Children</h1>}>
        <h1>Hello Children</h1>
      </About>
    </main>
  );
};

export default App;
