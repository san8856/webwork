<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ boardInfo.id }}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">
              {{ boardInfo.created_date }}
            </td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ boardInfo.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="4">{{ boardInfo.title }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="white-space: pre-wrap;
                  border: none;
                  background-color: white; ">{{ boardInfo.content }}</pre>
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button
                class="btn btn-xs btn-info" @click="goToUpdateForm(boardInfo.id)">
                수정
              </button>
              <button
                class="btn btn-xs btn-warning" @click="goToListForm()">
                목록
              </button>
              <button
                class="btn btn-xs btn-danger" @click="deleteBoard(boardInfo.id)">
                삭제
              </button>
             
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 댓글 -->
     <div>
        <!-- <CommentComp :bid="boardInfo.id"/> -->
     </div>
    <div class="row">

    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  // import { Comment } from '@/components/CommentComp.vue';
  axios.defaults.baseURL = "http://localhost:3000/board";

  export default{
    // components:{CommentComp}, emit으로 id값을 넘겨줌
    data(){
      return{
        searchNo: "",
        boardInfo: {},
      }
    },
    created() {
      this.searchNo = this.$route.query.id;
      this.getBoardInfo();
    },
    methods:{
      async getBoardInfo() {
        let board = await axios.get(`http://localhost:3000/board/${this.searchNo}`);
        this.boardInfo = board.data[0];
      },
      goToUpdateForm(id){
        this.$router.push({ path: "/boardForm", query: { id: id } });
      },
      goToListForm(){
        this.$router.push({ path: "/boardList" });
      },
      async deleteBoard(id) {
        if (!confirm("정말 삭제하시겠습니까?")) return;
        try {
          await axios.delete(`http://localhost:3000/board/${id}`);
          alert("삭제되었습니다.");
          this.goToListForm();
        } catch (error) {
          console.error("삭제 오류:", error);
          alert("삭제 중 오류가 발생했습니다.");
        }
      }

    },


  }
</script>
