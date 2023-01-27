import React from "react";

type CounterPropsType = {
    counter: number
    red: { color: string }
}
export const Counter = (props: CounterPropsType) => {
    return (
        <div className='tablo' style={props.red}>
            {props.counter}
        </div>
    )
}

