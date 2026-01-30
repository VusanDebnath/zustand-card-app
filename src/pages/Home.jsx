import { useEffect } from "react";
import ProductCard from "../Components/ProductCard.jsx";
import useCreateStore from "../store/useCartStore.jsx";

function Home() {
  const { products, fetchProducts, addToCart } = useCreateStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4 border-2 border-blue-500">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-4 gap-4 border-2 border-green-500 p-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
