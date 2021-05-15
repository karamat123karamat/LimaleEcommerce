import Login from "./components/users/Auth/Login.vue"
import ProductShow from "./components/Product/ProductShow.vue"

export const routes = [
    {
        name: "home",
        component: Login,
        path:"/login"
    },
    {
        name: "product_show",
        component: ProductShow,
        path: "/product"
    }
]