import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {InicioPage, ItemDetailContainerPage, CheckoutPage,CartPage} from '../pages'

const Navigation = () => {
const routes = createBrowserRouter([
    {
        path: '/',
        element: <InicioPage/>
    },
    {
        path: '/product/:id',
        element: <ItemDetailContainerPage/>
    },
    {
        path: '/checkout',
        element: <CheckoutPage/>
    },
    {
        path: '/cart',
        element: <CartPage/>
    },



])

    return(
    <RouterProvider router = {routes}/>
)

}

export default Navigation