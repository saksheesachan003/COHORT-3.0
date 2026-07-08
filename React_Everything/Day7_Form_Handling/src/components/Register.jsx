import React, { useState } from "react";

const Register = ({ setToggle, setUsers, users }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  console.log(users);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the re-loading of form
    console.log(formData);

    ////// store formdata in users array......
    // setUsers([...users, formData]);

    setUsers((prev) => [...prev, formData]);

    // after submitting form, empty the form values
    setFormData({
      name: "",
      email: "",
      password: "",
      image: "",
    });
  };

  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
        <input
          required // value won't go empty, this controls
          value={formData.name}
          name="name" // always give name, to render value in set func
          className="p-2 border-gray-400 rounded"
          type="text"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          required
          value={formData.email} // use value for two way binding, this react tells to formData
          name="email"
          className="p-2 border-gray-400 rounded"
          type="text"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          required
          value={formData.password}
          name="password"
          className="p-2 border-gray-400 rounded"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          required
          value={formData.image}
          name="image"
          className="p-2 border-gray-400 rounded"
          type="url"
          placeholder="Image"
          onChange={handleChange}
        />
        <button className="p-2 bg-blue-600 text-white rounded">Register</button>
      </form>
      <p>
        Already have an Account{" "}
        <span
          //   onClick={() => setToggle(true)}
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-600 cursor-pointer"
        >
          Login Here
        </span>
      </p>
    </div>
  );
};

export default Register;
