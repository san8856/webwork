<template>
  <div>
    <ProvideInjectChild />
  </div>
</template>
<script setup>
import ProvideInjectChild from './ProvideInjectChild.vue';
import {provide, ref} from "vue";

  const items = ref(['A','B'])

  provide("itemLength", items.value.length)


</script>