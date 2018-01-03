import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import Main from '../pages/Main.vue'
import Register from '../pages/Register.vue'
import UserProfile from '../pages/UserProfile.vue'
import Team from '../pages/Team.vue'
import Login from '../pages/Login.vue'
import GameDetailsPage from '../pages/GameDetailsPage.vue'
import CreatGame from '../pages/CreatGame.vue'
import testing from '../components/CtgSelector.vue'

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
      path: '/user',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/game/:gameId',
      name: 'GameDetailsPage',
      component: GameDetailsPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/CreatGame',
      name: 'CreatGame',
      component: CreatGame
    },
    {
      path: '/testing',
      name :'testing',
      component: testing
    }
    
  ]
})
