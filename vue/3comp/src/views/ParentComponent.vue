<template>
  <h3>부모 컴포넌트</h3>
  <child-component></child-component>
</template>

<script>
import ChildComponent from '../components/ChildComponent.vue'
export default {
  components:{ "ChildComponent" :ChildComponent }
}
</script>