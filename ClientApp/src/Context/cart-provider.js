import React, { useReducer } from 'react'
import CartContext from './cart-context';

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
    const removeItemsFromCart = (id) => {
        setCartState({
            type: 'REMOVE_ITEM',
            id: id
        })
    }

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

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.totalAmount;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                totalAmount: existingCartItem.totalAmount + action.item.totalAmount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item)
        }
        return { items: updatedItems, totalAmount: updatedTotalAmount }
    }
    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.totalAmount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, totalAmount: existingItem.totalAmount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState
}
export default CartProvider;