import React from 'react';
import styles from './Modal.module.css'
import BackDrop from '../BackDrop/BackDrop';
const Modal = (props) =>{
    return(
        <React.Fragment>
        <BackDrop show={props.show} clicked={props.closeModal}></BackDrop>
        <div className={styles.Modal}
        style={{
            transform: props.show?'translateY(0)':'translateY(-100vh)',
            opacity: props.show?'1':'0'
        }}>
            {props.children}
        </div>
        </React.Fragment>
    );
}
export default Modal;