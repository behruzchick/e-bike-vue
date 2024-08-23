import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue';
import Products from './views/Products.vue';
import ProductSectionHeader from './components/ProductComponents/ProductSectionHeader.vue';
import BikeDetails from './views/BikeDetails.vue';
import CartPage from './views/CartPage.vue';
import FavoritePage from './views/FavoritePage.vue';

const routes = [
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/products",
        name:"Products",
        components:{
            default:Products,
            header:ProductSectionHeader
        }
    },
    {
        path:"/bike/:id",
        name:"Product",
        components:{
            default:BikeDetails,
            header:ProductSectionHeader
        }
    },
    {
        path:"/cart",
        name:"Cart",
        components:{
            default:CartPage,
            header:ProductSectionHeader
        }
    },
    {
        path:"/favorites",
        name:"Favorites",
        components:{
            default:FavoritePage,
            header:ProductSectionHeader
        }
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})



const app = createApp(App)

app.use(router);

app.mount('#app')
