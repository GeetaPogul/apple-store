import React from "react";
import { useWishlist } from "./context/wishlist.context";
import "../list/slider.css";
import { Link } from "react-router-dom";

const WishlistItem = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();

  return (
    <>
      <br /> <br />
      <Link className="links" to="/product">
        like more Items
      </Link>
      <h1 className="heading"> Wishlist Items : {wishlistState.length}</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {wishlistState.map((wishlistItem) => (
          <div
            style={{
              margin: "1rem",
              maxWidth: "23%",
              padding: "2rem",
              background: "white",
              boxShadow: " 1px 1px 4px rgb(151, 140, 140)",
            }}
          >
            <img
              src={wishlistItem.img}
              alt="imac"
              style={{
                width: "16rem",
                height: "14rem",
              }}
            />
            <h5> {wishlistItem.name}</h5>
            <h5> {wishlistItem.price} </h5>
            <button
              className="card__btn btn1 pri-btn"
              onClick={() =>
                wishlistDispatch({
                  type: "Remove-From-Wishlist",
                  payload: wishlistItem,
                })
              }
            >
              Remove From Wishlist
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default WishlistItem;
