
function ProductCard({ product, addToCart}){
    return (
      <div>
        <h4>{product.title}</h4>
        <p>- Tk{product.price}</p>
        <button onClick={() =>addToCart(product)}>
            Add to Cart
        </button>
      </div>
    );
}

export default ProductCard;