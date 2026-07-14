import React from "react";
import Comp3 from "./Comp3";

const Comp2 = ({data}) => {
    // console.log(data);
  return (
    <div>
      <h1>Component 2 inside comp 1</h1>
      {/* <Comp3 
      // data={data}  
      /> */}

      <Comp3 />
    </div>
  );
};

export default Comp2;