import React, {useState} from "react";
import {SuperButton} from "./SuperButton/SuperButton";
import {SettingCounter} from "./SettingCounter";

type SettingsMainCounterPropsType = {
    changeMaxValue: (max: number) => void
    changeMinValue: (min: number) => void
    setError: (val: boolean | 'change') => void
}

export const SettingsMainCounter: React.FC<SettingsMainCounterPropsType> = (
    {
        changeMaxValue,
        changeMinValue,
        setError,
    }
) => {
    const [maxInputValue, setMaxInputValue] = useState<number>(5)
    const [minInputValue, setMinInputValue] = useState<number>(0)


    const changeSettingCounter = () => {
        changeMaxValue(maxInputValue)
        changeMinValue(minInputValue)
        setError(false)
    }

    return (
        <div className='counter'>
            <SettingCounter maxInputValue={maxInputValue}
                            minInputValue={minInputValue}
                            setMaxInputValue={setMaxInputValue}
                            setMinInputValue={setMinInputValue}
                            setError={setError}/>
            <div className='button'>
                <SuperButton callBack={changeSettingCounter} name={'set'}
                             disabled={(maxInputValue <= minInputValue || minInputValue < 0)}/>
            </div>
        </div>
    );
}