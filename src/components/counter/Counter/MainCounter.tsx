import React, {useState} from "react";
import {SuperButton} from "../SuperButton/SuperButton";
import {Counter} from "./Counter";


type MainCounterPropsType = {
    maxValue: number
    minValue: number
}

export const MainCounter:React.FC<MainCounterPropsType> = (
    {
        maxValue,
        minValue
    }
) => {

    const [counter, setCounter] = useState<number>(minValue);

    const counterButtonInc = () => {
        setCounter(counter + 1)
    }

    let red = counter === maxValue ? {color: 'red'} : {color: 'white'}

    const counterButtonReset = () => {
        setCounter(minValue)
    }


    return (
        <div className='counter'>
            <Counter counter={counter} red={red}/>
            <div className='button'>
                <SuperButton callBack={counterButtonInc} name={'inc'} disabled={counter >= maxValue}/>
                <SuperButton callBack={counterButtonReset} name={'reset'} disabled={counter === minValue}/>
            </div>
        </div>
    );
}