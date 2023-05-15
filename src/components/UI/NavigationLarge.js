import classes from "./NavigationLarge.module.css";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/icon-cart.svg";
import avatarIcon from "../../assets/image-avatar.png";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Cart from "./Cart";

const NavigationLarge = () => {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const cart = useSelector((state) => state.cart);
  const cartRef = useRef();

  function onCartClick() {
    setIsCartOpened(!isCartOpened);
  }

  const cartNumber = (
    <div
      ref={cartRef}
      className={classes["cart-number"]}
      style={cart.productsInCart.length === 0 ? { display: "none" } : {}}>
      <p>{cart.sumOfAllItems}</p>
    </div>
  );

  useEffect(() => {
    cartRef.current.classList.remove(`${classes.animation}`);
    setTimeout(() => {
      cartRef.current.classList.add(`${classes.animation}`);
    }, 100);
    return () => {};
  }, [cart]);

  return (
    <>
      {isCartOpened && <Cart />}
      <div className={classes.main}>
        <div>
          <img src={logo} alt="logo" />
          <nav>
            <ul>
              <button className={classes.listBtn}>
                <li>
                  <a href="#">Collections</a>
                </li>
              </button>
              <button className={classes.listBtn}>
                <li>
                  <a href="#">Men</a>
                </li>
              </button>
              <button className={classes.listBtn}>
                <li>
                  <a href="#">Women</a>
                </li>
              </button>
              <button className={classes.listBtn}>
                <li>
                  <a href="#">About</a>
                </li>
              </button>
              <button className={classes.listBtn}>
                <li>
                  <a href="#">Contact</a>
                </li>
              </button>
            </ul>
          </nav>
        </div>
        <div>
          {cartNumber}
          <button className={classes.cart} onClick={onCartClick}>
            <img src={cartIcon} alt="your cart" />
          </button>
          <button className={classes.avatar}>
            <img src={avatarIcon} alt="avatar" />
          </button>
        </div>
      </div>
    </>
  );
};
export default NavigationLarge;
