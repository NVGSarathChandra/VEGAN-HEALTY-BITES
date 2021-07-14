import React from 'react'
import CartIcon from "../Cart/CartIcon"
import css from './CartButton.module.css'

const CartButton = props => {
    return (
        <>
            <button className={css.button}>
                <span className={css.icon}>
                    <CartIcon />
                </span>
                <span>Cart</span>
                <span className={css.badge}>2</span>
            </button>
        </>
    )
}

export default CartButton