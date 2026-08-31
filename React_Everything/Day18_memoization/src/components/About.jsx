import React from "react";

const About = ({ users, greet }) => {
  greet();
  console.log("about rendering...");
  return (
    <div>
      <h1>about this side..</h1>
    </div>
  );
};


export default React.memo(About);

/// basis on name, about page will re-render so it will re-render one time when name change
// export default React.memo(About, (prevProps, nextProps) => {
//   return prevProps.users.name === nextProps.users.name;
// });
