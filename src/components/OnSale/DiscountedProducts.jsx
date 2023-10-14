import React from "react";
import ProductOnSaleCard from "./ProductOnSaleCard";

import mouse from "../../assets/images/pro02/mouse.png";
import keyboard from "../../assets/images/pro02/keyboard.png";
import appleWatch from "../../assets/images/pro02/appleWatch.png";
import macBook from "../../assets/images/pro02/macBook.png";

import "./onSaleProductsStyles.css";

const onSaleProductsList = [
  {
    data: { price: 100, specification: "model ...", discount: 0 },
    image: appleWatch,
  },
  {
    data: { price: 100, specification: "model ...", discount: 0 },
    image: keyboard,
  },

  {
    data: { price: 100, specification: "model ...", discount: 0 },
    image: macBook,
  },

  {
    data: { price: 100, specification: "model ...", discount: 0 },
    image: mouse,
  },
];
const OnSaleProducts = () => {
  return (
    <div className="pOnSaleContainer">
      {onSaleProductsList.map((item) => (
        <ProductOnSaleCard data={item.data.specification} image={item.image} />
      ))}
    </div>
  );
};

export default OnSaleProducts;
