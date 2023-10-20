import { Link } from "react-router-dom"

import { useContext } from "react";

const ItemD = ({id,nombre,precio,descripcion}) => {
    
    return (
      <div>
        <h1>Nombre: {nombre}</h1>
        <p>Descripcion:{descripcion}</p>
        <p>Precio: {precio}</p>
        
      </div>  
    )

}

export default ItemD