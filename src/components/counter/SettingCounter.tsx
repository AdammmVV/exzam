import React, {ChangeEvent} from "react";

type SettingCounterPropsType = {
    setMaxInputValue: (max:number)=>void
    setMinInputValue: (min:number)=>void
    maxInputValue: number
    minInputValue: number
}
export const SettingCounter:React.FC<SettingCounterPropsType> = (
    {
        setMaxInputValue,
        setMinInputValue,
        maxInputValue,
        minInputValue,
    }
) => {

    return (
        <div>
            <div>
                max value:
                <SuperInputNumber setInputValue={setMaxInputValue} value={maxInputValue}/>
            </div>
            <div>
                min value:
                <SuperInputNumber setInputValue={setMinInputValue} value={minInputValue}/>
            </div>
        </div>
    )
}
type SuperInputNumberPropsType = {
    setInputValue: (value:number) => void
    value: number
}

const SuperInputNumber:React.FC<SuperInputNumberPropsType> = (
    {
        setInputValue,
        value,
    }
    ) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setInputValue(+e.currentTarget.value)
    }
    return (
        <input onChange={onChangeHandler} type="number" value={value} />
    )
}

