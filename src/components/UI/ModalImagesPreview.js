import classes from "./ModalImagesPreview.module.css";
import Image from "../Image";
import ArrowProduct from "../ArrowProduct";
import data from "../../data.js";
import closeIcon from "../../assets/icon-close-white.svg";
import { createPortal } from "react-dom";

const ModalImagesPreview = (props) => {
  const allProductImages = data[0].images.map((img, index) => (
    <li key={index}>
      <Image
        id={index}
        size="s3"
        src={img}
        isSelected={index === props.bigImgIndex}
        selectNew={props.onImageSwitch}
      />
    </li>
  ));

  const modal = (
    <div className={classes.modal}>
      <div className={classes.main}>
        <button onClick={() => props.closeModal()}>
          <img src={closeIcon} alt="close" />
        </button>
        <div>
          <div style={{ position: "absolute", left: "-1.71875rem" }}>
            <ArrowProduct
              type="prev"
              onClick={props.prevImg}
              bigImgIndex={props.bigImgIndex}
              imagesNum={data[0].images.length}
            />
          </div>
          <Image size="s1" src={data[0].images[props.bigImgIndex]} />
          <div style={{ position: "absolute", right: "-1.71875rem" }}>
            <ArrowProduct
              type="next"
              onClick={props.nextImg}
              bigImgIndex={props.bigImgIndex}
              imagesNum={data[0].images.length}
            />
          </div>
        </div>
        <div>
          <ul>{allProductImages}</ul>
        </div>
      </div>
      <div className={classes.bg} onClick={() => props.closeModal()} />
    </div>
  );

  return <>{createPortal(modal, document.getElementById("modal"))}</>;
};

export default ModalImagesPreview;
