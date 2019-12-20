import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue'),
    children: [
      {
        path: '/test1',
        name: 'test1',
        component: () => import('../views/Test1.vue')
      },
      {
        path: '/test2',
        name: 'test2',
        component: () => import('../views/Test2.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
