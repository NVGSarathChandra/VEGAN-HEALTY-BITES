import React, { useContext } from 'react'
import css from './Cart.module.css'
import Modal from '../UI/Modal';
import CartContext from '../../Context/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartContext = useContext(CartContext)
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
    const hasItems = cartContext.items.length > 0

    const removeItemsFromCart = id => {
        cartContext.removeItem(id)
    }
    const addItems = item => {
        cartContext.addItem({ ...item, totalAmount:1 })
    }

    const cartItem = cartContext.items.map(item => {
        return <CartItem key={item.id}
            name={item.name}
            amount={item.totalAmount}
            price={item.price}
            onRemove={removeItemsFromCart.bind(null, item.id)}
            onAdd={addItems.bind(null, item)} />
    })
    return <Modal onClick={props.onClick}>
        <ul className={css['cart-items']}>
            {cartItem}
        </ul>
        <div className={css.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={css.actions}>
            <button className={css['button--alt']} onClick={props.onClick}>Close</button>
            {hasItems && <button className={css['button']}>Order</button>}
        </div>
    </Modal>
};

export default Cart;