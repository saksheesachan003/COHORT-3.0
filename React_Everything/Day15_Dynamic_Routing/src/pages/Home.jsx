import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductsCard";

const Home = () => {
  let { productsData, setProductsData } = useContext(MyStore);

  let getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res);
      setProductsData(res.data);
    } catch (err) {
      console.log("Error in api : ", err);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="p-2 grid grid-cols-4 gap-4">
      {productsData.map((val) => {
        return <ProductCard key={val.id} product={val} />;
      })}
    </div>
  );
};

export default Home;
