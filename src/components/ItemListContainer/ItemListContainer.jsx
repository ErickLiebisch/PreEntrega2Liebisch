import { Link } from 'react-router-dom'
import './styles.css'

const ItemListContainer = (props) => {
return(
<div className='container'>
<button>
    <Link to={'/'}>Inicio</Link>
</button>
<button>
    Nosotors
</button>
<button>
    Categorias
</button>
<button>
    Productos
</button>
</div>

)



}



export default ItemListContainer