import { useCart } from "./contexts/cart-context";

const Cart = () => {
  const { cartState, cartDispatch } = useCart();

  return (
    <>
      <h1> Cart </h1>
      <h3> Items : {cartState.reduce((a, b) => a + b.quantity, 0)} </h3>
      <h3>
        {" "}
        Total price : {cartState.reduce(
          (a, b) => a + b.quantity * b.price,
          0
        )}{" "}
      </h3>

      <div>
        {cartState.map((cartItem) => (
          <div>
            <h3> {cartItem.name} </h3>
            <p> Quantity : {cartItem.quantity} </p>
            <p> {cartItem.price} </p>
            <div>
              <button
                onClick={() =>
                  cartDispatch({
                    type: "Increment-Quantity",
                    payload: cartItem
                  })
                }
              >
                {" "}
                +{" "}
              </button>

              <button
                onClick={() =>
                  cartDispatch({
                    type: "Decrement-Quantity",
                    payload: cartItem
                  })
                }
              >
                {" "}
                -{" "}
              </button>
            </div>{" "}
            <br />
            <button
              onClick={() =>
                cartDispatch({ type: "Remove-From-Cart", payload: cartItem })
              }
            >
              Romove From Cart{" "}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
