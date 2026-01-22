import {create} from 'zustand';

const useCreateStore = create((set, get) => ({
    products: [],
    cart: [],

    fetchProducts: async () =>{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        set({products: data});
    },

    addToCart: (product) =>{
        const cart = get().cart;
        if (!cart.find(item => item.id === product.id)){
            set({cart: [...cart, product]});
        }
    },

    removeFromCart: (productId) =>{
        const cart = get().cart;
        set({cart: cart.filter(item => item.id !== productId)});
    },

}));

export default useCreateStore;