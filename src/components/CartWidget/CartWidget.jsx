import { useContext } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import {MdShoppingBasket} from 'react-icons/Md'
import { CartCtx } from '../../context/CartContext'
const CartWidget = () => {
    const {totalWidget} = useContext(CartCtx)



    return (

    
<div>
    <Link to ="/checkout"></Link>
    <div className='circulo'>
    {totalWidget}
    </div>
    <MdShoppingBasket>

</MdShoppingBasket>
</div>

)


}

export default CartWidget