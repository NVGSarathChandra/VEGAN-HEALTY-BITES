import React from 'react'
import mealsImg from '../../assets/meals.jpg'
import css from './Header.module.css'
import CartButton from './CartButton'

const Header = props => {
    return(
    <>
        <div className={css.header}>
                <h3>VEGAN YUMMY BITES</h3>
                <CartButton onClick={props.onShowCartHandler} />
        </div>
        <div className={css['main-image']}>
            <img src={mealsImg} alt="Food Items  Image" />
        </div>
    </>)
}
export default Header