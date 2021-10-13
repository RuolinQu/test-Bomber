import React, { Children, FC, useContext } from 'react'
import { MenuContext} from './menu'
import classnames from 'classnames'

interface MenuItemProps{
    index?: string;
    className?: string;
    disabled?: boolean;
    style?: React.CSSProperties; //!
}

export const MenuItem: React.FC<MenuItemProps> = ({
    className,
    disabled = false,
    style,
    index,
    children, //!! can exit
}) => {

    const menuContext=useContext(MenuContext)

    const classes = classnames('menu-item',className, {
        'is-disabled': disabled,
        'is-active':menuContext.index===index
    })

    const handleClick = () => {
        if (menuContext.onSelect && !disabled &&index) {
            menuContext.onSelect(index)
        }
    }

    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    )
}

export default MenuItem;