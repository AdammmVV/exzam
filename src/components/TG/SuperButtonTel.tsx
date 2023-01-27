import React from "react";

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