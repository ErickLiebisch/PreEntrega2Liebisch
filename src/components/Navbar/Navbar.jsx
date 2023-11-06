import ItemListContainer from '../ItemListContainer/ItemListContainer' 
import './styles.css'
import CartWidget from '../CartWidget/CartWidget'
import { useContext } from 'react'
import { CartCtx } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Navbar = () => {


return (
<div className='navbar'>
<ItemListContainer>
    
</ItemListContainer>

<div>
    
</div>
<Link to={'/cart'}>
<CartWidget/>
</Link>


</div>


)

}

export default Navbar