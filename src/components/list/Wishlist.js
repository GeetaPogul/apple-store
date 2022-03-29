import { useWishlist } from "./contexts/wishlist-context";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();

  return (
    <>
      <h1> Wishlist </h1>
      {wishlistState.map((wishlistItem) => (
        <div>
          <h3> {wishlistItem.name}</h3>
          <button
            onClick={() =>
              wishlistDispatch({
                type: "Remove-From-Wishlist",
                payload: wishlistItem
              })
            }
          >
            Remove From Wishlist
          </button>
        </div>
      ))}
    </>
  );
};

export default Wishlist;
