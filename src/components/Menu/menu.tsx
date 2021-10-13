import React, { FC,useState,createContext } from 'react'
import classnames from 'classnames'

export type MenuMode = 'horizantal' | 'vertical'
export type SelectFun=(selectIndex:string)=>void

export interface MenuProps{
    className?: string;
    mode?: MenuMode;
    defaultIndex?: string;
    style?: React.CSSProperties;
    onSelect?: SelectFun
}
 
export interface TMenuContext{
    onSelect?: SelectFun;
    index: string;
}

export const MenuContext=createContext<TMenuContext>({
    index:"0",
})
//????

export const Menu: React.FC<MenuProps> = ({
    className,
    mode="horizantal",
    defaultIndex = "0",
    children,
    onSelect,
}) => {
    
    const [curIndex, setIndex] = useState(defaultIndex)

    const handleClick = (index: string) => {
        setIndex(index)
        if (onSelect) {
            onSelect(index)
        }
    }

    const passedContext: TMenuContext = {
        index: curIndex ? curIndex : '0',
        onSelect: handleClick,
      }
    
    const classes = classnames(className, 'bomber-menu',
        {
            'menu-horizantal': mode === 'horizantal',
            'menu-vertical':mode==='vertical'
        }
    )

    return (
        <MenuContext.Provider value={passedContext}>
            <ul className={classes}>
                {children}
            </ul>
        </MenuContext.Provider>
    )
}

export default Menu