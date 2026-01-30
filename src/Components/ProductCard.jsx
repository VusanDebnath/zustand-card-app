
function ProductCard({ product, addToCart}){
    return (
      <div className="border p-4 rounded shadow hover:shadow-lg transition">
        <h4 className="font-semibold mb-2">
          {product.title}
        </h4>
        <p className="text-gray-700 mb-4">
          - Tk{product.price}
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => addToCart(product)}
        >
            Add to Cart
        </button>
      </div>
    );
}

export default ProductCard;