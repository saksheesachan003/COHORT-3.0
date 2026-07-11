import React, { useRef, useState } from "react";

const Form = () => {
  console.log("Form re-rendering...");

  ///// Set Func re-renders again and again un-necessary......
  // const [formData, setFormData] = useState({});
  // console.log(formData);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  ///// to prevent re-rendering, use to fetch real dom, can create one by one refrence for each
  // let inpRef = useRef(null);
  // console.log(inpRef);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(inpRef);
  // };

  // created a refrence for form, using object
  const formRef = useRef({});
  console.log(formRef);

  let [products, setProducts] = useState();

  console.log("This is Products:", products)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef);

    let obj = {
      pName: formRef.current.productName.value,
      price: formRef.current.price.value,
      category: formRef.current.category.value,
      image: formRef.current.image.value,
    }
    setProducts(obj);
  };

  return (
    <div className="w-80 bg-white rounded">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 rounded">
        <input
          //// When use onChange then form re-render again and again bcs of set func (re-renders app)
          // onChange={(e) =>
          //   setFormData({ ...formData, productName: e.target.value })
          // }

          ///// To prevent re-rendering use "useRef" hook, In each input, there is reference ( pass callback )
          // ref -> points the core element of refrence
          // ref={(e) => console.log(e)}

          //// When real dom events react wraps then creates "Synthetic Base Events"
          // onChange={(e) => console.log(e)}

          //// Gives refrence of input
          // ref={inpRef.current.value}

          ref={(e) => (formRef.current.productName = e)}
          className="p-2 border border-grap-400 rounded"
          type="text"
          placeholder="Product Name"
        />
        <input
          // onChange={(e) => setFormData({ ...formData, price: e.target.value })}

          ref={(e) => (formRef.current.price = e)}
          className="p-2 border border-grap-400 rounded"
          type="text"
          placeholder="Price"
        />
        <span>Select Category</span>
        <select
          className="p-2 border border-grap-400 rounded"
          // onChange={(e) =>
          //   setFormData({ ...formData, category: e.target.value })
          // }

          ref={(e) => (formRef.current.category = e)}
        >
          <option value="MENS">Mens</option>
          <option value="WOMENS">Womens</option>
          <option value="KIDS">Kids</option>
        </select>
        <input
          // onChange={(e) => setFormData({ ...formData, image: e.target.value })}

          ref={(e) => (formRef.current.image = e)}
          type="url"
          placeholder="Image"
          className="p-2 border border-grap-400 rounded"
        />
        <button className="p-2 bg-blue-600 rounded text-white">CREATE</button>
      </form>

      <h1>{products?.pName}</h1>
      <h1>{products?.price}</h1>
      <h1>{products?.category}</h1>
      <h1>{products?.image}</h1>
    </div>
  );
};

export default Form;
