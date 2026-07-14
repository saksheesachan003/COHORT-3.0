import React from "react";
import Comp4 from "./Comp4";

const Comp3 = ({data}) => {
    // console.log(data);
  return (
    <div>
      <h1>Component 3 inside comp 2</h1>

      {/* // removed prop drilling part */}
      {/* <Comp4 
      // data={data} 
      /> */}

      <Comp4 />
    </div>
  );
};

export default Comp3;