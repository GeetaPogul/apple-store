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
    minDays,
    iMac,
    iPad,
    iWatch,
    fourStars,
    threeStars,
    twoStars,
    oneStar,
    filtersDispatch,
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
        (product) => product.delivery_status === "Out of Stock"
      );
    } else if (iMac) {
      return products.filter((product) => product.category === "iMac");
    } else if (iPad) {
      return products.filter((product) => product.category === "iPad");
    } else if (iWatch) {
      return products.filter((product) => product.category === "AppleWatch");
    }
    else if (fourStars) {
      return products.filter((product) => product.ratings === "5star");
    }
    else if (threeStars) {
      return products.filter((product) => product.ratings === "4star");
    }
    else if (twoStars) {
      return products.filter((product) => product.ratings === "3star");
    }
    else if (oneStar) {
      return products.filter((product) => product.ratings === "2star");
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
            <div className="text-heading"> Clear </div>
          </div>
        </aside>
        <div className="filter-range">
          <h4> Price</h4>
          <div className="price-ranger">
            <div className="min-price"> 1000</div>
            <div className="curr-price"> 25000</div>
            <div className="max-price"> 50000</div>
          </div>

          <div>
            <input
              className="range-slider"
              type="range"
              min="10000"
              max="20000"
              val="15000"
            />
          </div>
        </div>
        <div className="category-filter">
          <h4> Category</h4>

          <label>
            <input
              type="checkbox"
              checked={iMac}
              onChange={() => filtersDispatch({ type: "iMac" })}
            />{" "}
            Imac
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={iPad}
              onChange={() => filtersDispatch({ type: "iPad" })}
            />{" "}
            Ipad
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={iWatch}
              onChange={() => filtersDispatch({ type: "iWatch" })}
            />{" "}
            Apple watch
          </label>
        </div>
        <div className="filter-rating">
          <h4> Rating</h4>
          <label>
            <input 
            type="radio" 
            name="rating"
            checked={fourStars}
            onChange={()=> filtersDispatch({type : "fourStars"})}
            /> 4 Star & above
          </label>
          <br />
          <label>
            <input type="radio"
             name="rating"
             checked={threeStars}
             onChange={ () => filtersDispatch({type : "threeStars"})}
             /> 3 Star & above
          </label>
          <br />
          <label>
            <input type="radio"
             name="rating"
             checked={twoStars}
             onChange={ () => filtersDispatch({type : "twoStars"})}
             /> 2 Star & above
          </label>
          <br />
          <label>
            <input type="radio"
             name="rating"
             checked={oneStar}
             onChange={ () => filtersDispatch({type : "oneStar"})}
             /> 1 Star & above
          </label>
          <br />
        </div>
        <div className="sort">
          <h4> Sort By</h4>
          <label>
            <input
              type="radio"
              name="sort"
              checked={sortBy && sortBy === "PRICE-HIGH-TO-LOW"}
              onChange={() =>
                filtersDispatch({
                  type: "Sort-By",
                  payload: "PRICE-HIGH-TO-LOW",
                })
              }
            />
            Price - High To Low
          </label>{" "}
          <br />
          <label>
            <input
              type="radio"
              name="sort"
              checked={sortBy && sortBy === "PRICE-LOW-TO-HIGH"}
              onChange={() =>
                filtersDispatch({
                  type: "Sort-By",
                  payload: "PRICE-LOW-TO-HIGH",
                })
              }
            />
            Price - Low to High
          </label>
        </div>{" "}
        <br />
        <h4>Filters </h4>
        <lable>
          <input
            type="checkbox"
            checked={fastDelivery}
            onChange={() => filtersDispatch({ type: "Fast_Delivery" })}
          />
          Fast Delivery
        </lable>{" "}
        <br />
        <lable>
          <input
            type="checkbox"
            checked={minDays}
            onChange={() => filtersDispatch({ type: "OutOfStock" })}
          />
          Out of Stock
        </lable>
      </div>

      <br />
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "5%" }}>
        {finalProducts.map((product) => (
          <div
            key={product.id}
            style={{
              margin: "1rem",
             
              width: "30%",
              padding: "3rem",
              background: "white",
              boxShadow: " 1px 1px 4px rgb(151, 140, 140)",
            }}
          >
            <img
              src={product.img}
              alt=""
              style={{
                marginLeft :"1rem",
                width: "18rem",
                height: "14rem",
              }}
            />
            <h5> {product.name}</h5>
            <h5> {product.price}</h5>
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
                  {" "}
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
