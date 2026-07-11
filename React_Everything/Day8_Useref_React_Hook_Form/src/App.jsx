import React, { useRef } from "react";
import Form from "./components/Form";
import RHF from "./components/RHF";

const App = () => {
  console.log("App re-rendering...");

  // let inpRef = useRef();
  // console.log(inpRef);

  return (
    <div className="h-screen w-full bg-gray-300 p-6 flex flex-col gap-4 ">
      <h1 className="mb-8">Hey....., This is form </h1>
      {/* <Form /> */}

      {/* <input ref={inpRef} type="text" placeholder="Something...." />
      <button onClick={() => console.log(inpRef.current.value)}>Submit</button> */}

      <RHF />
    </div>
  );
};

export default App;
