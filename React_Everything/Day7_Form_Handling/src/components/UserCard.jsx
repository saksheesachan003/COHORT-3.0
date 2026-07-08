import React from "react";

const UserCard = ({ user }) => {

  return (
    <div className="p-4 flex flex-col gap-4 border-gray-400 border rounded bg-white">
      <div className="w-50 h-50 rounded overflow-hidden">
        <img className="w-full h-full" src={user.image} alt="" />
      </div>
      <div>
        <h1>Name : {user.name}</h1>
        <p>Email : {user.email}</p>
      </div>
      <button className="p-2 bg-red-600 text-white rounded">Delete</button>
    </div>
  );
};

export default UserCard;
