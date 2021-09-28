import styles from './ToolBar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle';
const ToolBar = (props) => {
    return(
        <header className={styles.ToolBar}>
            <DrawerToggle clicked={props.DrawerToggleClick}></DrawerToggle>
            <Logo></Logo>
            <nav className={styles.DesktopOnly}>
               <NavigationItems></NavigationItems>
            </nav>
        </header>
    );
}
export default ToolBar;