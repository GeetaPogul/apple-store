import React from "react";

import { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "Move-To-Wishlist":
      return [...state, action.payload];

    case "Remove-From-Wishlist":
      return state.filter(
        (wishlistItem) => wishlistItem.id !== action.payload.id
      );

    default:
      return state;
  }
};

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, []);

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
