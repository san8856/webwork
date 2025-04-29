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
  </div>
</template>
<script>
  import axios from 'axios';
  axios.defaults.baseURL="http://localhost:3000/board";

  export default{
    data(){
      return{
        board : {},
        boardList : []
      }
    },
    created() {
      this.getBoardList();
    },
    methods: {
      async getBoardList() {
        let result = await axios.get(`http://localhost:3000/board`);
        this.boardList = result.data;
      },
      goToUpdateForm(id){
        this.$router.push({ path: "/boardForm", query: { id: id } });
      },
      // fetchList(){
      //   axios.get("http://localhost:3000/board")
      //   .then(response => this.boardList = response.data)
      // },
      goToDetail(id){
        // query-> ?id=1  param -> boardInfo/1 
        //                  ->param은 라우터 인덱스에서 path: '/boardList/:id', 로 넣어줘야 함
        this.$router.push({ path: "/boardInfo", query: { id: id } });
      },
    },
    // mounted() {
    //   this.fetchList();
    // }
  }
</script>
<style scoped>
table * {
  text-align: center;
}
</style>
