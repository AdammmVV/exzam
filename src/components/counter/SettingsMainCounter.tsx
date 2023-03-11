import React, {ChangeEvent, MouseEvent} from "react";
import {SuperButton} from "./SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../../redux/store";
import {
    changeMaxInputValueAC,
    changeMinInputValueAC,
    changeStatusCounterAC,
    CounterStateType
} from "../../redux/counterReducer";

export const SettingsMainCounter: React.FC = () => {
    const counterState = useSelector<AppRootType, CounterStateType>(state => state.counterState)
    const dispatch = useDispatch()

    const changeSettingCounter = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(changeStatusCounterAC('default'))
    }

    const changeMaxInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxInputValueAC(e.currentTarget.valueAsNumber))
    }

    const changeMinInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMinInputValueAC(e.currentTarget.valueAsNumber))
    }

    let finalStyle = `inputNumber${(counterState.maxValue <= counterState.startValue || counterState.startValue < 0) ? ' errorInput' : ''}`

    return (
        <form className='counter'>
            <div className={'settingWrapper'}>
                <div className={'maxWrapper'}>
                    <span>max value:</span>
                    <input type="number"
                           value={counterState.maxValue}
                           onChange={changeMaxInputValue}
                           className={finalStyle}
                    />
                </div>
                <div className={'maxWrapper'}>
                    <span>start value:</span>
                    <input type="number"
                           value={counterState.startValue}
                           onChange={changeMinInputValue}
                           className={finalStyle}
                    />
                </div>
            </div>
            <div className={'button'}>
                <SuperButton callBack={changeSettingCounter}
                             name={'set'}
                             disabled={(counterState.maxValue <= counterState.startValue || counterState.startValue < 0)}/>
            </div>
        </form>
    );
}