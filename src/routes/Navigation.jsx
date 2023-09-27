import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {InicioPage, ItemDetailPage, CheckoutPage} from '../pages'

const Navigation = () => {
const routes = createBrowserRouter([
    {
        path: '/',
        element: <InicioPage/>
    },
    {
        path: '/product/:idProduct',
        element: <ItemDetailPage/>
    },
    {
        path: '/checkout',
        element: <CheckoutPage/>
    },



])

    return(
    <RouterProvider router = {routes}/>
)

}

export default Navigation