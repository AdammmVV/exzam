import React from "react";

type SuperButtonPropsType = {
    disabled: boolean
    callBack: () => void
    name: string
}
export const SuperButton = (props: SuperButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler} disabled={props.disabled}>{props.name}</button>
    )
}