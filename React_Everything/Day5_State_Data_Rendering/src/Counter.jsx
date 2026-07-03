import React, { useState } from "react";

const Counter = () => {
  console.log("Counter is rendered");
  const [count, setCount] = useState(0);
  console.log(count);

  //   value will 1, 2, 3...... ( Batching -> doesn't matter three times calls)

  return (
    <div>
      <h1>Count is {count}</h1>
      <button
        onClick={() => {
        //   setCount(count + 1);
        //   setCount(count + 1);
        //   setCount(count + 1);


        //// Can do for increment by 3
        // setCount(count + 3);

        /// In setFunction, there is one value which is previous ( current state )
        /// here didn't return, so this will give undefinied ( In func, by default gives undefinied if don't return )
        // setCount((prev) => {
        //     prev + 1;
        // })

        //// Now will count will increase by 3 and but rendering will be one time 
        setCount((prev) =>  prev + 1);
        setCount((prev) =>  prev + 1);
        setCount((prev) =>  prev + 1);

        }}
        className="bg-amber-300 p-0.5 border-2"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
