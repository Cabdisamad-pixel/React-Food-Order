import Button from '../Button/Button'
// import image from '../../images/shopping-cart.png'
import image from '../../images/Logo.png'
import style from './Header.module.css'
const Headers = () => {

    return(
        <header>
            <div className= {style.Logo}>
                <img src={image} style={{with:'100px', height:'100px'}} />
            </div>
            <Button/>
        </header>
    )
}
export default Headers