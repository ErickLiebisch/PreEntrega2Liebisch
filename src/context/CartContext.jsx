import { createContext, useState } from "react"

export const CartCtx = createContext ([])



export const CartContext = ({children}) => {
const [listProducts,setListProducts]=useState([])    
const addToCart = (product, quantity) => {
    const alreadyExists=listProducts.some(item=>item.id===product.id)
    if(!alreadyExists)
    setListProducts(prev=>[...prev,{...product, quantity }])
else{
    const actualizarProductos=listProducts.map(item=>{
        if(item.id===product.id)
        return{
    ...item,
    quantity: item.quantity + quantity,
}

    else return item
})
setListProducts(actualizarProductos)
}
}
const totalWidget=listProducts.reduce((acc,val)=>acc+val.quantity,0)
const total=listProducts.reduce((acc,val)=>acc+val.quantity*val.precio,0)
const removeItem=id=>{
    const itemsFiltered=listProducts.filter(item=>item.id!==id)
    setListProducts(itemsFiltered)
}
const clear=()=>setListProducts([])


    return (
    <CartCtx.Provider value ={{listProducts,setListProducts, addToCart,removeItem, clear, totalWidget, total }}>
        {children}

    </CartCtx.Provider>
)



}

export default CartContext
