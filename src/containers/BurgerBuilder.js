import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import { useState } from "react";
import Modal from "../components/UI/Modal/Modal";
import OrderSummary from "../components/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICES ={
    salad:1,
    bacon:2,
    cheese:3,
    meat:4
}
const BurgerBuilder = () => {
    const [ingredients, setingredients] = useState({
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    });
    const [totalPrice, settotalPrice] = useState(4);
    const [purchasable, setpurchasable] = useState(false);
    const [purchasing, setpurchasing] = useState(false)
const updatePurchasing = () => {
setpurchasing(!purchasing)
}

const updatePurchasable = (ingredients)=>{
    const sum =Object.keys(ingredients)
    .map(token =>{
        return ingredients[token];
    })
    .reduce((sum,el)=>{
        return sum+el;
    },0)
    setpurchasable(sum>0);
}

const addIngredientHandler = (type) => {
    let oldCount =ingredients[type];
    let updatedCount =oldCount+1;
    let updatedIngredients = {...ingredients};
    updatedIngredients[type]=updatedCount;
    setingredients(updatedIngredients);
    let priceAddition =INGREDIENT_PRICES[type];
    let oldPrice = totalPrice;
    let updatedPrice=priceAddition+oldPrice;
    settotalPrice(updatedPrice);
    updatePurchasable(updatedIngredients);
}
const removeIngredientHandler = (type) => {
    let oldCount =ingredients[type];
    if(oldCount<=0){
        return;
    }
    let updatedCount =oldCount-1;
    let updatedIngredients = {...ingredients};
    updatedIngredients[type]=updatedCount;
    setingredients(updatedIngredients);
    let priceDeduction =INGREDIENT_PRICES[type];
    let oldPrice = totalPrice;
    let updatedPrice=oldPrice-priceDeduction;
    settotalPrice(updatedPrice);
    updatePurchasable(updatedIngredients);
}

const closeModalHandler = () =>{
    setpurchasing(false);
}
const continuePurchasehandler = ()=> {
    alert("continue purchase");
}

const disableInfo ={...ingredients};
    for(let key in disableInfo){
        disableInfo[key]=disableInfo[key]<=0
    } 

return(
    <div>
        {/* {purchasing?<Modal>
            <OrderSummary ingredients={ingredients}></OrderSummary>
        </Modal>:null} */}
        <Modal show={purchasing} closeModal={closeModalHandler}>
            <OrderSummary ingredients={ingredients}
            cancel={closeModalHandler}
            continue={continuePurchasehandler}
            totalPrice={totalPrice}>
            </OrderSummary>
        </Modal>
        <Burger ingredients={ingredients}></Burger>
        <BuildControls 
            addIngredient={addIngredientHandler}
            removeIngredient={removeIngredientHandler}
            disabled={disableInfo}
            price={totalPrice}
            purchasable={purchasable}
            purchasing={updatePurchasing}
        ></BuildControls>
    </div>
);
}
export default BurgerBuilder;