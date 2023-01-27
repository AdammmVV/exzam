import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SuperButton} from "./components/SuperButton";
import {v1} from "uuid";

export function App() {

    const [counter, setCounter] = useState<number>(0);

    const [disabledButtonInc, setDisabledButtonInc] = useState(false)
    const [disabledButtonReset, setDisabledButtonReset] = useState(false)


    const counterButtonInc = () => {
        setDisabledButtonReset(false)
        setCounter(counter + 1)
        if (counter === 4) {
            return setDisabledButtonInc(true)
        }

    }

    let red = counter === 5 ? {color: 'red'} : {color: 'black'}

    const counterButtonReset = () => {
        setDisabledButtonInc(false)
        setDisabledButtonReset(true)
        setCounter(0)
    }


    return (
        <div className='counter'>
            <Counter counter={counter} red={red}/>
            <div className='button'>
                <SuperButton callBack={counterButtonInc} name={'inc'} disabled={disabledButtonInc}/>
                <SuperButton callBack={counterButtonReset} name={'reset'} disabled={disabledButtonReset}/>
            </div>
        </div>
    );
}


export const App = () => {

    type State = {
        id: string
        text: string
    }

    const [state, setState] = useState<State[]>([])
    const [valueInput, setValueInput] = useState<string>('')

    const SuperInputTelValue = (value: string) => {
        setValueInput(value)
    }

    const addMessage = () => {
        let message = {id: v1(), text: valueInput}
        setState([message, ...state])
        setValueInput('')
    }

    const clearMessage = () => {
        setValueInput('')
    }

    const deleteMessage = () => {
        if (state.length > 0) {
            setState(state.filter((el, index) => index !== state.length - 1))
        }
    }
    let disabledButton = state.length === 5
    let mapState = state.map(el => <li key={el.id}>{el.text}</li>)

    return (
        <div className={'app'}>
            <div>
                {state.length <= 4 ? `Всего ${5 - state.length} сообщений` : 'сообщений больше нет'}
            </div>
            <SuperInputTel onChange={SuperInputTelValue} value={valueInput}/>
            <SuperButtonTel name={'send'} callBack={addMessage} disabled={disabledButton}/>
            <SuperButtonTel name={'clear'} callBack={clearMessage}/>
            <div>
                <SuperButtonTel name={'delete last message'} callBack={deleteMessage}/>
            </div>
            <div>
                <ul>
                    {mapState}
                </ul>
            </div>
        </div>
    )
}

export type SuperInputTelPropsType = {
    onChange: (event: string) => void
    value: string
}

export const SuperInputTel = (props: SuperInputTelPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    }
    return (
        <input value={props.value} onChange={onChangeHandler} type="text"/>
    )
}

export type SuperButtonTelProps = {
    disabled?: boolean
    name: string
    callBack: () => void
}

export const SuperButtonTel = (props: SuperButtonTelProps) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler} disabled={props.disabled}>{props.name}</button>
    )
}


