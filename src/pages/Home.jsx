import ProductCard from "../Components/ProductCard";
import { useEffect } from "react";
import useCreateStore from "../store/useCreateStore";

function Home() {
    const{products, fetchProducts, addToCart} = useCreateStore();

    useEffect(() =>{
        fetchProducts();
    }, []);

    return(
        <div>
            <h2>
                Products
            </h2>
            <div>
                {
                    products.map((product)=>(
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))
                }
            </div>
        </div>
    );
}

export default Home;