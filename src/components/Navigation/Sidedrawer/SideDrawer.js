import styles from './SideDrawer.module.css';
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';
const SideDrawer = (props) => {
    let stylesForOpenCloseDrawer = [styles.SideDrawer,styles.Close];
    if(props.show){
        stylesForOpenCloseDrawer = [styles.SideDrawer,styles.Open];
    }
    return(
        <React.Fragment>
        <BackDrop show={props.show} clicked={props.closed}></BackDrop>
        <div className={stylesForOpenCloseDrawer.join(' ')}>
            <div style={{height:'20%'}}><Logo></Logo></div>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </div>
        </React.Fragment>
    );
}
export default SideDrawer;