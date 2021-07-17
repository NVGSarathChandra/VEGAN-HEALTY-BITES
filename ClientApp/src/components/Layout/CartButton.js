import React, { useContext, useEffect, useState} from 'react'
import CartIcon from "../Cart/CartIcon"
import css from './CartButton.module.css'
import CartContext from '../../Context/cart-context'

const CartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartContext = useContext(CartContext)
    const { items } = cartContext
    const cartCount = items.reduce((currentNum, item) => {
        return currentNum + item.totalAmount
    }, 0)

    const buttonCss = `${css.button} ${btnIsHighlighted ? css.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };

    }, [items]);

    return (
        <>
            <button className={buttonCss} onClick={props.onClick}>
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