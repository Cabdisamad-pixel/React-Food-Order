import { useContext } from "react"
import MealForm from "../MealForm/MealForm"
import style from './EachItem.module.css'
import CartContext from "../../../store/Cart-context"
const EachItem = (props) => {

    const ctx =useContext(CartContext)

    const AmountHandler = (amount) => {
        const CurrentItem = {
            Name: props.Name,
            Price:props.Price,
            Amount:amount,
            Id:props.id
        }
        ctx.AddHandler(CurrentItem)
    }

    console.log(props.Discription);
    
    return (
        <div className={style.Meal}>
            <div className={style.Description}>
                <h3>{props.Name}</h3>
                <i><p style={{color:"goldenrod"}}>{props.Discription}</p></i>
                <b>${props.Price}</b>
            </div>
            <MealForm OnChangeAmount = {AmountHandler}/>
        </div>
    )
}
export default EachItem