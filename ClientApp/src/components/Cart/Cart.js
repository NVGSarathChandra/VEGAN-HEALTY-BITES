import React, { useContext } from 'react'
import css from './Cart.module.css'
import Modal from '../UI/Modal';
import CartContext from '../../Context/cart-context';

const Cart = (props) => {
    const cartContext = useContext(CartContext)
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
    const hasItems = cartContext.items.length > 0
    const cartItem = cartContext.items.map(item => {
        return <li>{item.name}</li>
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