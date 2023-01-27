import React, {ChangeEvent} from "react";

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