import { useCart } from "./context/cart.context";

import { useProducts } from "./context/product.context";

import { useWishlist } from "./context/wishlist.context";

const ProductList = () => {
  const {
    products,
    sortBy,
    fastDelivery,
    minDays,

    filtersDispatch
  } = useProducts();

  const { cartState, cartDispatch } = useCart();

  const { wishlistState, wishlistDispatch } = useWishlist();

  const sortData = (products, sortBy) => {
    if (sortBy === "PRICE-HIGH-TO-LOW") {
      return products.sort((a, b) => b.price - a.price);
    } else if (sortBy === "PRICE-LOW-TO-HIGH") {
      return products.sort((a, b) => a.price - b.price);
    }

    return products;
  };

  const filteredData = (products) => {
    if (fastDelivery) {
      return products.filter(
        (product) => product.delivery_status === "Fast Delivery"
      );
    } else if (minDays) {
      return products.filter(
        (product) => product.delivery_status === "Minimum 3 Days"
      );
    }

    return products;
  };

  const finalProducts = filteredData(sortData(products, sortBy));

  return (
    <>
      <legend> Sort By </legend>
      <label>
        <input
          type="radio"
          name="sort"
          checked={sortBy && sortBy === "PRICE-HIGH-TO-LOW"}
          onChange={() =>
            filtersDispatch({ type: "Sort-By", payload: "PRICE-HIGH-TO-LOW" })
          }
        />
        Price - High to Low
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          checked={sortBy && sortBy === "PRICE-LOW-TO-HIGH"}
          onChange={() =>
            filtersDispatch({ type: "Sort-By", payload: "PRICE-LOW-TO-HIGH" })
          }
        />
        Price - Low to High
      </label>{" "}
      <br /> <br />
      <legend>Filters </legend>
      <lable>
        <input
          type="checkbox"
          checked={fastDelivery}
          onChange={() => filtersDispatch({ type: "Fast_Delivery" })}
        />
        Fast Delivery
      </lable>
      <lable>
        <input
          type="checkbox"
          checked={minDays}
          onChange={() => filtersDispatch({ type: "Min_Days" })}
        />
        3 Days
      </lable>
      <br />
      <h2> Products </h2>
      <div>
        <ul style={{ listStyle: "none" }}>
          {finalProducts.map((product) => (
            <li key={product.id}>
              {/* <div className="cartImage"> {product.imageUrl} </div> */}
              <p> {product.name} </p>
              <p> {product.price} </p>
              <p> {product.delivery_status} </p>

              {cartState.find((cartItem) => cartItem.id === product.id) ? (
                <button
                  onClick={() =>
                    cartDispatch({
                      type: "Remove-From-Cart",
                      payload: product
                    })
                  }
                >
                  {" "}
                  Remove From Cart
                </button>
              ) : (
                <button
                  onClick={() =>
                    cartDispatch({ type: "Add-To-Cart", payload: product })
                  }
                >
                  Add To Cart
                </button>
              )}

              {wishlistState.find(
                (wishlistItem) => wishlistItem.id === product.id
              ) ? (
                <button
                  onClick={() =>
                    wishlistDispatch({
                      type: "Remove-From-Wishlist",
                      payload: product
                    })
                  }
                >
                  Remove From Wishlist{" "}
                </button>
              ) : (
                <button
                  onClick={() =>
                    wishlistDispatch({
                      type: "Move-To-Wishlist",
                      payload: product
                    })
                  }
                >
                  Move To Wishlist{" "}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;
