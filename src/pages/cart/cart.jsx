import React, { useContext } from "react";
import { PRODUCTS } from "../../data/products";
import { ShopContext } from "../../context/shopContext";
import Products from "../shop/products";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <React.Fragment>
      <h1>Selected Items In Your Cart</h1>
      <div className="row">
        {PRODUCTS.map((p) => {
          if (cartItems?.some((i) => i.id === p.id && i.count > 0))
            return <Products data={p}></Products>;
        })}
      </div>
    </React.Fragment>
  );
};
export default Cart;
