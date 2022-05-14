import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/login',
    name: 'LogInPage',
    component: () => import('../views/LogInPage.vue')
  },
  {
    path: '/RegisterPage',
    name: 'RegisterPage',
    component: () => import('../views/RegisterPage.vue')
  },
  {
    path: '/EmployeeForm',
    name: 'EmploeeForm',
    component: () => import('../views/EmployeeForm.vue')
  }
  // {
  //   path: '/Profile',
  //   name: 'Profile',
  //   component: () => import('../views/Profile.vue')
  // },
  // {
  //   path: '/Company',
  //   name: 'Company',
  //   component: () => import('../views/Company.vue')
  // },
  // {
  //   path: '/Employee',
  //   name: 'Employee',
  //   component: () => import('../views/Employee.vue')
  // },
  // {
  //   path: '/EmpForm',
  //   name: 'EmpForm',
  //   component: () => import('../views/EmpForm.vue')
  // },
  // {
  //   path: '/CompanyForm',
  //   name: 'CompanyForm',
  //   component: () => import('../views/CompanyForm.vue')
  // },
  // {
  //   path: '/AddJob',
  //   name: 'AddJob',
  //   component: () => import('../views/AddJob.vue')
  // },
  // {
  //   path: '/ManageJob',
  //   name: 'ManageJob',
  //   component: () => import('../views/ManageJob.vue')
  // },
  // {
  //   path: '/AppliedJob',
  //   name: 'AppliedJob',
  //   component: () => import('../views/AppliedJob.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
