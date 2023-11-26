import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import Products from '../views/Products.vue'
import SignUpView from "@/views/SignUpView.vue";

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router