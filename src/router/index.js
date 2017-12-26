import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import Main from '../pages/Main.vue'
import Register from '../pages/Register.vue'
import UserProfile from '../pages/UserProfile.vue'
import Team from '../pages/Team.vue'
import Login from '../pages/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user/:userId',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/team/:teamId',
      name: 'Team',
      component: Team
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
