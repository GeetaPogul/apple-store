import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add-To-Cart":
      return [...state, { ...action.payload, quantity: 1 }];

    case "Increment-Quantity":
      return state.map((cartItem) =>
        cartItem.id === action.payload.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

    case "Decrement-Quantity":
      return state.map((cartItem) =>
        cartItem.id === action.payload.id
          ? {
              ...cartItem,
              quantity:
                cartItem.quantity > 1
                  ? cartItem.quantity - 1
                  : cartItem.quantity
            }
          : cartItem
      );

    case "Remove-From-Cart":
      return state.filter((cartItem) => cartItem.id !== action.payload.id);

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
