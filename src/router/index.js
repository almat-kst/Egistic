import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SearchPage from '../views/SearchPage.vue'
import DetailPage from '../views/DetailPage.vue'
import WorkerSearch from '../views/WorkerSearch'
import Resume from '../views/Resume'
import SecondResume from '@/components/resume/SecondResume'
import ThirdResume from '@/components/resume/ThirdResume'
import EducationResume from '@/components/resume/EducationResume'
import EduResultResume from '@/components/resume/EduResultResume'
import ResumeAboutWorker from '@/components/resume/ResumeAboutWorker'
import FinishResume from '@/components/resume/FinishResume'
import Login from '../views/Login'
import Register from '../views/Register'
import MyAccount from '../views/MyAccount'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/search_page',
    name: 'SearchPage',
    component: SearchPage
  },
  {
    path: '/detail_page',
    name: 'DetailPage',
    component: DetailPage
  },
  {
    path: '/worker_search',
    name: 'WorkerSearch',
    component: WorkerSearch
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/resume_second',
    name: 'SecondResume',
    component: SecondResume
  },
  {
    path: '/resume_third',
    name: 'ThirdResume',
    component: ThirdResume
  },
  {
    path: '/resume_edu',
    name: 'EducationResume',
    component: EducationResume
  },
  {
    path: '/resume_edu_results',
    name: 'EduResultResume',
    component: EduResultResume
  },
  {
    path: '/resume_about_worker',
    name: 'ResumeAboutWorker',
    component: ResumeAboutWorker
  },
  {
    path: '/resume_finish',
    name: 'FinishResume',
    component: FinishResume
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/my_account',
    name: 'MyAccount',
    component: MyAccount
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
