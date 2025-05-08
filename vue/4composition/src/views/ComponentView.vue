<template>
  <div>
  useComponentrefs 이용<br>
  <input ref="my-input" value="hello" /><br>
  현재페이지는 {{ route.fullPath }} <br>
  <a href="#" @click="router.push('/')">home</a>
  <a href="#" @click="goPage">about</a>
  </div>
  <hr/>
  {{ count.value }}

  <button @click="clickHandler">클릭</button>
  <ButtonCounter :counter="count.value" @incrementevent="clickHandler">자식컴포넌트</ButtonCounter>
</template>

<script setup>
import ButtonCounter from '../components/ButtonCounter.vue';
import { onMounted, reactive, useTemplateRef } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const router = useRouter()
const route = useRoute()

const input = useTemplateRef('my-input')

function goPage(){
  router.push('/');
  router.push({name: "home"})
}


  const count = reactive({value:0  })

  const clickHandler = (initValue) => {
    //number 0 -> false
    if (initValue > 0 ){
      count.value = initValue
    }else {
    count.value++;
    }
  }
  // function clickHandler1(){
  //   alert('클릭됨')
  // }

  onMounted(()=>{
    console.log('count=',count.value);
    console.log('input=',input.value.value);
    input.value.select()
    // input.value.focus()
  });


</script>
