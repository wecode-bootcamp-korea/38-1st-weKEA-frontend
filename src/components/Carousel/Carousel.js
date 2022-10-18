import React from "react";
import CarouselItem from "./CarouselItem.js";
import "./Carousel.scss";
import { CarouselItemData } from "./CarouselItemData.js";

function Carousel() {
  return (
    <div className="carousel-container">
      <button className="carousel-button-left button-common-css">{`<`}</button>
      <div className="carousel">
        {CarouselItemData.map(item => {
          return (
            <div className="item-map-container" key={item.id}>
              <CarouselItem id={item.id} />
            </div>
          );
        })}
      </div>
      <button className="carousel-button-right button-common-css">{`>`}</button>
    </div>
  );
}

export default Carousel;
