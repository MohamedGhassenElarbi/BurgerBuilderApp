import styles from './Layout.module.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/Sidedrawer/SideDrawer';
import {useState} from 'react';
const Layout = (props) => {
    const [showBackDrop, setshowBackDrop] = useState(true)
    const closeBackDropHandler = () => {
        setshowBackDrop(false);
    }
    const drawerToggleHandler = () => {
        setshowBackDrop(!showBackDrop);
    }
    return(
        <div>
            <ToolBar DrawerToggleClick={drawerToggleHandler}></ToolBar>
            <SideDrawer closed={closeBackDropHandler} show={showBackDrop}></SideDrawer>
            <main className={styles.content}>{props.children}</main>
        </div>
    );
}
export default Layout;