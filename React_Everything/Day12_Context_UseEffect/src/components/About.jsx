import React, { useEffect } from "react";

const About = () => {
  // console.log("about rendering...");

  //// Memory Leaks -> if about component is unmounts then this setInterval should also remove
  let interval = setInterval(() => {
    console.log("hey, I'm in about");
  }, 1000);

  useEffect(() => {
    console.log("about rendering...");

    /// This triggers, when unmounting component
    return () => {
      clearInterval(interval);
      console.log("I am unmounting...");
    };
  });

  return (
    <div>
      <h1>About page</h1>
    </div>
  );
};

export default About;
