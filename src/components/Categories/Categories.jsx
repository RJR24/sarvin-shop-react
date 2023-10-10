import React from "react";
import mobile from "../../assets/images/products/mobile.png";
import CategoryCard from "./CategoryCard";

const catList = [
  { title: "Mobile", image: mobile },
  { title: "Laptop", image: mobile },
  { title: "Mobile", image: mobile },
  { title: "Mobile", image: mobile },
  { title: "Mobile", image: mobile },
];
const Categories = () => {
  return <div  className="d-flex">
    {
      catList.map((item)=><CategoryCard  title={item.title} image={item.image}/>)
    }
  </div>;
};

export default Categories;
