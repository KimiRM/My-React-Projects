import React from "react"
import '../buttons/button.css'

const Button = ({str, className , children}) => {
    const classes = ['btn', className].filter(Boolean).join(' ');
    return <button className={classes}>{children}</button>
}

export default Button