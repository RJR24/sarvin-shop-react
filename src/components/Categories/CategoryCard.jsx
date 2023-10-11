import React from "react";
import "./category.css";

const CategoryCard = ({ title, image }) => {
  return (
    <div className="cat">
      <img src={image} alt="" width="80px" /> <br />
      <span>{title}</span>
    </div>
  );
};

export default CategoryCard;
