import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(token =>{
        return [...Array(props.ingredients[token])].map((_,i)=>{
            return<BurgerIngredient key ={token+i}type={token}></BurgerIngredient>
        });
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    console.log(transformedIngredients);
    if(transformedIngredients.length===0){
        transformedIngredients=<p>Please start adding ingredients</p>
    }
    
    return(
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
}
export default Burger;