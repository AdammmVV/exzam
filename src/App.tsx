import React, {useState} from 'react';
import './App.css';
import {MainCounter} from "./components/counter/Counter/MainCounter";
import {SettingsMainCounter} from "./components/counter/SettingsMainCounter";

export const App = () => {

    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [error, setError] = useState<boolean | 'change'>(false)

    const changeMaxValue = (max:number) => {
        setMaxValue(max)
    }
    const changeMinValue = (start:number) => {
        setStartValue(start)
    }

    return (
        <div className={'appWrapper'}>
            <SettingsMainCounter changeMaxValue={changeMaxValue}
                                 changeMinValue={changeMinValue}
                                 setError={setError}/>
            <MainCounter maxValue={maxValue}
                         minValue={startValue}
                         error={error}/>
        </div>
    )
}