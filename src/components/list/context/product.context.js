import React from "react";
import { createContext, useContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

const myProducts = [
  {
    id: uuid(),
    name: "iMac Product1",
    price: 1000,
    delivery_status: "Minimum 3 Days",
    img: "/images/imac/imac1.jpg",
  },

  {
    id: uuid(),
    name: "iMac Product2",
    price: 15000,
    delivery_status: "Fast Delivery",
    img: "/images/imac/imac2.jpg",
  },

  {
    id: uuid(),
    name: "iMac Product3",
    price: 50000,
    delivery_status: "Fast Delivery",
    img: "/images/imac/imac3.webp",
  },

  {
    id: uuid(),
    name: "iMac Product4",
    price: 19000,
    delivery_status: "Fast Delivery",
    img: "/images/imac/imac4-1.png",
  },

  {
    id: uuid(),
    name: "iMac Product5",
    price: 21000,
    delivery_status: "Minimum 3 Days",
    img: "/images/ipad/ipad1.jpg",
  },
  {
    id: uuid(),
    name: "iMac Product6",
    price: 21000,
    delivery_status: "Minimum 3 Days",
    img: "/images/ipad/ipad2.webp",
  },
  {
    id: uuid(),
    name: "iMac Product7",
    price: 21000,
    delivery_status: "Minimum 3 Days",
    img: "/images/ipad/ipad3.jpg",
  },

  {
    id: uuid(),
    name: "iMac Product8",
    price: 21000,
    delivery_status: "Minimum 3 Days",
    img: "/images/ipad/ipad4.jpg",
  },
 
];

const ProductsContext = createContext();

const filterReducer = (state, action) => {
  switch (action.type) {
    case "Sort-By":
      return {
        ...state,
        sortBy: action.payload,
      };

    case "Fast_Delivery":
      return {
        ...state,
        fastDelivery: !state.fastDelivery,
      };
    case "Min_Days":
      return {
        ...state,
        minDays: !state.minDays,
      };
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const products = myProducts;
  const [{ sortBy, minDays, fastDelivery }, filtersDispatch] = useReducer(
    filterReducer,
    {
      sortBy: "",
      minDays: false,
      fastDelivery: false,
    }
  );

  return (
    <ProductsContext.Provider
      value={{
        products,
        sortBy,
        minDays,
        fastDelivery,
        filtersDispatch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
