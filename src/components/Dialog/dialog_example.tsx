import React,{useState} from 'react'
import Dialog from "./dialog"
import Button from '../Button/button'
import { alert,confirm,modal } from './dialog'

const DialogExample = () => {
    const [show,setShow]=useState(false)
    return (
        <div>
            <div>
                <h1>Example 1</h1>
                <button onClick={()=>{setShow(!show)}}>Toggle</button>
                <Dialog
                    visible={show}
                    buttons={[
                        <Button size="sm" btnType="primary" onClick={()=>{setShow(!show)}}>Confirm</Button>,
                        <Button size="sm" btnType="danger" onClick={()=>{setShow(!show)}}>Cancel</Button>
                    ]}
                    onClickClose={(e)=>{setShow(!show)}}
                >
                    <strong>content</strong>
                    <strong>content</strong>
                    <strong>content</strong>
                </Dialog>
            </div>
            <div>
                <h1>Example 2</h1>
                <Button onClick={() => alert("1")}>Alert</Button>
                
            </div>
            <div>
                <h1>Example 3</h1>
                <Button onClick={() => confirm('111',
                    () => console.log('yes'),
                    ()=>console.log('no')
                )}>Confirm</Button>
                
            </div>
            <div>
                <h1>Example 4</h1>
                <Button onClick={() => {
                    const onClose = modal(
                        [
                            <div>!!!</div>,
                            <Button onClick={() => {onClose() }}>close</Button>
                        ],
                    )

                }}>Modal</Button>
            </div>
        </div>
    )
}

export default DialogExample;