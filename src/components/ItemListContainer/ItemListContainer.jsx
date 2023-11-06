import { Link } from 'react-router-dom'
import './styles.css'

const ItemListContainer = (props) => {
return(
<div className='container'>
<button>
    <Link to={'/'}>Inicio</Link>
</button>
<button>
<Link to={'/categories/Electrónica'}> 
Electrónica 
</Link>  
</button>
<button>
<Link to={'/categories/Hogar'}>
    Hogar
</Link>
</button>
<button>
<Link to={'/categories/Ropa'}>
    Ropa
</Link>
</button>
</div>

)



}



export default ItemListContainer