import React from "react";
import { useCart } from "./context/cart.context";
import "../list/slider.css";
import { Link } from "react-router-dom";

const CartItem = () => {
  const { cartState, cartDispatch } = useCart();

  return (
    <>
      <Link className="links" to="/product">
        Cart more Items
      </Link>

      <h1 className="heading">
        Cart Items : {cartState.reduce((a, b) => a + b.quantity, 0)}
      </h1>
      <h3 className="heading">
        Total price : {cartState.reduce((a, b) => a + b.quantity * b.price, 0)}
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {cartState.map((cartItem) => (
          <div
            style={{
              margin: "1rem",
              maxWidth: "40%",
              padding: "2rem",
              background: "white",
              boxShadow: " 1px 1px 4px rgb(151, 140, 140)",
            }}
          >
            <img
              style={{
                width: "16rem",
                height: "14rem",
              }}
              src={cartItem.img}
              alt="card"
            />
            <h3> {cartItem.name} </h3>
            <h3> Quantity : {cartItem.quantity} </h3>
            <h4> {cartItem.price} </h4>
            <div>
              <button
                className="card__btn btn1 pri-btn add"
                onClick={() =>
                  cartDispatch({
                    type: "Increment-Quantity",
                    payload: cartItem,
                  })
                }
              >
                +
              </button>

              <button
                className="card__btn btn1 pri-btn add"
                onClick={() =>
                  cartDispatch({
                    type: "Decrement-Quantity",
                    payload: cartItem,
                  })
                }
              >
                -
              </button>
            </div>
            <br />
            <button
              className="card__btn btn1 pri-btn"
              onClick={() =>
                cartDispatch({ type: "Remove-From-Cart", payload: cartItem })
              }
            >
              Romove From Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItem;
