import styles from './BuildControl.module.css'
const BuildControl = (props) => {
    return(
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button className={styles.More} onClick={props.added}>more</button>
            <button className={styles.Less} onClick={props.removed} disabled={props.disabled}>less</button>
        </div>
    );
}
export default BuildControl;