import classes from "./ArrowProduct.module.css";
import arrowNext from "../assets/icon-next.svg";
import arrowPrev from "../assets/icon-previous.svg";

const ArrowProduct = (props) => {
  // type: next/prev
  function onNextHandler() {
    let futureIndex;
    if (props.bigImgIndex < props.imagesNum - 1) {
      futureIndex = props.bigImgIndex + 1;
    } else {
      futureIndex = 0;
    }
    props.onClick(futureIndex);
  }

  function onPrevHandler() {
    let futureIndex;
    if (props.bigImgIndex > 0) {
      futureIndex = props.bigImgIndex - 1;
    } else {
      futureIndex = props.imagesNum - 1;
    }
    props.onClick(futureIndex);
  }

  let icon;
  if (props.type === "next") {
    icon = arrowNext;
    return (
      <button className={classes.main} onClick={onNextHandler}>
        <img src={icon} alt="next image" />
      </button>
    );
  } else if (props.type === "prev") {
    icon = arrowPrev;
    return (
      <button className={classes.main} onClick={onPrevHandler}>
        <img src={icon} alt="prev image" />
      </button>
    );
  }
};

export default ArrowProduct;
