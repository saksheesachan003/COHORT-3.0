import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Comp4 = () => {
  // console.log(data);

  let cd = useContext(MyStore); // connects store
  console.log("Context data:", cd);

  return (
    <div>
      <h1>Component4 inside comp 3</h1>
    </div>
  );
};

export default Comp4;
