<template>
  <h3>부모 컴포넌트</h3>
  <child-component @send-message="sendMessage" />
</template>

<script>
import ChildComponent from '../components/ChildComponent4.vue'
export default {
  components:{ "ChildComponent" :ChildComponent },
  methods : {
    // sendMessage(){
    //   console.log("자식 컴포넌트가 커스텀 이벤트 호출함")
    // }
    sendMessage(message){
      console.log(message)
    }
  }
}
</script>