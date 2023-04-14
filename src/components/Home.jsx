import React from "react";
import iphone from "../assets/iphone.png";
import cart from "../assets/cart.png";

const Home = (props) => {
  //used to show data recieved from container file
  console.warn("props", props);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">10</span>
        <img src={cart} />
      </div>

      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={iphone} />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: "i phone 11" });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
