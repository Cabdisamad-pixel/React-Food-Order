import style from './Meal.module.css'
import MealItem from './MealItem/MealItem'

const Meal = () => {

    const MealList = [
        {
            id: 1,
            Name: 'suchi',
            Price: 22.99,
            Description: 'Fines fish and veggies'
        },
        {
            id: 2,
            Name: 'Saldato',
            Price: 14.99,
            Description: 'Pasto and tomattos'
        },
        {
            id: 3,
            Name: 'Buger',
            Price: 56.89,
            Description: 'Bread with Beef'
        },
        {
            id: 4,
            Name: 'Pizza',
            Price: 34.53,
            Description: ' I know you know this '
        },
    ]

    return (
        <>
            <div className={style.section}>
                <div className={style.Info}>
                    <h1>Delecious Food , Delivered To You</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quasi dolorem aspernatur eaque corporis quae facilis, possimus voluptates necessitatibus! Praesentium repellendus eveniet officiis natus qui sequi necessitatibus beatae saepe unde!
                    </p>
                </div>

            </div>
            <MealItem List={MealList}/>

        </>
    )
}
export default Meal