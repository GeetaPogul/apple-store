import React from "react";
import { createContext, useContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

const myProducts = [
  {
    id: uuid(),
    name: "iMac ",
    price: "RS 28990,",
    delivery_status: "Out of Stock",
    ratings: "5star",
    category: "iMac",
    img: "/images/imac/imac1.jpg",
  },
  {
    id: uuid(),
    name: "Apple Watch ",
    price: "RS 9000",
    delivery_status: "Fast Delivery",
    ratings: "5star",
    category: "AppleWatch",
    img: "/images/watch/apple-watch3.jpg",
  },

  {
    id: uuid(),
    name: "iPad ",
    price: "RS 35440",
    delivery_status: "Fast Delivery",
    ratings: "5star",
    category: "iPad",
    img: "/images/ipad/ipad1.jpg",
  },

  {
    id: uuid(),
    name: "iMac ",
    price: "RS 29600",
    delivery_status: "Fast Delivery",
    ratings: "4star",
    category: "iMac",
    img: "/images/imac/imac2.jpg",
  },

  {
    id: uuid(),
    name: "iPad ",
    price: "RS 41000",
    delivery_status: "Out of Stock",
    ratings: "4star",
    category: "iPad",
    img: "/images/ipad/ipad2.webp",
  },
  {
    id: uuid(),
    name: "Apple Watch ",
    price: "RS 8999",
    delivery_status: "Out of Stock",
    ratings: "3star",
    category: "AppleWatch",
    img: "/images/watch/apple-watch2.jpg",
  },
  {
    id: uuid(),
    name: "Apple Watch",
    price: "RS 7080",
    delivery_status: "Fast Delivery",
    ratings: "3star",
    category: "AppleWatch",
    img: "/images/watch/apple-watch4.jpg",
  },
  {
    id: uuid(),
    name: "iMac ",
    price: "RS 33499",
    delivery_status: "Out of Stock",
    ratings: "3star",
    category: "iMac",
    img: "/images/imac/imac3.webp",
  },

  {
    id: uuid(),
    name: "iPad ",
    price: "RS 43900",
    delivery_status: "Out of Stock",
    ratings: "4star",
    category: "iPad",
    img: "/images/ipad/ipad3.jpg",
  },

  {
    id: uuid(),
    name: "iPad",
    price: "RS 33999",
    delivery_status: "Fast Delivery",
    ratings: "4star",
    category: "iPad",
    img: "/images/ipad/ipad4.jpg",
  },
  {
    id: uuid(),
    name: "Apple Watch",
    price: "RS 9999",
    delivery_status: "Fast Delivery",
    ratings: "5star",
    category: "AppleWatch",
    img: "/images/watch/apple-watch1.webp",
  },
  {
    id: uuid(),
    name: "iMac",
    price: "RS 7999",
    delivery_status: "Fast Delivery",
    ratings: "3star",
    category: "iMac",
    img: "/images/imac/imac4-1.png",
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
    case "OutOfStock":
      return {
        ...state,
        minDays: !state.minDays,
      };
    case "iMac":
      return {
        ...state,
        iMac: !state.iMac,
      };
    case "iPad":
      return {
        ...state,
        iPad: !state.iPad,
      };

    case "iWatch":
      return {
        ...state,
        iWatch: !state.iWatch,
      };

    case "fourStars":
      return {
        ...state,
        fourStars: !state.fourStars,
      };
      case "threeStars":
        return {
          ...state,
          threeStars: !state.threeStars,
        };
        case "twoStars":
          return {
            ...state,
            twoStars: !state.twoStars,
          };
          case "oneStar":
            return {
              ...state,
              oneStar: !state.oneStar,
            };
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const products = myProducts;
  const [
    { sortBy, minDays, fastDelivery, iMac, iPad, iWatch,fourStars,threeStars,
      twoStars,oneStar},
    filtersDispatch,
  ] = useReducer(filterReducer, {
    sortBy: "",
    minDays: false,
    fastDelivery: false,
    iMac: false,
    iPad: false,
    iWatch: false,
    fourStars :false,
    threeStars:false,
    twoStars:false,
    oneStar:false,
  });

  return (
    <ProductsContext.Provider
      value={{
        products,
        sortBy,
        minDays,
        fastDelivery,
        iMac,
        iPad,
        iWatch,
        fourStars,
        threeStars,
        twoStars,
        oneStar,
        
        filtersDispatch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
