import classes from "./CartItem.module.css";
import Image from "./Image";
import deleteIcon from "../assets/icon-delete.svg";
import { cartActions } from "../store/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  // numberOfItems, pricePerUnit, title,
  const dispatch = useDispatch();

  function deleteFromCart() {
    dispatch(cartActions.removeFromCart({ id: props.id }));
    dispatch(cartActions.resetNumOfItems());
  }

  const sum = (props.pricePerUnit * props.numberOfItems).toFixed(2);

  return (
    <div className={classes.item}>
      <Image size="s4" src={props.img} />
      <div className={classes["data-info"]}>
        <p>{props.title}</p>
        <div>
          <p>${props.pricePerUnit}</p>
          <p>x</p>
          <p>{props.numberOfItems}</p>
          <p className={classes.sum}>${sum}</p>
        </div>
      </div>
      <button onClick={deleteFromCart}>
        <img src={deleteIcon} alt="delete item" />
      </button>
    </div>
  );
};

export default CartItem;
