import { Link } from "react-router-dom"

const Item = ({items}) => {
    return (
      <div>
        <h1>{items.nombre}</h1>
        <p>{items.descripcion}</p>
        <p>{items.precio}</p>
        <Link to={`/product/${items.id}`}>Ver detalles</Link>
      </div>  
    )

}

export default Item