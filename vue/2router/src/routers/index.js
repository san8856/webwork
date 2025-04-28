import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import MemberForm from '../views/MemberForm.vue'
import EmpView from '../views/EmpView.vue'
import Movie from '../views/Movie.vue'
import ToDo from '../views/ToDo.vue'
import ParamView from '../views/ParamView.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/MemberForm', component: MemberForm },
  { path: '/EmpView', component: EmpView },
  { path: '/Movie', component: Movie },
  { path: '/ToDo', component: ToDo },
  { path: '/ParamView/:username', component: ParamView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;