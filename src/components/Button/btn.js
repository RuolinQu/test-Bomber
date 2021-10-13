import React from 'react'

import classnames from 'classnames'

export const Button = (props) => {

    const {className,btnType,disabled,size,href,children,...restProps}=props
    
    const classes = classnames('btn',className,
        {
            [`btn-${btnType}`]: btnType,
            [`btn-${size}`]: size,
            'disabled':(btnType==='link')&&disabled
        }
    )
    if (href && btnType === "link") {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }
}

export default Button