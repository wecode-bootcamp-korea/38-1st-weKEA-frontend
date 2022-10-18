import React, { useState } from "react";
import CarouselItem from "./CarouselItem.js";
import "./Carousel.scss";
import { CarouselItemData } from "./CarouselItemData.js";

function Carousel() {
  const [scrollX, setScrollX] = useState("");

  // function carouselButtonClick() {
  //   console.log(window.scrollX);
  //   setScrollX(setScrollX + 100);
  // carousel.pageXoffset;
  // }

  return (
    <div className="carousel-container">
      <button
        // onClick={carouselButtonClick}
        className="carousel-button-left button-common-css"
      >{`<`}</button>
      <div className="carousel">
        {CarouselItemData.map(item => {
          return (
            <div className="item-map-container" key={item.id}>
              <CarouselItem id={item.id} />
            </div>
          );
        })}
      </div>
      <button
        // onClick={carouselButtonClick}
        className="carousel-button-right button-common-css"
      >{`>`}</button>
    </div>
  );
}

export default Carousel;
