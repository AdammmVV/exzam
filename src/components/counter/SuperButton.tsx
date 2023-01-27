import React from "react";

type SuperButtonPropsType = {
    disabled: boolean
    callBack: () => void
    name: string
}
export const SuperButton = (props: SuperButtonPropsType) => {
    let finalStyle = props.disabled ? {opacity: 0.3} : {opacity: 1}
    return (
        <button onClick={props.callBack}
                disabled={props.disabled}
                style={finalStyle}>{props.name}</button>
    )
}