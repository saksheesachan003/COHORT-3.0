import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  console.log("RHF re-rendering...");

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   let data = useForm();
  //   console.log(data);

  const formSubmit = (data) => {
    console.log("Submitted Data:",data);
    reset();
  };

  return (
    <div className="w-80 rounded">
      REACT HOOK FORM
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col gap-4 p-6 rounded bg-white"
      >
        <input
          {...register("productName", { required: true })}
          className="p-2 border border-grap-400 rounded"
          type="text"
          placeholder="Product Name"
        />
        <input
          {...register("price")}
          className="p-2 border border-grap-400 rounded"
          type="text"
          placeholder="Price"
        />
        <input
          {...register("category")}
          type="text"
          placeholder="Category"
          className="p-2 border border-grap-400 rounded"
        />
        <input
          {...register("image")}
          type="text"
          placeholder="Image"
          className="p-2 border border-grap-400 rounded"
        />
        <button className="p-2 bg-blue-600 rounded text-white">CREATE</button>
      </form>
    </div>
  );
};

export default RHF;
