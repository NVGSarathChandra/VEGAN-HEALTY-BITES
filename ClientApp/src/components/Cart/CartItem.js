import css from './CartItem.module.css';
import React from 'react'

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
      <li className={css['cart-item']}>
      <div>
        <h2>{props.name}</h2>
              <div className={css.summary}>
                  <span className={css.price}>{price}</span>
                  <span className={css.amount}>x {props.amount}</span>
        </div>
      </div>
          <div className={css.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
