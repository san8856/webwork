<script>
// import GoodsView from './components/goods.vue';
import MemberForm from './views/MemberForm.vue';
import Emp from './views/EmpForm.vue';
import Movie from './views/Movie.vue';
import ToDo from './views/ToDo.vue';
import { RouterLink, RouterView} from 'vue-router'
export default {
  components:{MemberForm, Emp, Movie, ToDo},
  data(){
    return{

    }
  },
  methods:{},

}
</script>

<template>
<div class="container">
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active" aria-current="page" >Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/MemberForm" class="nav-link " aria-current="page" >회원가입</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/EmpView" class="nav-link " aria-current="page" >사원관리</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Movie" class="nav-link " aria-current="page" >Movie</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/ToDo" class="nav-link " aria-current="page" >ToDo</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/ParamView/kim" class="nav-link " aria-current="page" >ParamView1</RouterLink>
          </li>
          <li> 
            <RouterLink to="/ParamView/park" class="nav-link " aria-current="page" >ParamView2</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main>
    <RouterView />
  </main>
</div>
</template>

