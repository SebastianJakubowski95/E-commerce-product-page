import classes from "./Button.module.css";
import classNames from "classnames";
import cartIcon from "../assets/icon-cart-white.svg";

const Button = (props) => {
  // type, size
  let w = window.innerWidth;
  switch (props.type) {
    case "add-to-cart":
      return (
        <button
          className={classNames(
            classes.main,
            classes.buttonShadow,
            classes[props.size],
            classes["full-width"]
          )}
          onClick={() => props.onAddToCart()}>
          <div className={classes["add-to-cart-div"]}>
            <img src={cartIcon} alt="cart icon" />
            <p>Add to cart</p>
          </div>
        </button>
      );
    case "checkout":
      return (
        <button
          className={classNames(
            classes.main,
            classes.buttonShadow,
            classes.checkout
          )}>
          <p>Checkout</p>
        </button>
      );
  }
};
export default Button;
