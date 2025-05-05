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
<script>
import axios from 'axios';

export default{
//프롭스 , 패치
  props:['bid'],
  data(){
    return {
      comments: [],
        writer:'',
        content:''
    };
  },  
  created() {
    this.getComments();
  },
  watch: {
   bid(newVal) {
     if (newVal) this.getComments();
   }
  },

  methods:{
    async getComments() {
        const res = await axios.get(`http://localhost:3000/comment/${this.bid}`);
        this.comments = res.data;
      },
    async deleteComment(id){
      await axios.delete(`http://localhost:3000/comment/${id}`);
      this.getComments();
    },
    async addComment() {
      if (!this.writer.trim() || !this.content.trim()) return;

      const url = "http://localhost:3000/comment";
      const param = {
        writer: this.writer,
        content: this.content,
        bid: this.bid
      };

      const result = await axios.post(url, param);
      this.writer = '';
      this.content = '';
      this.getComments();
    }
  }
};
  
</script>