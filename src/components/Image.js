import { useState } from "react";
import classes from "./Image.module.css";
// size:s1, s2, s3, s4; img:(src); isSelected; id; selectNew(id);

const Image = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const onClickHandler = () => {
    props.selectNew(props.id);
  };

  if (props.size === "s3") {
    return (
      <button
        className={classes.btn}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClickHandler}>
        <img className={classes.s3} src={props.src} alt="product image" />
        {isHovered && !props.isSelected && <div className={classes.onHover} />}
        {props.isSelected && <div className={classes.active} />}
      </button>
    );
  } else if (props.size === "s1") {
    return <img className={classes.s1} src={props.src} alt="product image" />;
  } else if (props.size === "s2") {
    return <img className={classes.s2} src={props.src} alt="product image" />;
  } else if (props.size === "s4") {
    return <img className={classes.s4} src={props.src} alt="product image" />;
  }
};
export default Image;
