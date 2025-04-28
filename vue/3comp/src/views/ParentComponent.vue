<template>
  <h3>부모 컴포넌트</h3>
  <child-component ref="child_component"/>
</template>

<script>
import ChildComponent from '../components/ChildComponent.vue'
export default {
  components:{ "ChildComponent" :ChildComponent },
  mounted() {
    this.$refs.child_component.$refs.btn.click();
    this.$refs.child_component.childFunc();
    this.$refs.child_component.msg = '부모가 자식으로 보내는 메시지'
  }
}
</script>