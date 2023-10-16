import React from "react";
import Categories from "../../components/Categories/Categories";
import OnSaleProducts from "../../components/OnSale/DiscountedProducts";
import NewProducts from "../../components/NewProducts/NewProducts";
import BestSellersList from "../../components/Best-seller-products/NewBestSeller.jsx";

import banner from "../../assets/Frame 26086920.png"
import TopBrands from "../../components/TopBrands/TopBrands";
import SmartWatch from "../../components/smartWatchBanner/SmartWatchBanner.jsx";
import NewBlogs from "../../components/OurBlogSecttion/OurBlog";

const Home = () => {
  return (
    <div className="container">
      <Categories />
      <OnSaleProducts />
      <NewProducts />
      <div className="container d-flex justify-content-center"><img src={banner} alt="banner"/></div>
      <BestSellersList />
      <TopBrands />
      <SmartWatch />
      <NewBlogs />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
