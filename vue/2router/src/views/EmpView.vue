
<script>
import EmpList from '../views/EmpList.vue';
import EmpForm from '../views/EmpForm.vue';
export default {
  components:{EmpList, EmpForm},
  data(){
    return{

    }
  }
}
</script>
<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <EmpList></EmpList>
      </div>
      <div class="col">
        <EmpForm></EmpForm>
      </div>
    </div>
  </div>  
</template>
