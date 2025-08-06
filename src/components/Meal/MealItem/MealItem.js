import { useContext } from 'react'
import EachItem from '../EachITem/EachItem'
import MealForm from '../MealForm/MealForm'
import style from './MealItem.module.css'
import CartContext from '../../../store/Cart-context'

const MealItem = (props) => {



    return (
        <>
            <div className={style.MealsContainer}>

                {props.List.map((meal) => {
                    return (
                        <EachItem  Name={meal.Name} Discription ={meal.Description} Price ={meal.Price} id={meal.id} />
                    )
                })}


            </div>
        </>
    )
}
export default MealItem