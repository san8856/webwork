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
      <CommentComp :bid="boardInfo.id" />
     </div>
    <div class="row">

    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import CommentComp from '@/components/CommentComp.vue';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

  const router = useRouter();
  const route = useRoute();

  const searchNo = ref('');
  const boardInfo = ref({});

  const getBoardInfo = async() => {
    const board = await axios.get(`/api/board/${searchNo.value}`);
    boardInfo.value = board.data[0];
  }

  const goToUpdateForm = (id) => {
    router.push({ path: "/boardForm", query: { id } });
  }

  const goToListForm = ()=>{
    router.push({ path: "/boardList" });
  }

  const deleteBoard = async(id) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      await axios.delete(`/api/board/${id}`);
      alert("삭제되었습니다.");
      goToListForm();
    } catch (err) {
      console.error("삭제 오류:", err);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  onMounted(()=>{
    searchNo.value = route.query.id;
    getBoardInfo();
  });

</script>
