import React from 'react';
import './App.css';
import {MainCounter} from "./components/counter/Counter/MainCounter";
import {SettingsMainCounter} from "./components/counter/SettingsMainCounter";


export const App = () => {
    return (
        <div className={'appWrapper'}>
            <SettingsMainCounter/>
            <MainCounter/>
        </div>
    )
}