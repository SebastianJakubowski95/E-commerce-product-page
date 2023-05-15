import classes from "./Description.module.css";
import data from "../../data";
import AmountPicker from "../AmountPicker";
import Button from "../Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Description = (props) => {
  const [selectedAmount, setSelectedAmount] = useState(1);
  const dispatch = useDispatch();

  function onSetAmount(amount) {
    setSelectedAmount(amount);
  }

  function addToCart() {
    console.log(selectedAmount);
    const newItem = {
      id: data[0].id,
      pricePerUnit: data[0].priceNew,
      itemsAmount: selectedAmount,
    };
    dispatch(cartActions.addToCart(newItem));
  }

  return (
    <div className={classes.main}>
      <div className={classes.info}>
        <h2>{data[0].brand}</h2>
        <h1>{data[0].title}</h1>
        <p>{data[0].body}</p>
      </div>
      <div className={classes.prices}>
        <div>
          <h1>${data[0].priceNew}</h1>
          <div className={classes.sale}>
            <h2>{data[0].sale}%</h2>
          </div>
        </div>
        <h3>${data[0].priceOld}</h3>
      </div>
      <div className={classes.actions}>
        <AmountPicker size="small" setAmount={onSetAmount} />
        <Button type="add-to-cart" size="small" onAddToCart={addToCart} />
      </div>
    </div>
  );
};

export default Description;
