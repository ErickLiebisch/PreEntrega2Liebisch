import { Link } from "react-router-dom"

const Item = ({id,nombre,precio,descripcion}) => {
    return (
      <div>
        <h1>{nombre}</h1>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <Link to={`/product/${id}`}>Ver detalles</Link>
      </div>  
    )

}

export default Item