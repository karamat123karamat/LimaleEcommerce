import Login from "./components/users/Auth/Login.vue"
import ProductShow from "./components/Product/ProductShow.vue"
import Cart from "./components/Cart/Cart.vue"
import Checkout from "./components/Checkout/Checkout.vue"

export const routes = [
    {
        name: "home",
        component: Login,
        path:"/se-connecter"
    },
    {
        name: "product_show",
        component: ProductShow,
        path: "/product"
    },
    {
        name:"cart",
        component: Cart,
        path:"/mon-panier"
    },
    {
        name:"checkout",
        component: Checkout,
        path: "/shipping"
    }
]