import React, { Component, useState } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Header from './components/Layout/Header';
import './custom.css';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './Context/cart-provider';

export default function App() {
    const [isCartEnabled, SetCartEnabled] = useState(false)

    const showCartHandler = () => {
        SetCartEnabled(true)
    }
    const hideCartHandler = () => {
        SetCartEnabled(false)
    }

    return (
        <CartProvider>
            {isCartEnabled && <Cart onClick={hideCartHandler} />}
            <Header onShowCartHandler={showCartHandler} onHideCartHandler={hideCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}
