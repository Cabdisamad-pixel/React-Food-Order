import { act, useReducer, useState } from "react"
import CartContext from "./Cart-context"
import { type } from "@testing-library/user-event/dist/type"

const cartReducer = (state, action) => {

    if (action.type == 'ADD') {
        // console.log('Adding new item');
        const ExistCartItemIdx = state.Items.findIndex((oldItem) => {
            return (
                oldItem.Id === action.value.Id
            )
        })

        const ExistCatItem = state.Items[ExistCartItemIdx]

        if (ExistCatItem) {

            let updatedItem = {
                ...ExistCatItem,
                Amount: parseInt(ExistCatItem.Amount) + parseInt(action.value.Amount)
            }

            let updatedItems = [...state.Items]

            updatedItems[ExistCartItemIdx] = updatedItem

            let UpdatedTotal = state.Amount + action.value.Price * parseInt(action.value.Amount);


            return {
                Items: updatedItems,
                Amount: UpdatedTotal,
                totolCart:state.totolCart 
            }
        }

        else return {
            Items: [...state.Items, action.value],
            Amount: state.Amount += parseInt(action.value.Amount) * action.value.Price,
            totolCart:state.totolCart  +1
        }
    }
    if (action.type === 'DELETE_ITEM') {


        if (action.value.Amount >= 1 ) {
            const ExistCartItemIdx = state.Items.findIndex((oldItem) => {
                return (
                    oldItem.Id === action.value.Id
                )
            })

            const ExistCatItem = state.Items[ExistCartItemIdx]

            if (ExistCatItem) {

                let updatedItem = {
                    ...ExistCatItem,
                    Amount: parseInt(ExistCatItem.Amount) - 1
                }

                let updatedItems = [...state.Items]

                updatedItems[ExistCartItemIdx] = updatedItem

                let UpdatedTotal = state.Amount - action.value.Price ;


                return {
                    Items: updatedItems,
                    Amount: UpdatedTotal,
                    totolCart:state.totolCart

                }
            }
        }
        else {

            const removedItem = state.Items.filter((OldItem) => {
                return (
                    OldItem.Id !== action.value.Id
                )
            })
            // console.log(removedItem);
            

            return {
                Items: removedItem,
                Amount: state.Amount,
                totolCart:state.totolCart - 1

            }
        }

    }
    return {

        Items: [],
        Amount: 0,
        totolCart:0

    }
}

// creating cartProvider

const CartProvider = (props) => {

    const defaultCartState = { Items: [], Amount: 0, totolCart:0 }

    const [cartStateItems, dispatchCartItem] = useReducer(cartReducer, defaultCartState)

    console.log(cartStateItems.Amount);

    // console.log(cartItems.Items);
    // console.log(cartItems.Amount);


    const [cart, setCart] = useState(false)
    // const [AmountVal, setAmountVal] = useState(0)

    const AddHandler = (item) => {
        let Updated = parseInt(item.Amount)
        // setAmountVal((AmountValue) => AmountValue += Updated)
        console.log(item);
        dispatchCartItem({ type: 'ADD', value: item })

    }
    const RemoveHandler = (item) => {
        dispatchCartItem({ type: 'DELETE_ITEM', value: item })
    }
    const ShowCartHandler = () => {
        setCart((CurCart) => !CurCart)
        console.log('clicked');

    }
    const onClickCartHandler = () => {
        setCart(true)
    }
    const cartValue = {
        totolCart: cartStateItems.totolCart,
        ClickCart: onClickCartHandler,
        cart: cart,
        showCartFunc: ShowCartHandler,
        // Amount: AmountVal,
        AddHandler,
        RemoveHandler,
        TotolAmount: cartStateItems.Amount,
        Items: cartStateItems.Items
    }


    return (
        <CartContext.Provider value={cartValue}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider