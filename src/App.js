import { useContext } from 'react'
import style from './App.module.css'
import Headers from './components/Header/Headers'
import Meal from './components/Meal/Meal'
import createContext from './store/Cart-context'
import CartProvider from './store/cartProvider'
import CartContext from './store/Cart-context'
import Cart from './components/Cart/Cart'

const App = () => {


    const ctx = useContext(CartContext);


    console.log(ctx.cart);
    

    return (
        <>
            {ctx.cart && <Cart/>}
            <Headers />
            <Meal />
            
            
            
        </>
    )
}
export default App