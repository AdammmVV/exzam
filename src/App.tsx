import React, {useState} from 'react';
import './App.css';
import {MainCounter} from "./components/counter/Counter/MainCounter";
import {SettingsMainCounter} from "./components/counter/SettingsMainCounter";

export const App = () => {

    const [maxValue, setMaxValue] = useState<number>(5)
    const [minValue, setMinValue] = useState<number>(0)

    const changeMaxValue = (max:number) => {
        setMaxValue(max)
    }
    const changeMinValue = (min:number) => {
        setMinValue(min)
    }

    return (
        <div className={'appWrapper'}>
            <SettingsMainCounter changeMaxValue={changeMaxValue}
                                 changeMinValue={changeMinValue}/>
            <MainCounter maxValue={maxValue} minValue={minValue}/>
            {/*<Telegramm/>*/}
        </div>
    )
}