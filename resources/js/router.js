import Vue from 'vue';
import VueRouter from 'vue-router';
const footer = {template: "<div class='alert alert-primary'>Footer Component</div>"}
const header = {template: "<div class='alert alert-success'>Header Component</div>"}
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import AdminComponent from './components/AdminComponent.vue';

Vue.use(VueRouter)

const routes = [
    {
        path:'/footer',
        component:footer
    },
    {
        path:'/header',
        component:header
    },
    {
        path:'/',
        redirect:'login',
    },
    {
        path:'/login',
        component:LoginComponent,
        name:'Login',
        // beforeEnter:(to ,from, next) => {
        //     if(localStorage.getItem('token')){
        //         next();
        //     }else{
        //         next('/login');
        //     }
        // }
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
        // beforeEnter:(to ,from, next) =>{
        //     next('/login');
        // }

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
