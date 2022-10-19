import React from "react";
import "./ThumbNail.scss";
function ThumbNail({ url, id, title, size, price }) {
  return (
    <div className="thumbnail-container">
      <img src={url} alt={id} className="thumbnail-img item" />
      <div className="title item">{title}</div>
      <div className="size item">{size} cm</div>
      <div className="price item">₩ {price}</div>
      <div className="item icon-container">
        <span className="icon material-symbols-outlined">
          add_shopping_cart
        </span>
        <span className="icon material-symbols-outlined">heart_plus</span>
      </div>
    </div>
  );
}
export default ThumbNail;
