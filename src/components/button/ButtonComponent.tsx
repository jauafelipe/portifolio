import "./Button.css"
import React from "react";


interface ButtonProps {
    text?:string;
    onclick?: () => void
}
export const ButtonComponent:React.FC<ButtonProps> = ({onclick,text}) => {
    return <button className="button" onClick={onclick}>{text}</button>
}