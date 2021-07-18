import React from 'react'
import css from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const MealsList = [
    {
        id: 'm1',
        name: 'Crispy Corn',
        description: 'Fried Corn with spring onions',
        price: 107.50,
    },
    {
        id: 'm2',
        name: 'Aloo Poori Chaat',
        description: 'Topped with chana dal and onions',
        price: 40.50,
    },
    {
        id: 'm3',
        name: 'Paneer tikka',
        description: 'Marinated paneer with spiced yogurt',
        price: 79.00,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 55.00,
    },
];

const AvailableMeals = () => {
    return <section className={css.meals}>
        <Card>
            <ul>
                {MealsList.map(item => {
                    return <MealItem key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} />
                })}
            </ul>
        </Card>
    </section>
}

export default AvailableMeals