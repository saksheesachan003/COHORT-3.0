import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUsers, setToggle }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    // when input will change then will run
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      image: "",
    },
  });

  console.log(errors);

  const formSubmit = (data) => {
    console.log("Submitted Data:", data);
    setUsers((prev) => [...prev, data]);
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-semibold">Create User</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 flex flex-col gap-3 p-4 rounded border-2 border-black bg-gray-200"
      >
        <input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^\S.*$/,
              message: "Blank Spaces is not allowed",
            },
          })}
          className="p-2 rounded outline-0 border border-black"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        <input
          {...register("email", {
            // regular expression (RegEx) for email id
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className="p-2 rounded outline-0 border border-black"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <input
          {...register("mobile", {
            // Validation for mobile number
            required: "Mobile is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits are required",
            },
          })}
          className="p-2 rounded outline-0 border border-black"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-600">{errors.mobile.message}</p>
        )}
        <input
          {...register("image", { required: "Image is required" })}
          className="p-2 rounded outline-0 border border-black"
          type="url"
          placeholder="Image"
        />
        {errors.image && <p className="text-red-600">{errors.image.message}</p>}
        <button className="text-white bg-blue-700 p-4 rounded-xl cursor-pointer">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
