import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../components/Login.vue';
import Secure from '../components/Secure.vue';
import Admin from '../components/Admin.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Login'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/secure',
    name: 'Secure',
    component: Secure,
    beforeEnter: [BeforeEnterHandler]
    /*beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next();
      }
    } */
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter: [BeforeEnterHandler]
  }
]

function BeforeEnterHandler(to, from, next) {
  if (store.state.authenticated == false) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next();
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
