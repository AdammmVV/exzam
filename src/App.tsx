import React, {useEffect, useState} from 'react';
import './App.css';
import {MainCounter} from "./components/counter/Counter/MainCounter";
import {SettingsMainCounter} from "./components/counter/SettingsMainCounter";

export type StatusType = 'default' | 'changed' | 'error'

export const App = () => {

    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [status, setStatus] = useState<StatusType>('default')

    const changeMaxValue = (max: number) => {
        setMaxValue(max)
    }
    const changeMinValue = (start: number) => {
        setStartValue(start)
    }

    return (
        <div className={'appWrapper'}>
            <SettingsMainCounter changeMaxValue={changeMaxValue}
                                 changeMinValue={changeMinValue}
                                 setStatus={setStatus}
            />
            <MainCounter maxValue={maxValue}
                         minValue={startValue}
                         status={status}
            />
        </div>
    )
}