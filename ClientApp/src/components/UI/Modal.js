import React from 'react'
import ReactDOM from 'react-dom'
import css from './Modal.module.css'

const Backdrop = props => {
    return <div className={css.backdrop} onClick={props.onClick}></div>

}
const ModelOverlay = props => {
    return <div className={css.model}>
        <div className={css.modal}>{props.children}</div>
    </div>
}

const Modal = (props) => {
    const portalElement = document.getElementById('overlays')
    return <>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}

        {ReactDOM.createPortal(<ModelOverlay> {props.children} </ModelOverlay>, portalElement)}
        </>
}
export default Modal