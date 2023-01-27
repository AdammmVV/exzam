import React, {useState} from "react";
import {v1} from "uuid";
import {SuperInputTel} from "./SuperInputTel";
import {SuperButtonTel} from "./SuperButtonTel";

export const Telegramm = () => {

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