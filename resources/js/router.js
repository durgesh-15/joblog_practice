import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import AdminComponent from './components/AdminComponent.vue';

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'login',
    },
    {
        path:'/login',
        component:LoginComponent,
        name:'Login',
    },
    {
        path:'/register',
        component:RegisterComponent,
        name:'register'
    },
    {
        path:'/admin',
        component:AdminComponent,
        name:'Admin',
        beforeEnter:(to ,from, next) => {
        if(localStorage.getItem('token')){
            next();
        }else{
            next('/login');
        }
    }
    }
]

export default new VueRouter ({routes})
