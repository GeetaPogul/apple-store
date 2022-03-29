import { createContext, useContext, useReducer } from "react";

const myProducts = [
  {
    id: 1,
    name: "Kala Chasma",
    price: 1000,
    delivery_status: "Minimum 3 Days"
  },

  {
    id: 2,
    name: "dress",
    price: 5000,
    delivery_status: "Fast Delivery"
  },

  {
    id: 3,
    name: "jalebi",
    price: 50,
    delivery_status: "Fast Delivery"
  },

  {
    id: 4,
    name: "japani joota",
    price: 10000,
    delivery_status: "Fast Delivery"
  },

  {
    id: 5,
    name: "topi",
    price: 1000,
    delivery_status: "Minimum 3 Days"
  },
  {
    id: 6,
    name: "japani ",
    price: 13000,
    delivery_status: "Fast Delivery"
  }
];

const ProductsContext = createContext();

const filterReducer = (state, action) => {
  switch (action.type) {
    case "Sort-By":
      return {
        ...state,
        sortBy: action.payload
      };

    case "Fast_Delivery":
      return {
        ...state,
        fastDelivery: !state.fastDelivery
      };
    case "Min_Days":
      return {
        ...state,
        minDays: !state.minDays
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
      fastDelivery: false
    }
  );

  return (
    <ProductsContext.Provider
      value={{
        products,
        sortBy,
        minDays,
        fastDelivery,
        filtersDispatch
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
