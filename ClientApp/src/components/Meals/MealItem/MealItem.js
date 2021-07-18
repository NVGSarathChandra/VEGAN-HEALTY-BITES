import React, { useContext} from 'react'
import css from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../Context/cart-context'


const MealItem = (props) => {
    const cartContext = useContext(CartContext)
    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            totalAmount: amount,
            price: props.price
        })
    }

    const price = `₹${props.price.toFixed(2)}`
    return <li className={css.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={css.description}>{props.description}</div>
            <div className={css.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler}/>
        </div>
    </li> 
}
export default MealItem