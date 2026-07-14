import React from "react";
import Comp2 from "./Comp2";

const Comp1 = ({ data, children }) => {
    // console.log(data);

    // constant property is children, where stores child component
  return (
    <div>
      <h1>Component1</h1>
      <Comp2 />

      {/* // showing the nested comp data */}
      {/* <Comp2 data={data} /> */}
      {/* {children} */}
    </div>
  );
};

export default Comp1;