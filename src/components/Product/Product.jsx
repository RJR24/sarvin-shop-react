import React from "react";

import "./productStyles.css";
const Product = () => {
  return (
    <div className=" row container">
      <div className="col-md-5 bg-danger image">image</div>
      <div className="col-md-4 bg-warning-subtle specifications">specifications</div>
      <div className="col-md-3 bg-danger-subtle price">price</div>
    </div>
  );
};

export default Product;
