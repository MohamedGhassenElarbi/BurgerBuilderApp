import BuildControl from "./BuildControl/BuildControl";
import styles from './BuildControls.module.css';
const controls=[
{label:'Salad',type:'salad'},
{label:'Bacon',type:'bacon'},
{label:'Cheese',type:'cheese'},
{label:'Meat',type:'meat'}
];
const BuildControls = (props) => {
    
    return (<div className={styles.BuildControls}>
        <p>Current price : <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(token=>{
            return <BuildControl 
                label={token.label}
                key={token.label}
                added={()=>props.addIngredient(token.type)}
                removed={()=>props.removeIngredient(token.type)}
                disabled={props.disabled[token.type]}
                ></BuildControl>
        })}
        <button className={styles.OrderButton} disabled={!props.purchasable} onClick={props.purchasing}>Place Order</button>
    </div>);
    
}
export default BuildControls;