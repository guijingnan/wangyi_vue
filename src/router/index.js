import Vue from 'vue'
import VueRouter from 'vue-router'
/*import Home from '../pages/Home/Home.vue'*/
/*import Knowledge from '../pages/Knowledge/Knowledge.vue'
import Classify from '../pages/Classify/Classify.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart .vue'
import Personal from '../pages/Personal/Personal.vue'*/

//懒加载
const Home=()=>import('../pages/Home/Home.vue');
const Knowledge=()=>import('../pages/Knowledge/Knowledge.vue');
const Classify=()=>import('../pages/Classify/Classify.vue');
const ShoppingCart=()=>import('../pages/ShoppingCart/ShoppingCart .vue');
const Personal=()=>import('../pages/Personal/Personal.vue');
import Login from '../pages/Login/Login.vue'
Vue.use(VueRouter);
export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/knowledge',
      component:Knowledge,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/classify',
      component:Classify,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/shoppingcart',
      component:ShoppingCart,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/personal',
      component:Personal,
      children:[
        {
          path:'/personal/login',
          component:Login
        }
      ]
    },

    {
      path:'/',
      redirect:'/home'
    }
  ]
})
