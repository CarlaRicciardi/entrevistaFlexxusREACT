import React from "react";
import "./ProductCard.css";

const ProductCard = ({ id, name, code, price, img }) => {
  return (
    <div className="productCardContainer" key={id}>
      <div>
        <img className="imgProduct" src={img} />
      </div>
      <div>
        <p className="nameText">{name}</p>
        <p className="codeText">{code}</p>
        <p className="priceText">
          precio: <span className="priceNumber">${price}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
