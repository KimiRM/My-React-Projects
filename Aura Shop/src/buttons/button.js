import React from "react"
import '../buttons/button.css'

const Button = ({str, className , children,onClick , title=''}) => {
    const classes = ['btn', className].filter(Boolean).join(' ');
    return <button onClick={onClick} className={classes} title={title}>{children}</button>
}

export default Button