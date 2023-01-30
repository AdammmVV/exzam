import React, {useEffect, useState} from "react";
import {SuperButton} from "../SuperButton/SuperButton";
import {Counter} from "./Counter";


type MainCounterPropsType = {
    maxValue: number
    minValue: number
    error: boolean | 'change'
}

export const MainCounter:React.FC<MainCounterPropsType> = (
    {
        maxValue,
        minValue,
        error,

    }
) => {

    const [counter, setCounter] = useState<number>(0);

    useEffect(()=> {
        setCounter(minValue)
    }, [minValue])

    const counterButtonInc = () => {
        setCounter(counter + 1)
    }

    let red = counter === maxValue ? {color: 'red', fontSize: '60px'} : {color: 'white'}

    const counterButtonReset = () => {
        setCounter(minValue)
    }


    return (
        <div className='counter'>
            <Counter counter={counter} red={red} error={error}/>
            <div className='button'>
                <SuperButton callBack={counterButtonInc} name={'inc'} disabled={counter >= maxValue}/>
                <SuperButton callBack={counterButtonReset} name={'reset'} disabled={counter === minValue}/>
            </div>
        </div>
    );
}