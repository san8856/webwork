<template>
  <!-- 댓글리스트
  댓글등록 작성자 내용 -->
  <div>
    <div class="comment-form mb-3 d-flex align-items-center gap-2">
      <label style="white-space: nowrap;">작성자</label>
      <input v-model="writer" type="text" class="form-control" style="max-width: 120px;" />
      <label style="white-space: nowrap;">내용</label>
      <input v-model="content" type="text" class="form-control" style="max-width: 500px;"/>
      <button @click="addComment" class="btn btn-primary">등록</button>
    </div>
    <table class="table table-sm table-striped">
      <thead>
        <tr class="table-secondary text-center">
          <th>번호</th>
          <th>작성자</th>
          <th>내용</th>
          <th>작성일시</th>
          <th></th>
        </tr>
      </thead>
      <tbody>  
        <tr v-for="comment in comments" :key="comment.id" class="text-center">
          <td>{{ comment.id }}</td>
          <td>{{ comment.writer }}</td>
          <td class="text-start">{{ comment.content }}</td>
          <td>{{ comment.created_date }}</td>
          <td>
            <button @click="deleteComment(comment.id)" class="btn btn-sm btn-danger">삭제</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
</template>
<script setup>
import axios from 'axios';
import { ref, watch, onMounted } from 'vue';

  const props = defineProps({
    bid: {
      type: Number,
      required: true
    }
  });

  const comments = ref([]);
  const writer = ref('');
  const content = ref('');

  const getComments = async() => {
    const res = await axios.get(`/api/comment/bid/${props.bid}`);
    comments.value = res.data;
  }

  const deleteComment = async(id) => {
    await axios.delete(`/api/comment/${id}`);
    getComments();
  }
  const addComment = async() => {
    if (!this.writer.trim() || !this.content.trim()) return;
    
    const param = {
      writer: writer.value,
      content: content.value,
      bid: props.bid
    };
    
    await axios.post(`/api/comment/`, param);
    writer.value = '';
    content.value = '';
    getComments();
  }

  onMounted(()=>{
    if(props.bid) getComments();
  })
  

  watch(() => props.bid, (newVal) => {
  if (newVal) getComments();
  });
  
</script>