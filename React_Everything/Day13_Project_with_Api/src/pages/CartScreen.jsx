import React from "react";
import CartCard from "../components/CartCard";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const CartScreen = () => {
  let {cartItems} = useContext(MyStore);
  console.log("Cart Items:", cartItems);

  return (
    <div className="h-[95%] text-6xl grid grid-cols-3 gap-6">
      {cartItems.map((item) => {
        return <CartCard product={item} key={item.id} />;
      })}
    </div>
  );
};

export default CartScreen;
