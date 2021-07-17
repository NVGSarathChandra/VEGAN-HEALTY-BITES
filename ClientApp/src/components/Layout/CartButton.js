import React, { useContext} from 'react'
import CartIcon from "../Cart/CartIcon"
import css from './CartButton.module.css'
import CartContext from '../../Context/cart-context'

const CartButton = props => {
    const cartContext = useContext(CartContext)

    const cartCount = cartContext.items.reduce((currentNum, item) => {
        return currentNum + item.totalAmount
    }, 0)
    return (
        <>
            <button className={css.button} onClick={props.onClick}>
                <span className={css.icon}>
                    <CartIcon />
                </span>
                <span>Cart</span>
                <span className={css.badge}>{cartCount}</span>
            </button>
        </>
    )
}

export default CartButton