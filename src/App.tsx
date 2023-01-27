import React from 'react';
import './App.css';
import {CounterMain} from "./components/counter/CounterMain";
import {Telegramm} from "./components/TG/Telegramm";

export const App = () => {
    return (
        <div>
            <CounterMain/>
            <Telegramm/>
        </div>
    )
}