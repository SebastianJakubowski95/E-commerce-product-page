import classes from "./Cart.module.css";
import Button from "../Button";
import CartItem from "../CartItem";
import data from "../../data";
import { useSelector, useDispatch } from "react-redux";
let w = window.innerWidth;

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);

  const listOfItems = cart.productsInCart.map((item, index) => (
    <CartItem
      id={item.id}
      key={index}
      numberOfItems={item.amount}
      pricePerUnit={data[0].priceNew}
      title={data[0].title}
      img={data[0].images[0]}
    />
  ));

  return (
    <div
      className={
        w >= 768 ? classes["large-position"] : classes["mobile-position"]
      }>
      <div className={classes.main}>
        <h1>Cart</h1>
        <div className={classes.hr} />
        <div className={classes["items-div"]}>
          {listOfItems.length > 0 ? listOfItems : <h2>Your cart is empty</h2>}
          {listOfItems.length > 0 && <Button type="checkout" />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
