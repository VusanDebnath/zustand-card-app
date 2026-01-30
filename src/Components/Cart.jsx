import useCreateStore from "../store/useCartStore.jsx";

function Cart() {
    const {cart, removeFromCart} = useCreateStore();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="border p-4 m-2 rounded shadow">
            <h3 className="text-xl font-bold mb-4">
                Cart ({cart.length} items)
            </h3>
                {cart.map(item => (
                    <div key={item.id} className="flex justify-between mb-2 bg-amber-200">
                        <span>
                            {item.title} - Tk{item.price.toFixed(2)}
                        </span>
                        <button
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
                            onClick={() => removeFromCart(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            <h4 className="font-semibold mt-4">
                Total: Tk{total.toFixed(2)}
            </h4>
        </div>
    )
}

export default Cart;