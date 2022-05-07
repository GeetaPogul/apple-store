import React from "react";
import { createContext, useContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

const myProducts = [
  {
    id: uuid(),
    name: "iMac ",
    currency: "RS",
    price: 28990,
    delivery_status: "Out of Stock",
    ratings: "5star",
    category: "iMac",
    img: "/images/imac/imac1.jpg",
  },
  {
    id: uuid(),
    name: "Apple Watch ",
    currency: "RS",
    price: 9000,
    delivery_status: "Fast Delivery",
    ratings: "5star",
    category: "AppleWatch",
    img: "/images/watch/apple-watch3.jpg",
  },

  {
    id: uuid(),
    name: "iPad ",
    currency: "RS",
    price: 35440,
    delivery_status: "Fast Delivery",
    ratings: "5star",
    category: "iPad",
    img: "/images/ipad/ipad1.jpg",
  },

  {
    id: uuid(),
    name: "iMac ",
    currency: "RS",
    price: 29600,
    delivery_status: "Fast Delivery",
    ratings: "4star",
    category: "iMac",
    img: "/images/imac/imac2.jpg",
  },

  {
    id: uuid(),
    name: "iPad ",
    currency: "RS",
    price: 41000,
    delivery_status: "Out of Stock",
    ratings: "4star",
    category: "iPad",
    img: "/images/ipad/ipad2.webp",
  },
  {
    id: uuid(),
    name: "Apple Watch ",
    currency: "RS",
    price: 8999,
    delivery_status: "Out of Stock",
    ratings: "3star",
    category: "AppleWatch",
    img: "/images/watch/apple-watch2.jpg",
  },
  {
    id: uuid(),
    name: "Apple Watch",
    currency: "RS",
    price: 7080,
    delivery_status: "Fast Delivery",
    ratings: "3star",
    category: "AppleWatch",
    img: "/images/watch/apple-watch4.jpg",
  },
  {
    id: uuid(),
    name: "iMac ",
    currency: "RS",
    price: 33499,
    delivery_status: "Out of Stock",
    ratings: "3star",
    category: "iMac",
    img: "/images/imac/imac3.webp",
  },

  {
    id: uuid(),
    name: "iPad ",
    currency: "RS",
    price: 43900,
    delivery_status: "Out of Stock",
    ratings: "4star",
    category: "iPad",
    img: "/images/ipad/ipad3.jpg",
  },

  {
    id: uuid(),
    name: "iPad",
    currency: "RS",
    price: 33999,
    delivery_status: "Fast Delivery",
    ratings: "4star",
    category: "iPad",
    img: "/images/ipad/ipad4.jpg",
  },
  {
    id: uuid(),
    name: "Apple Watch",
    currency: "RS",
    price: 9999,
    delivery_status: "Fast Delivery",
    ratings: "5star",
    category: "AppleWatch",
    img: "/images/watch/apple-watch1.webp",
  },
  {
    id: uuid(),
    name: "iMac",
    currency: "RS",
    price: 7999,
    delivery_status: "Fast Delivery",
    ratings: "3star",
    category: "iMac",
    img: "/images/imac/imac4-1.png",
  },
];

const ProductsContext = createContext();

const filterReducer = (state, action) => {
  switch (action.type) {

    case "RANGE_FILTER":
      return {
        ...state, range : action.payload,
      }
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
    case "Out_Of_Stock":
      return {
        ...state,
        outOfStock: !state.outOfStock,
      };

    case "I-MAC":
      return {
        ...state,
        iMac: !state.iMac,
      };

    case "I-PAD":
      return {
        ...state,
        iPad: !state.iPad,
      };

    case "I-WATCH":
      return {
        ...state,
        iWatch: !state.iWatch,
      };

    case "5star":
      return {
        ...state,
        fiveStar: !state.fiveStar,
      };

    case "4star":
      return {
        ...state,
        fourStar: !state.fourStar,
      };

    case "3star":
      return {
        ...state,
        threeStar: !state.threeStar,
      };

    case "2star":
      return {
        ...state,
        twoStar: !state.twoStar,
      };

    case "CLEAR":
      return {
        ...state,
        fastDelivery: false,
        outOfStock: false,
        iMac :false,
        iPad:false,
        iWatch:false,
        fiveStar:false,
        fourStar:false,
        threeStar:false,
        twoStar:false,
      };
    default:
      return state;
  }
};

// threeStar,twoStar
const ProductsProvider = ({ children }) => {
  const products = myProducts;
  const [
    {
      range,
      sortBy,
      iPad,
      iWatch,
      iMac,
      outOfStock,
      fastDelivery,
      fiveStar,
      fourStar,
      threeStar,
    },
    filtersDispatch,
  ] = useReducer(filterReducer, {
    range : 5000,
    sortBy: "",
    outOfStock: true,
    fastDelivery: true,
    iPad,
    iWatch,
    iMac,
    fiveStar,
    fourStar,
    threeStar,
  });
  return (
    <ProductsContext.Provider
      value={{
        range ,
        products,
        sortBy,
        outOfStock,
        fastDelivery,
        iMac,
        iPad,
        iWatch,
        fiveStar,
        fourStar,
        threeStar,
        filtersDispatch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
