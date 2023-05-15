import classes from "./ImagesHeroSection.module.css";
import Image from "../Image";
import data from "../../data.js";
import { useState } from "react";
import ModalImagesPreview from "./ModalImagesPreview";
import ArrowProduct from "../ArrowProduct";

const ImagesHeroSection = (props) => {
  let w = window.innerWidth;
  const [bigImgIndex, setBigImgIndex] = useState(0);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  function onImageSwitch(id) {
    setBigImgIndex((prev) => id);
  }

  function onOpenModalHandler() {
    setIsPreviewModalOpen(true);
  }

  function noScroll() {
    document.body.style.height = "100vh";
  }

  const allProductImages = data[0].images.map((img, index) => (
    <li key={index}>
      <Image
        id={index}
        size="s3"
        src={img}
        isSelected={index === bigImgIndex}
        selectNew={onImageSwitch}
      />
    </li>
  ));

  const largeScreenImagesMode = (
    <>
      <button onClick={onOpenModalHandler}>
        <Image size="s2" src={data[0].images[bigImgIndex]} />
      </button>
      <div className={classes.carousel}>
        <ul> {allProductImages}</ul>
      </div>
    </>
  );

  const smallScreenImagesMode = (
    <div className={classes["mobile-images"]}>
      <div>
        <img
          className={classes["mobile-img"]}
          src={data[0].images[bigImgIndex]}
          alt="product image"
        />
      </div>
      <div className={classes.arrows}>
        <ArrowProduct
          type="prev"
          onClick={onImageSwitch}
          bigImgIndex={bigImgIndex}
          imagesNum={data[0].images.length}
        />
        <ArrowProduct
          type="next"
          onClick={onImageSwitch}
          bigImgIndex={bigImgIndex}
          imagesNum={data[0].images.length}
        />
      </div>
    </div>
  );

  return (
    <>
      {isPreviewModalOpen && noScroll()}
      {isPreviewModalOpen && (
        <ModalImagesPreview
          bigImgIndex={bigImgIndex}
          onImageSwitch={onImageSwitch}
          closeModal={() => setIsPreviewModalOpen(false)}
          prevImg={onImageSwitch}
          nextImg={onImageSwitch}
        />
      )}
      <div className={classes.main}>
        {w >= 768 ? largeScreenImagesMode : smallScreenImagesMode}
      </div>
    </>
  );
};

export default ImagesHeroSection;
