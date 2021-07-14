import React from 'react'
import css from './Cart.module.css'

const Cart = () => {
    const cartItem = [{
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    }].map(item => {
        return <li>{item.name}</li>
    })
    return <div>
        <ul className={css['cart-items']}>
            {cartItem}
        </ul>
        <div className={css.total}>
            <span>Total Amount</span>
            <span>22.99</span>
        </div>
        <div className={css.actions}>
            <button className={css['button--alt']}>Close</button>
            <button className={css['button']}>Order</button>
        </div>
    </div>
};

export default Cart;