import React, {useEffect, useState} from "react";
import {SuperButton} from "../SuperButton/SuperButton";
import {Counter} from "./Counter";
import {StatusType} from "../../../App";


type MainCounterPropsType = {
    maxValue: number
    minValue: number
    status: StatusType
}

export const MainCounter: React.FC<MainCounterPropsType> = (
    {
        maxValue,
        minValue,
        status,
    }
) => {

    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
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
            <Counter counter={counter}
                     red={red}
                     status={status}
            />
            <div className='button'>
                <SuperButton callBack={counterButtonInc}
                             name={'inc'}
                             disabled={counter >= maxValue}/>
                <SuperButton callBack={counterButtonReset}
                             name={'reset'}
                             disabled={counter === minValue}/>
            </div>
        </div>
    );
}