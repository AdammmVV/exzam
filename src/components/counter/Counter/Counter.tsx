import React from "react";
import {StatusType} from "../../../App";

type CounterPropsType = {
    counter: number
    status: StatusType
    red: { color: string }
}
export const Counter: React.FC<CounterPropsType> = (
    {
        counter,
        status,
        red,
    }) => {

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

