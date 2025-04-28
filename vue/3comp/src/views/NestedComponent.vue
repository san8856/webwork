<template>
  <!-- <page-title title="마이페이지" subtitle="주문내역"/>  -->
  <page-title :title="title"/> <!-- v-bind 는 생략-->
  <!-- 정적에서 문자열은 바인딩x -->
  <blog-post  
            :likes="50" 
            :is-published="false"
            :comment-ids="[234, 266, 273]"/> 
  <!-- 동적 -->
  <blog-post v-bind="post"/> 
  <hr>
  <blog-post v-for="post in posts" v-bind="post"/> 
  <!-- <blog-post :title="post.title"
              :likes="post.likes" 
              :is-published="post.isShow"
              :comment-ids="post.commentIds"/> 위처럼 post자체를 바인딩 가능  -->

  <!-- <PageTitle/>  대소문자 구분해서 사용가능/구분없이도 사용가능 -->
</template>
<script>

  import PageTitle from '@/components/PageTitle.vue';  //컴포넌트 import
  import BlogPost from '@/components/BlogPost.vue';
  export default {
    components : {PageTitle, BlogPost}, // 컴포넌트 등록
    data(){
      return {title : '동적페이지이름',
              posts : [{isPublished : true, title: "블로그1"},
                       {isPublished : false, title: "블로그2"},
                       {isPublished : true, title: "블로그3"}
              ],
              post :{
                isPublished : true,
                likes: 100,
                title: "vue 블로그",
                commentIds : [10, 11, 13]}
      }
    }
    }
</script>