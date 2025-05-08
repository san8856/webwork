<template>
  <div>
    <button @click="incrementChild">
      <slot></slot>
    </button> 
    <button @click="incrementChild">handler {{count}}</button> 
   <button @click="emit('incrementevent', 1)">emit 인수 {{count}}</button> 
   <button @click="emit('incrementevent')">emit {{count}}</button> 
   <button @click="this.count++">직접변경안됨 {{count}}</button>  
  </div>
</template>
<script setup>
  import { defineProps,defineEmits } from 'vue'

  const props = defineProps ([ 'count' ])
  const emit = defineEmits(['incrementevent'])

    const incrementChild = () => {
      emit('incrementevent', props.count+1)
    }
  

</script>


