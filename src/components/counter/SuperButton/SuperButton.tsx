import React, {MouseEvent} from "react";

type SuperButtonPropsType = {
    disabled: boolean
    callBack: (e:MouseEvent<HTMLButtonElement>) => void
    name: string
}
export const SuperButton = (props: SuperButtonPropsType) => {
    let finalStyle = props.disabled ? {opacity: 0.3} : {opacity: 1}
    return (
        <button onClick={(e)=>props.callBack(e)}
                disabled={props.disabled}
                style={finalStyle}>{props.name}</button>
    )
}