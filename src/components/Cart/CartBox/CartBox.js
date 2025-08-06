import classes from './CartBox.module.css'
const CartBox = (props) => {

    const plusButtonHandler = (e) => {


        const updatedAmount = {
            Id: props.Item.Id,
            Name: props.Item.Name,
            Price: props.Item.Price,
            Amount: 1,
        }
        props.AddHandler(updatedAmount)
    }
    const RemoveItemHandler = () => {
        props.RemoveHandler({
            Id: props.Item.Id,
            Name: props.Item.Name,
            Price: props.Item.Price,
            Amount: props.Item.Amount,
        })
    }


    return (
        <div className={classes.Cart}>
            <div className={classes.mealContainer}>

                <div className={classes.itemContainer}>
                    <div className={classes.Item}>
                        <h1 className={classes.name}>{props.Name}</h1>
                        <div className={classes.description}>
                            <h3 className={classes.price}>${props.Price}</h3>
                            <h3 className={classes.amount}>X {props.Amount}</h3>
                        </div>
                    </div>
                    <div className={classes.plusAndMinus}>
                        <div className={classes.Buttons}>
                            <button className={classes.Minus} onClick={RemoveItemHandler}>–</button>
                            <button className={classes.Plus} onClick={plusButtonHandler}>+</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )

}
export default CartBox