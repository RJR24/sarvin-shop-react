import React, { useContext } from "react";
import { PRODUCTS } from "../../data/products";
import { ShopContext } from "../../context/shopContext";
import Products from "../shop/products";

const Cart = () => {
  const { cartItems, clearShoppingCart } = useContext(ShopContext);
  return (
    <React.Fragment>
      <h1>Selected Items In Your Cart</h1>
      <div className="row">
        {PRODUCTS.map((p) => {
          if (cartItems?.some((i) => i.id === p.id && i.count > 0))
            return <Products data={p}></Products>;
        })}
      </div>
      <button className="btn btn-warning m-3" onClick={clearShoppingCart}>Clear</button>
    </React.Fragment>
  );
};
export default Cart;
