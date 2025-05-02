<template>
  <!-- 댓글리스트

  댓글등록 작성자 내용 -->
</template>
<script>
export default{
//프롭스 , 패치
  props:[],
  methods:{
      async getBoardInfo() {
        let board = await axios.get(`http://localhost:3000/board/${this.searchNo}`);
        this.boardInfo = board.data[0];
      },
    } 
  }
  // 이런 느낌으로 불러오기
</script>