import React, {ChangeEvent, useEffect, useState} from "react";
import {SuperButton} from "./SuperButton/SuperButton";
import {StatusType} from "../../App";

type SettingsMainCounterPropsType = {
    changeMaxValue: (max: number) => void
    changeMinValue: (min: number) => void
    setStatus: (value: StatusType) => void

}

export const SettingsMainCounter: React.FC<SettingsMainCounterPropsType> = (
    {
        changeMaxValue,
        changeMinValue,
        setStatus,
    }
) => {
    const [maxInputValue, setMaxInputValue] = useState<number>(5)
    const [minInputValue, setMinInputValue] = useState<number>(0)


    useEffect(() => {
        let maxValue = localStorage.getItem('maxInputValue')
        let startValue = localStorage.getItem('minInputValue')

        maxValue && setMaxInputValue(JSON.parse(maxValue))
        startValue && setMinInputValue(JSON.parse(startValue))

    }, [])

    useEffect(() => {
        localStorage.setItem("maxInputValue", JSON.stringify(maxInputValue))
        localStorage.setItem("minInputValue", JSON.stringify(minInputValue))
        minInputValue >= maxInputValue || minInputValue < 0 ?
            setStatus('error') : setStatus('changed')
    }, [maxInputValue, minInputValue])


    const changeSettingCounter = () => {
        changeMaxValue(maxInputValue)
        changeMinValue(minInputValue)
        setStatus('default')
    }

    const changeMaxInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxInputValue(e.currentTarget.valueAsNumber)
    }

    const changeMinInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinInputValue(e.currentTarget.valueAsNumber)
    }

    let finalStyle = `inputNumber${(maxInputValue <= minInputValue || minInputValue < 0) ? ' errorInput' : ''}`

    return (
        <form className='counter'>
            <div className={'settingWrapper'}>
                <div className={'maxWrapper'}>
                    <span>max value:</span>
                    <input type="number"
                           value={maxInputValue}
                           onChange={changeMaxInputValue}
                           className={finalStyle}
                    />
                </div>
                <div className={'maxWrapper'}>
                    <span>start value:</span>
                    <input type="number"
                           value={minInputValue}
                           onChange={changeMinInputValue}
                           className={finalStyle}
                    />
                </div>
            </div>
            <div className={'button'}>
                <SuperButton callBack={changeSettingCounter} name={'set'}
                             disabled={(maxInputValue <= minInputValue || minInputValue < 0)}/>
            </div>
        </form>
    );
}