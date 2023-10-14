import React from "react";

const ProductOnSaleCard = ({ data, image }) => {
  return (
    <div className="onSaleProduct">
      <img src={image} alt="" width="100px" /> <br />
      <span>{data}</span>
    </div>
  );
};

export default ProductOnSaleCard;
