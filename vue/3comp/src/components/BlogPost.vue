<template>
  <div class="card"> 
    <div class="card-header"> 
      {{ title }}</div>
    <div class="card-body">
      좋아요 {{ likes }}
      <div v-if="isPublished">출판</div>
      <div v-else>편집중</div>
      <div v-for="">commentIds</div>

    </div> 
  </div>
</template>
<script>
//props
export default {
  props : ['title','likes','isPublished','commentIds']
}
</script>