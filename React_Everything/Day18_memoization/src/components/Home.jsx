import React from "react";

const Home = ({ users }) => {
  console.log("home rendering...");
  return (
    <div>
      <h1>Home this side</h1>
    </div>
  );
};

export default React.memo(Home);

///// wrapped in React.memo , so in count increment Home and about page will not re-render

///// on the basis on id, re-renders so in this case id is same so it won't re-render
// export default React.memo(Home, (prevProps, nextProps) => {
//   return prevProps.users.id === nextProps.users.id;
// });
