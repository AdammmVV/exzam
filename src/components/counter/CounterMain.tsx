import React, {useState} from "react";
import {SuperButton} from "./SuperButton";
import {Counter} from "./Counter";

export const CounterMain = () => {

    const [counter, setCounter] = useState<number>(0);

    const counterButtonInc = () => {
        setCounter(counter + 1)
    }

    let red = counter === 5 ? {color: 'red'} : {color: 'white'}

    const counterButtonReset = () => {
        setCounter(0)
    }


    return (
        <div className='counter'>
            <Counter counter={counter} red={red}/>
            <div className='button'>
                <SuperButton callBack={counterButtonInc} name={'inc'} disabled={counter >= 5}/>
                <SuperButton callBack={counterButtonReset} name={'reset'} disabled={counter === 0}/>
            </div>
        </div>
    );
}