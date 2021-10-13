import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

import classnames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'


interface BaseButtonProps {
    className?: string;
    btnType?: ButtonType;
    size?: ButtonSize;
    href?: string;
    disabled?: boolean;
    children?:React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: React.FC<ButtonProps> = ({ className,
    btnType='default',
    disabled=false,
    size,
    href,
    children,
    ...restProps
}) => {
    
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
                style={{position:'relative'}}
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