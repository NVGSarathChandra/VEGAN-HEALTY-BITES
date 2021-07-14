import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Header from './components/Layout/Header';
import './custom.css';
import Meals from './components/Meals/Meals';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <>
                <Header />
                <main>
                    <Meals/>
                    </main>
            </>
        );
    }
}
