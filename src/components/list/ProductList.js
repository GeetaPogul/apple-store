import React from "react";
import { useCart } from "../list/context/cart.context";
import { useProducts } from "../list/context/product.context";
import { useWishlist } from "../list/context/wishlist.context";
import "../list/card.css";
import "../list/slider.css";

const ProductList = () => {
  const {
    products,
    sortBy,
    fastDelivery,
    outOfStock,
    iMac,
    iPad,
    iWatch,
    fiveStar,
    fourStar,
    threeStar,

    filtersDispatch,
  } = useProducts();

  const { cartState, cartDispatch } = useCart();

  const { wishlistState, wishlistDispatch } = useWishlist();

  const sortData = (products, sortBy) => {
    if (sortBy === "Price-high-to-low") {
      return products.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Price-low-to-high") {
      return products.sort((a, b) => a.price - b.price);
    }

    return products;
  };
  const filteredData = (products) => {
    if (fastDelivery) {
      return products.filter(
        (product) => product.delivery_status === "Fast Delivery"
      );
    } else if (outOfStock) {
      return products.filter(
        (product) => product.delivery_status === "Out of Stock"
      );
    } else if (iMac) {
      return products.filter((product) => product.category === "iMac");
    } else if (iPad) {
      return products.filter((product) => product.category === "iPad");
    } else if (iWatch) {
      return products.filter((product) => product.category === "AppleWatch");
    } else if (fiveStar) {
      return products.filter((product) => product.ratings === "5star");
    } else if (fourStar) {
      return products.filter((product) => product.ratings === "4star");
    } else if (threeStar) {
      return products.filter((product) => product.ratings === "3star");
    }

    return products;
  };

  const finalProducts = filteredData(sortData(products, sortBy));

  return (
    <div className="page">
      <div className="product-slider">
        <aside>
          <div className="aside-top">
            <div className="text-heading"> Filters</div>
            <div className="text-heading">
              <button
                className="clear-btn"
                onClick={() => filtersDispatch({ type: "CLEAR" })}
              >
                Clear
              </button>
            </div>
          </div>
        </aside>
        <br />

        <div className="category-filter">
          <h4> Category</h4>

          <br />
          <label>
            <input
              type="checkbox"
              checked={iPad}
              onChange={() => filtersDispatch({ type: "I-PAD" })}
            />{" "}
            Ipad
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={iMac}
              onChange={() => filtersDispatch({ type: "I-MAC" })}
            />{" "}
            Imac
          </label>
          <label>
            <input
              type="checkbox"
              checked={iWatch}
              onChange={() => filtersDispatch({ type: "I-WATCH" })}
            />{" "}
            Apple watch
          </label>
        </div>
        <br />
        <div className="filter-rating">
          <h4> Rating</h4>
          <label htmlFor="radio-1">
            <input
              type="radio"
              name="rating"
              id="radio-1"
              checked={fiveStar}
              onChange={() => filtersDispatch({ type: "5star" })}
            />{" "}
            4 Star & above
          </label>
          <br />
          <label htmlFor="radio-2">
            <input
              type="radio"
              name="rating"
              id="radio-2"
              checked={fourStar}
              onChange={() => filtersDispatch({ type: "4star" })}
            />{" "}
            3 Star & above
          </label>
          <br />
          <label htmlFor="radio-3">
            <input
              type="radio"
              name="rating"
              id="radio-3"
              checked={threeStar}
              onChange={() => filtersDispatch({ type: "3star" })}
            />{" "}
            2 Star & above
          </label>
          <br />
        </div>
        <br />
        <div className="sort">
          <h4> Sort By</h4>
          <label>
            <input
              type="radio"
              name="sort"
              checked={sortBy && sortBy === "Price-high-to-low"}
              onChange={() =>
                filtersDispatch({
                  type: "Sort-By",
                  payload: "Price-high-to-low",
                })
              }
            />
            Price - High to Low
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="sort"
              checked={sortBy && sortBy === "Price-low-to-high"}
              onChange={() =>
                filtersDispatch({
                  type: "Sort-By",
                  payload: "Price-low-to-high",
                })
              }
            />
            Price - Low to High
          </label>
        </div>
        <br />
        <h4>Filters </h4>
        <lable>
          <input
            type="checkbox"
            checked={fastDelivery}
            onChange={() => filtersDispatch({ type: "Fast_Delivery" })}
          />
          Fast Delivery
        </lable>
        <br />
        <lable>
          <input
            type="checkbox"
            checked={outOfStock}
            onChange={() => filtersDispatch({ type: "Out_Of_Stock" })}
          />
          Out of Stock
        </lable>
      </div>

      {/* <h2> Products </h2> */}
      <br />
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "3%" }}>
        {finalProducts.map((product) => (
          <div className="single-product" key={product.id}>
            <img
              src={product.img}
              alt=""
              style={{
                width: "16rem",
                height: "14rem",
              }}
            />
            <h5> {product.name}</h5>
            <h5>
              {product.currency} {product.price}
            </h5>
            <h5> {product.delivery_status}</h5>

            <div>
              {cartState.find((cartItem) => cartItem.id === product.id) ? (
                <button
                  className="card__btn btn1 pri-btn"
                  onClick={() =>
                    cartDispatch({
                      type: "Remove-From-Cart",
                      payload: product,
                    })
                  }
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  className="card__btn btn1 pri-btn"
                  onClick={() =>
                    cartDispatch({ type: "Add-To-Cart", payload: product })
                  }
                >
                  <i className="fas fa-shopping-cart"> </i>
                  Add To Cart
                </button>
              )}
              <br /> <br />
              {wishlistState.find(
                (wishlistItem) => wishlistItem.id === product.id
              ) ? (
                <button
                  className="card__btn btn1 sec-btn"
                  onClick={() =>
                    wishlistDispatch({
                      type: "Remove-From-Wishlist",
                      payload: product,
                    })
                  }
                >
                  Remove From Wishlist
                </button>
              ) : (
                <button
                  className="card__btn btn1 sec-btn"
                  onClick={() =>
                    wishlistDispatch({
                      type: "Move-To-Wishlist",
                      payload: product,
                    })
                  }
                >
                  <i className="fas fa-heart"></i>
                  Move To Wishlist
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    // container div closed here
  );
};

export default ProductList;
