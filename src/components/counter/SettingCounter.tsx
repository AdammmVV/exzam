import React from "react";
import {SuperInputNumber} from "./SuperInputNumber";

type SettingCounterPropsType = {
    setMaxInputValue: (max:number)=>void
    setMinInputValue: (min:number)=>void
    setError: (value: boolean | 'change')=> void
    maxInputValue: number
    minInputValue: number
}
export const SettingCounter:React.FC<SettingCounterPropsType> = (
    {
        setMaxInputValue,
        setMinInputValue,
        setError,
        maxInputValue,
        minInputValue,
    }
) => {

    if(maxInputValue <= minInputValue || minInputValue < 0) {
        setError(true)
    }


    const changeMaxInputValue = (value: number) => {
        setMaxInputValue(value)
        setError("change")
    }

    const changeMinInputValue = (value: number) => {
        setMinInputValue(value)
        setError("change")
    }

    let finalStyle = `inputNumber${(maxInputValue <= minInputValue || minInputValue < 0) ? ' errorInput' : ''}`

    return (
        <div className={'settingWrapper'}>
            <div className={'maxWrapper'}>
                <span>max value:</span>
                <SuperInputNumber changeInputValue={changeMaxInputValue}
                                  value={maxInputValue}
                                  className={finalStyle}/>
            </div>
            <div className={'maxWrapper'}>
                <span>start value:</span>
                <SuperInputNumber changeInputValue={changeMinInputValue}
                                  value={minInputValue}
                                  className={finalStyle}/>
            </div>
        </div>
    )
}

