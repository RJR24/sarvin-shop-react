const Products = (props) => {
  const { id, productName, productImage, price } = props.data;
  return (
    <div className="col-3">
      <img src={productImage} alt="product" className="w-50" />

      <h5>{productName}</h5>
      <p>price: {price}£</p>
      <button className="btn btn-info btn-sm">-</button>
      <span className="mx-2">0</span>
      <button className="btn btn-info btn-sm">+</button>
    </div>
  );
};
export default Products;
