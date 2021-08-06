import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'


import UserIndex from '@/components/Indax'
import UserCreate from '@/components/CreateUser'
import UserEdit from '@/components/EditUser'
import UserShow from '@/components/ShowUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      Create: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user',
      name: 'user',
      component: UserShow
    }
  ]
})
