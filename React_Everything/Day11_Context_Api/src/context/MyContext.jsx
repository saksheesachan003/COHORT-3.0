import { createContext, useState } from "react";

// Setup out blank store---
export const MyStore = createContext();

// make a provider of our store who handle data and serves to the customer
export const ContextProvider = ({ children }) => {
  const [centralValue, setCentralvalue] = useState("This is context");

  const [cartItems, setCartItems] = useState([]);

  return (
    <MyStore.Provider
    // In object can pass multiple values
      value={{
        centralValue,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
