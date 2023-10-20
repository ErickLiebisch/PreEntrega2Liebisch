import Navbar from "../../components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../pages/ItemDetail/ItemDetail"
import { getFirestore, getDoc, doc} from 'firebase/firestore'
export const ItemDetailContainer=()=>{
const [item,setItem]=useState(null);
const [loading,setLoading]=useState(true)
const { id }=useParams();
useEffect(()=>{
    const db=getFirestore();
    const refDoc=doc(db,"productos",id)
    getDoc(refDoc).then(snapshot=>{
        setItem({id: snapshot.id, ...snapshot.data() })
    }).finally(()=>setLoading(false))
}
,[]);
if(loading){
    return <div>Cargando</div>
}else{
    return <div>
        <h1>detalles producto</h1>
        <ItemDetail item={item}></ItemDetail>
    </div>
}
}
export default ItemDetailContainer