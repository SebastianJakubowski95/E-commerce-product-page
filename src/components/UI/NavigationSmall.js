import classes from "./NavigationSmall.module.css";
import burgerIcon from "../../assets/icon-menu.svg";
import closeIcon from "../../assets/icon-close.svg";
import cartIcon from "../../assets/icon-cart.svg";
import avatarIcon from "../../assets/image-avatar.png";
import logo from "../../assets/logo.svg";
import Cart from "./Cart";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modal-slice";
import { useRef, useEffect, useState } from "react";

const NavigationSmall = () => {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const menuIsOpen = useSelector((state) => state.modal.menuIsOpen);
  const cart = useSelector((state) => state.cart);
  const cartRef = useRef();
  const dispatch = useDispatch();

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
    }, 50);
    return () => {};
  }, [cart]);

  function onOpenMenuHandler() {
    dispatch(modalActions.openMenuModal());
    document.body.style.height = "100vh";
  }
  function onCloseMenuHandler() {
    dispatch(modalActions.closeMenuModal());
    document.body.style.height = "auto";
  }
  function onCartClick() {
    setIsCartOpened(!isCartOpened);
  }
  const menuModal = (
    <>
      <div className={classes.menu}>
        <button onClick={onCloseMenuHandler}>
          <img src={closeIcon} alt="close menu" />
        </button>
        <nav>
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div onClick={onCloseMenuHandler} className={classes.bg} />
    </>
  );

  return (
    <>
      {isCartOpened && <Cart />}
      {menuIsOpen && createPortal(menuModal, document.getElementById("modal"))}
      <div className={classes.main}>
        <div>
          <button onClick={onOpenMenuHandler}>
            <img src={burgerIcon} alt="menu" />
          </button>
          <img src={logo} alt="logo" />
        </div>
        <div>
          {cartNumber}
          <button className={classes.cart} onClick={onCartClick}>
            <img src={cartIcon} alt="cart" />
          </button>
          <button className={classes.avatar}>
            <img src={avatarIcon} alt="avatar" />
          </button>
        </div>
      </div>
    </>
  );
};
export default NavigationSmall;
