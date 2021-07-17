import React, { useReducer } from 'react'
import CartContext from './cart-context';

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.totalAmount
        return { items: updatedItems, totalAmount: updatedTotalAmount }
    }
    if (action.type === 'REMOVE_ITEM') {

    }
    return defaultCartState
}

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const CartProvider = (props) => {

    const addItemsToCart = (item) => {
        setCartState({
            type: 'ADD_ITEM',
            item: item
        })
    }
    const removeItemsFromCart = (item) => { }

    const [cartState, setCartState] = useReducer(cartReducer, defaultCartState)


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemsToCart,
        removeItem: removeItemsFromCart
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;