import { useState, memo, useCallback } from "react";

import { images as carouselImages } from "../shared/data";

function ImagePreview({ imageSrc, imageAlt }) {
  return (
    <div className="image-preview">
      <picture>
        <img
          loading="lazy"
          className="image"
          src={imageSrc}
          alt={imageAlt}
          decoding="async"
        />
      </picture>
    </div>
  );
}

const Bullets = memo(({ imageList = [], active, onClick = () => {} }) => {
  return (
    <div className="bullets">
      {imageList.map((_, index) => (
        <button
          className={
            index === active ? "bullet bullet-active" : "bullet bullet-unactive"
          }
          key={index}
          onClick={() => onClick(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
});

const ImageCarousel = ({ images = [] }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrevClick = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const onClickButton = useCallback((index) => {
    setImageIndex(index);
  }, []);

  const image = images[imageIndex];

  return (
    <div className="image-container">
      <button onClick={handlePrevClick} className="ic-button">
        Prev
      </button>
      <ImagePreview imageAlt={image?.alt ?? ""} imageSrc={image?.src ?? ""} />
      <Bullets imageList={images} active={imageIndex} onClick={onClickButton} />
      <button className="ic-button next-btn" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export const ImageCarouselWraper = () => (
  <ImageCarousel images={carouselImages} />
);
