import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
// import AdminLayout from './components/AdminLayout.vue';
import DashboardHomeComponent from './components/DashboardHomeComponent.vue';
import TestComponent from './components/TestComponent.vue';
import Default from './layout/Default.vue';


Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'login',
    },
    {
        path:'/login',
        component:LoginComponent,
        // meta: { layout: 'no-default'},

    },
    {
        path:'/register',
        component:RegisterComponent,
        name:'register'
    },
    {
        path:'/admin',
        component:Default,
        children: [
            {
                path:'/dashboard-home',
                component:DashboardHomeComponent,
                name:'DashboardHomeComponent'
            },
            {
                path:'/test',
                component:TestComponent,
                name:'TestComponent'
            },
          ],
        // meta: { layout: 'default'},

        beforeEnter:(to ,from, next) => {
            if(localStorage.getItem('token')){
                next();
            }else{
                next('/login');
            }
        }
    },
    // {
    //     path:'/dashboard-home',
    //     component:DashboardHomeComponent,
    //     name:'DashboardHomeComponent'
    // },
    // {
    //     path:'/test',
    //     component:TestComponent,
    //     name:'TestComponent'
    // }

]

export default new VueRouter ({routes})
