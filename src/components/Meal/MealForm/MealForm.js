import { use, useContext, useRef, useState } from 'react'
import style from './MealForm.module.css'
import CartContext from '../../../store/Cart-context'
const MealForm = (props) => {

    const AmountRef = useRef()

    const ctx = useContext(CartContext)

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(AmountRef.current.value);
        let CurrentAmount = AmountRef.current.value

        if(CurrentAmount.length<=0){
            return
        }
        props.OnChangeAmount(CurrentAmount)
        
    }
    return (
        <>
            <div className={style.Inputcontainer}>
                <form onSubmit={submitHandler} className={style.input}>
                    <label>Amount</label>
                    <input type='number'  min={1} max={5} placeholder='1' ref={AmountRef}/>
                    <button type='submit'>+Add</button>
                </form>

            </div>
        </>
    )
}
export default MealForm