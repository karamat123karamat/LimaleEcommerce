import Login from "./components/users/Auth/Login.vue"
import ProductShow from "./components/Product/ProductShow.vue"
import Cart from "./components/Cart/Cart.vue"
import Checkout from "./components/Checkout/Checkout.vue"
import Registration from "./components/users/Auth/Registration.vue"
import ForgetPassword from "./components/users/Auth/ForgetPassword.vue"

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
    },{
        name: 'registration',
        component: Registration,
        path: '/inscription'
    },{
        name: 'forget-password',
        component: ForgetPassword,
        path: '/mot-de-passe-oublie'
    }
]