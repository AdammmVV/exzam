import React, {useState} from "react";
import {SuperButton} from "../SuperButton/SuperButton";
import {Counter} from "./Counter";
import {useSelector} from "react-redux";
import {AppRootType} from "../../../redux/store";
import {CounterStateType} from "../../../redux/counterReducer";

export const MainCounter: React.FC = () => {

    const counterState = useSelector<AppRootType, CounterStateType>(state => state.counterState)
    const [counter, setCounter] = useState<number>(0);

    const counterButtonInc = () => {
        setCounter(counter + 1)
    }

    const counterButtonReset = () => {
        setCounter(counterState.startValue)
    }

    let red = counter === counterState.maxValue ? {color: 'red', fontSize: '60px'} : {color: 'white'}

    return (
        <div className='counter'>
            <Counter counter={counter}
                     red={red}
            />
            <div className='button'>
                <SuperButton callBack={counterButtonInc}
                             name={'inc'}
                             disabled={counter >= counterState.maxValue}/>
                <SuperButton callBack={counterButtonReset}
                             name={'reset'}
                             disabled={counter === counterState.startValue}/>
            </div>
        </div>
    );
}