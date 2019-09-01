import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/router'
import Category from '@/pages/category/router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [Home, Category]
})
