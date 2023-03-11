import React from "react";
import {useSelector} from "react-redux";
import { AppRootType } from "../../../redux/store";
import {StatusType} from "../../../redux/counterReducer";

type CounterPropsType = {
    counter: number
    red: { color: string }
}
export const Counter: React.FC<CounterPropsType> = (
    {
        counter,
        red,
    }) => {

    const status = useSelector<AppRootType, StatusType>(state => state.counterState.status)

    const finalValue = status === 'error'
        ? <div className={'incorrectValue'}>Incorrect value!</div>
        : status === 'changed'
            ? <div className={'setValues'}>enter values and press 'set'</div>
            : counter

    return (
        <div className='tablo' style={red}>
            {finalValue}
        </div>
    )
}

