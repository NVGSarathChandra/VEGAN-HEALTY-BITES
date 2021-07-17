import React, {
    useRef, useState
} from 'react'
import css from './MealItemForm.module.css'
import Input from '../../UI/Input'


const MealItemForm = (props) => {
    const [isFormValid, SetFormValid] = useState(true)
    const AmountRef = useRef();
    const submitHandler = event => {
        event.preventDefault()
        const enteredAmount = AmountRef.current.value
        const amountToInt = +enteredAmount
        if (enteredAmount.trim().length === 0 || amountToInt < 1 || amountToInt > 5) {
            SetFormValid(false)
            return
        } else {
            props.onAddToCart(amountToInt)
        }
    }

    return <form className={css.form} onSubmit={submitHandler} >
        <Input label="Amount" ref= {AmountRef} input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button >+ Add</button>
        {!isFormValid && <p> Enter valid count 1 - 5</p>}
    </form>
}
export default MealItemForm