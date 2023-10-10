import React from "react";

const CategoryCard = ({ title, image }) => {
  return (
    <div>
      <img src={image} alt="" width="200" />
      <span>{title}</span>
    </div>
  );
};

export default CategoryCard;
