import React, { createContext } from "react"
import ReactDOM from 'react-dom'

const CartContext = createContext({
    Amount:null,
    showCart:null
})
export default CartContext