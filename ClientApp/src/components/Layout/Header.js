import React from 'react'
import mealsImg from '../../assets/meals.jpg'
import css from './Header.module.css'

const Header = props => {
    return(
    <>
        <div className={css.header}>
            <h1>VEGAN HEALTY BITES</h1>
            <button>Cart</button>
        </div>
        <div className={css['main-image']}>
            <img src={mealsImg} alt="Food Items  Image" />
        </div>
    </>)
}
export default Header