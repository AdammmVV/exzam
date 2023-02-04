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


    useEffect(()=> {
        let maxValue = localStorage.getItem('maxValue')
        let startValue = localStorage.getItem('startValue')
        let status = localStorage.getItem('status')

        maxValue && setMaxInputValue(JSON.parse(maxValue))
        startValue && setMinInputValue(JSON.parse(startValue))
        status && setStatus(JSON.parse(status))

    }, [])

    useEffect(() => {
        minInputValue >= maxInputValue || minInputValue < 0 ?
            setStatus('error') : setStatus('changed')
    }, [maxInputValue, minInputValue])




    useEffect(()=> {
        localStorage.setItem("maxInputValue", JSON.stringify(maxInputValue))
        localStorage.setItem("minInputValue", JSON.stringify(minInputValue))
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
        <div className='counter'>
            <form action="#">
                <input type="number"
                       value={maxInputValue}
                       onChange={changeMaxInputValue}
                       className={finalStyle}
                />
                <input type="number"
                       value={minInputValue}
                       onChange={changeMinInputValue}
                       className={finalStyle}
                />
                <SuperButton callBack={changeSettingCounter} name={'set'}
                             disabled={(maxInputValue <= minInputValue || minInputValue < 0)}/>
            </form>
        </div>
    );
}