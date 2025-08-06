import { createContext, useContext } from 'react'
import imaage from '../../images/shopping-cart.png'
import style from './Button.module.css'
import CartContext from '../../store/Cart-context'
const Button = () => {

    const ctx = useContext(CartContext)
    return (
        <button onClick={() => ctx.showCartFunc()}>
            <img src={imaage} />
            <h3>Your cart</h3>
            <div className={style.Badge}>{ctx.totolCart}</div>
        </button>
    )
}
export default Button