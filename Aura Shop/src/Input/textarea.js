import React from "react";
import './textarea.css'

const TextArea = ({onChange,inputClassName,labelClassName,label,placeholder}) => {
    return (
        <div className="Input-container">
            <label className={labelClassName}>{label}</label>
            <textarea onChange={onChange} className={inputClassName} placeholder={placeholder} rows={5} cols={24} autoCorrect="on"></textarea>
        </div>
    )
}

export default TextArea