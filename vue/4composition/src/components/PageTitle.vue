<template>
  <div class="alert alert-warning">
    <h2>{{ title }}</h2>
  </div>
</template>
<script>
  import { defineProps } from 'vue';
  const props = defineProps(["title"]);
    //  ["title"],  // 배열로 받기
    // {
    //   // 객체로 받기기
    //   title: {
    //     type: String,
    //     //default: "페이지 제목입니다.",
    //     required: true,
    //   },
    // },

</script>
