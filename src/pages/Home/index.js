import React from "react";
import Categories from "../../components/Categories/Categories";
import OnSaleProducts from "../../components/OnSale/DiscountedProducts";

const Home = () => {
  return (
    <div>
      <Categories />
      <OnSaleProducts />
    </div>
  );
};

export default Home;
