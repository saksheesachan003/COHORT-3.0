import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import CartScreen from "./pages/CartScreen";
import { useContext } from "react";
import { MyStore } from "./context/MyContext";

const App = () => {
  const [productsData, setproductsData] = useState([]);

  let { isCartOpen, cartItems } = useContext(MyStore);

  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setproductsData(res.data);
      console.log("RESPONSE:", res.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="h-screen p-2 flex flex-col gap-4">
      <Navbar />

      {isCartOpen ? (
        <div className="">
          <CartScreen />
        </div>
      ) : (
        <div className="grid grid-col-4 gap-4">
          {productsData.map((product) => {

            // checks that product is in cart item or not
            let isInCart = cartItems.find((elem) => elem.id === product.id);
            console.log("IsInCart:", isInCart);

            return (
              <ProductCards
                product={product}
                key={product.id}
                isInCart={isInCart}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
