import classes from "./AmountPicker.module.css";
import minusIcon from "../assets/icon-minus.svg";
import plusIcon from "../assets/icon-plus.svg";
import { useEffect, useState } from "react";

const AmountPicker = (props) => {
  // size:small/large;
  const [amountSelected, setAmountSelected] = useState(1);
  let w = window.innerWidth;

  function onIncreaseHandler() {
    setAmountSelected(amountSelected + 1);
  }
  function onDecreaseHandler() {
    if (amountSelected > 1) {
      setAmountSelected(amountSelected - 1);
    }
  }
  useEffect(() => {
    props.setAmount(amountSelected);
  }, [amountSelected]);

  return (
    <div
      className={`${classes.main} ${classes[props.size]} ${
        classes["full-width"]
      }`}>
      <button
        name="decrease"
        className={classes["left-icon"]}
        onClick={onDecreaseHandler}>
        <img src={minusIcon} alt="decrease" onClick={onDecreaseHandler} />
      </button>
      <p>{amountSelected}</p>
      <button
        name="increase"
        className={classes["right-icon"]}
        onClick={onIncreaseHandler}>
        <img src={plusIcon} alt="increase" onClick={onIncreaseHandler} />
      </button>
    </div>
  );
};
export default AmountPicker;
