import React, { useState } from "react";

const Form = () => {
  ///// Brute Force Approach -> jitne state utni value
  //  useState -> which will tell react about input and then re-render
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  console.log(name);


  ///// Better Approach -> usestate mein object ka use
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(formData);


  ///// Optimized Approach -> Remove repetition of setFormData 

  const handleChange = (e) => {
    let {name, value} = e.target;
    setFormData({...FormData, [name]: value})
  }

  
  return (
    <div className="flex flex-col gap-5 w-60">
      <input
        // onChange={(e) => console.log(e.target.value)}, here don't knowing value by react

        // onChange={(e) => setName(e.target.value)}

        // onChange={(e) => setFormData({ ...formData, name: e.target.value }) }

        name="name"

        onChange={handleChange}
        className="border-2"
        type="text"
        placeholder="name"
      />
      <input
        // onChange={(e) => setEmail(e.target.value)}

        // onChange={(e) => setFormData({ ...formData, email: e.target.value }) }

        name="email"

        onChange={handleChange}
        className="border-2"
        type="text"
        placeholder="email"
      />
      <input
        // onChange={(e) => setPassword(e.target.value)}

        // onChange={(e) => setFormData({ ...formData, password: e.target.value }) }

        name="password"

        onChange={handleChange}
        className="border-2"
        type="text"
        placeholder="password"
      />

      {/* <p>This is name - {name}</p>
      <p>This is email - {email}</p>
      <p>This is password - {password}</p> */}

      <p>This is name - {formData.name}</p>
      <p>This is email - {formData.email}</p>
      <p>This is password - {formData.password}</p>
      <button>Submit</button>
    </div>
  );
};

export default Form;
