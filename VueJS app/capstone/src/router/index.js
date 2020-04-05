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
    path: '/SignUp',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },

  {
    path: '/Dashboard/:user_id',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },

  {
    path: '/ProfilePage/:user_id',
    name: 'ProfilePage',
    component: () => import('../views/ProfilePage.vue')
  },

  {
    path: '/Forum/:user_id',
    name: 'Forum',
    component: () => import('../views/Forum.vue')
  },

  {
    path: '/ForumAdd/:user_id',
    name: 'ForumAdd',
    component: () => import('../views/ForumAdd.vue')
  },

  {
    path: '/ForumAddreply/:user_id/:post_id/:num_replies',
    name: 'ForumAddReply',
    component: () => import('../views/ForumAddReply.vue')
  },

  {
    path: '/ForumReplies/:user_id/:post_id',
    name: 'ForumReplies',
    component: () => import('../views/ForumReplies.vue')
  },

  {
    path: '/HealthInsurance/:user_id',
    name: 'HealthInsurance',
    component: () => import('../views/HealthInsurance.vue')
  },

  {
    path: '/UserInputQuotes/:user_id',
    name: 'UserInputQuotes',
    component: () => import('../views/UserInputQuotes.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
