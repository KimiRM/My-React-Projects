import React from "react";
import './input.css';


const Input = ({onChange,inputClassName, placeHolder="", label, labelClassName}) => {
    return (
        <div className="Input-container">
            <label className={labelClassName}>{label}</label>
            <input onChange={onChange} className={inputClassName} placeholder={placeHolder}></input>
        </div>
    )
}

export default Input