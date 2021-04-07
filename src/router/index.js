import Vue from 'vue'
import VueRouter from 'vue-router'
import Students from '../components/Students.vue'
import StudentsCreate from '../components/StudentsCreate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Students',
    component: Students
  },
  {
    path: '/students/create',
    name: 'StudentsCreate',
    component: StudentsCreate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
