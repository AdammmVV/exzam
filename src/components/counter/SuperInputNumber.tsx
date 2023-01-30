import React, {ChangeEvent} from "react";

type SuperInputNumberPropsType = {
    changeInputValue: (value: number) => void
    value: number
    className: string
}
export const SuperInputNumber: React.FC<SuperInputNumberPropsType> = (
    {
        changeInputValue,
        value,
        className,
    }
) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeInputValue(e.currentTarget.valueAsNumber)
    }
    return (
        <input onChange={onChangeHandler} type="number" value={value} className={className}/>
    )
}