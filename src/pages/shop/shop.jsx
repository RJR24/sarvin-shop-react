import { Fragment } from "react";
import Products from "../../components/Products";
import { PRODUCTS } from "../../data/products";
const Shop = () => {
  return (
    <Fragment>
      <h1>Shop!</h1>
      <div className="row">
        {PRODUCTS.map((productData) => (
          <Products data={productData} />
        ))}
      </div>
    </Fragment>
  );
};
export default Shop;
