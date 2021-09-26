import styles from './Layout.module.css';
const Layout = (props) => {
    return(
        <div>
            <div>nav ...</div>
            <main className={styles.content}>{props.children}</main>
        </div>
    );
}
export default Layout;