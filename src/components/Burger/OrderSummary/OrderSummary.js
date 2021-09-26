import Button from "../../UI/Button/Button";
const OrderSummary = (props) => {
    const listOfIngredients = Object.keys(props.ingredients)
    .map(token =>{
        return <li key={token}>{token} : {props.ingredients[token]}</li>
    })
    return(
        <div>
            <h3>Your Order</h3>
            <p>order a Hambourger with the following ingredients ?</p>
            <ul>
                {listOfIngredients}
            </ul>
            <p><strong>Total Price : {props.totalPrice}$ </strong></p>
            <Button clicked={props.cancel} buttontype={'Danger'}>Cancel</Button>
            <Button clicked={props.continue} buttontype={'Success'}>Continue</Button>
        </div>
    );
}
export default OrderSummary;