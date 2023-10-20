import React from "react";
import "./category.css";

const CategoryCard = ({ title, image }) => {
  return (
    <div className="cat col-sm-5 col-md-1 ">
      <img src={image} alt="" width="100px" /> <br />
      <span>{title}</span>
    </div>
  );
};

export default CategoryCard;
