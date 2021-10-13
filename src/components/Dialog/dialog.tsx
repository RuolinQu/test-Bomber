import React, { Fragment, ReactElement, ReactEventHandler, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button/button'
import {scopeClass} from '../../utils/varaible'

interface DialogProps{
    visible: boolean,
    buttons?: Array<ReactElement>
    onClickClose?: ReactEventHandler
}

const sc=scopeClass("bb-dialog")

const Dialog: React.FC<DialogProps> = (props) => {
    
    const onCloseHandler:ReactEventHandler = (e) => {
        if (props.onClickClose) {
            props.onClickClose(e)
        }
    }
    
    const node=props.visible ?
    <Fragment>
        <div className={sc('mask')} onClick={onCloseHandler} ></div>
        <div className={sc("")}>
            <header className={sc('header')}>Tips</header>
            <main className={sc('main')} >{props.children}</main>
            <footer className={sc('footer')}>
                {/* {props.buttons.map((item) => item)} */}
                {/* add unique key */}
                {props.buttons&&props.buttons.map((item,index)=>React.cloneElement(item,{key:index}))}
            </footer>
        </div>
    </Fragment>:
    null

    return (
        ReactDOM.createPortal(node,document.body)    
    )
}


const alert = (content:string) => {
    const component = <Dialog visible={true} onClickClose={() => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
     }}>
        <div>content</div>
    </Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component,div)
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const component =
        <Dialog 
            visible={true}
            onClickClose={() => {
                ReactDOM.render(React.cloneElement(component, { visible: false }), div)
                ReactDOM.unmountComponentAtNode(div)
                div.remove()
            }}
            buttons={[
                <Button size="sm" btnType="primary" onClick={() => {
                    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
                    ReactDOM.unmountComponentAtNode(div)
                    div.remove()
                    yes && yes()
                }}>
                    Confirm
                </Button>,
                <Button size="sm" btnType="danger" onClick={() => {
                    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
                    ReactDOM.unmountComponentAtNode(div)
                    div.remove()
                    no&&no()
                }}
                >
                    Cancel
                </Button>
            ]}
        >
            {content}
        </Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component,div)
}

const modal = (content: ReactNode) => {
    const component = <Dialog
        visible={true}
    >
        {content}
    </Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component,div)
    return () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
}

export { alert,confirm, modal }
export default Dialog


    //no portal
    // return (
    //     props.visible ?
    //         <Fragment>
    //             <div className={sc('mask')} onClick={onCloseHandler} ></div>
    //             <div className={sc("")}>
    //                 <header className={sc('header')}>Tips</header>
    //                 <main className={sc('main')} >{props.children}</main>
    //                 <footer className={sc('footer')}>
    //                     {/* {props.buttons.map((item) => item)} */}
    //                     {/* add unique key */}
    //                     {props.buttons&&props.buttons.map((item,index)=>React.cloneElement(item,{key:index}))}
    //                 </footer>
    //             </div>
    //         </Fragment>:
    //     null
    // )