<template>
  <div class="container" >
    <h1 style="text-align: center; font-weight: bold;">도서 목록</h1>
    <div>
      <button class="btn btn-info" @click="goAddForm(goAddForm)">도서 등록</button>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th></th>
          <th>제목</th>
          <th>저자</th>
          <th>출판사</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book,i) in bookList" :key="book.id" @click="goInfomation(book.id)">
          <td>{{ book.id }}</td>
          <td><img :src="`http://localhost:3000/uploads/${book.image}`" alt="bookImage" style="max-width: 150px; max-height: 150px;"></td>          <td>{{ book.title }}</td>
          <td>{{ book.writer }}</td>
          <td>{{ book.publisher }}</td>
          <td>{{ book.price }} 원</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios';
export default{
  data(){
    return{
      book : {},
      bookList : []
    }
  },
  created() {
    this.getBookList();
  },
  methods: {
    async getBookList() {
      let result = await axios.get(`/api/book`);
      this.bookList = result.data;
    },
    goInfomation(id) {
      this.$router.push({ path: "/bookInfo", query: { id : id } });
    },
    goAddForm() {
      this.$router.push({ path: "/bookAdd"})
    }
  }
}
</script>
<style scoped>
table * {
  text-align: center;
}
</style>