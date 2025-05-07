<template>
  <div>
    <label>id</label><input v-model="email">
    <label>pw</label><input v-model="pw">
    <button type="button" @click="loginHandler">로그인</button>
  </div>
</template>
<script>
import axios from 'axios';

  export default{
    data() {
      return{
        user: {
          email:"",
          pw:""
        }
      }
    },
    methods: {
      async loginHandler() {
        const url = "/api/users/login";
        const data = {email : this.email, pw: this.pw };
        const result = await axios.post(url,data);
        alert(result.data.code)
        // this.$store.commit('increment');
        // this.$store.commit('changeLoginYn');
        //이메일도 저장하도록 추가
        // this.$store.commit('changeEmail', {email:this.email});
        this.$store.dispatch('login', {email:this.email});
        //actions -> dispatch로 불러옴
        this.$router.push({path: "/"});
      }
    }
  }
  //  axios속성 ({url:'', method:'', data{}})
</script>