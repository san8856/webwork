<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(board,i) in boardList" :key="board.id" @click="goToDetail(board.id)">
          <td>{{ board.id }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ board.created_date }}</td>
          <td>{{ board.comment }}</td>
        </tr>
        
            <button
                class="btn btn-xs btn-info" @click="goToUpdateForm(boardInfo)">
                등록
              </button>
          
      </tbody>
    </table>
    {{ route.fullPath }}
  </div>
</template>
<script setup>
  import axios from 'axios';
  import {ref} from 'vue';
  import {useRouter,useRoute} from 'vue-router';


  const router = useRouter();
  const route = useRoute();

  const boardList = ref([])

  const getBoardList = async() =>{
    let result = await axios.get(`/api/board`);
    boardList.value = result.data;
  }; 

  // const goToDetail = () => {};
  function goToDetail(id){
    router.push({path: '/boardInfo', query: {id}})
  };

  getBoardList();


</script>
<style scoped>
table * {
  text-align: center;
}
</style>
