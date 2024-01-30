import React, { useState, createContext } from "react";


export const CartContext = createContext({});

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addItemCart(newItem) {
        //ver se o item ja esta no carrinho, se sim soma mais um 
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if (indexItem !== -1) {
            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount + 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
            setCart(cartList)
            return;
        }
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data])
        console.log(...cart, data)
        //se não, adiciona um
    }

    function deleteItemCart(product) {
        //ver se o item ja esta no carrinho, se sim soma mais um 
        const indexItem = cart.findIndex(item => item.id === product.id)

        if (cart[indexItem]?.amount > 1) {
            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount - 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
            setCart(cartList)
            return;
        }
        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem)

    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemCart,
                deleteItemCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;