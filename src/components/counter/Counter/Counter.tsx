import React from "react";

type CounterPropsType = {
    counter: number
    error: boolean | 'change'
    red: { color: string }
}
export const Counter = (props: CounterPropsType) => {

    const finalValue = props.error === true
        ? <div className={'incorrectValue'}>Incorrect value!</div>
        : props.error === "change"
            ? <div className={'setValues'}>enter values and press 'set'</div>
            :  props.counter

    return (
        <div className='tablo' style={props.red}>
            {finalValue}
        </div>
    )
}

