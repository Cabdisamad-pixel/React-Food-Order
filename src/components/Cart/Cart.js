import ReactDOM from 'react-dom'
import { useContext } from "react"
import CartContext from "../../store/Cart-context"
import classes from './Cart.module.css'
import CartBox from './CartBox/CartBox'


const BackDrop = (props) => {

    // const ctx = useContext(CartContext);
    return ReactDOM.createPortal(
        <div onClick={() => props.showCartFunc()} className={classes.backDrop}>
        </div>, document.getElementById('backDropRoot')
    )
}

const CartRoot = (props) => {
    return ReactDOM.createPortal(
        <div className={classes.Cart}>
            {props.Item.map((item) => {
                return (
                    <CartBox  Item={item} Name={item.Name} Price={item.Price} Amount={item.Amount} AddHandler={props.AddHandler} RemoveHandler={props.RemoveHandler}/>
                )
            })}
             <div className={classes.totol}>
                <h2>Totol Amount </h2>
                <h2 className={classes.totolAmount}>${props.TotolAmount.toFixed(2)}</h2>
            </div>
            <div className={`${props.totolCart && classes.orderButtons} ${!props.totolCart && classes.Disabled}`}>
                <button>Order</button>
                <button onClick={props.showCartFunc}>Cancel</button>
            </div>
        </div>

        , document.getElementById('cartRoot')
    )
}



const Cart = () => {




    const ctx = useContext(CartContext)

    // console.log(ctx.Items[0].Id)
    return (
        <>
            <BackDrop showCartFunc={ctx.showCartFunc} />


            <CartRoot Item={ctx.Items} TotolAmount={ctx.TotolAmount} totolCart={ctx.totolCart} AddHandler={ctx.AddHandler} RemoveHandler={ctx.RemoveHandler} showCartFunc={ctx.showCartFunc} />




        </>
    )
}
export default Cart