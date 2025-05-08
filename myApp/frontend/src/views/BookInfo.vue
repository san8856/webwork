<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <tr>
          <th></th>
          <td><img :src="`/img/${bookInfo.image}`" alt="bookImage" style="max-width: 150px; max-height: 150px;" ></td>
          <th>제목</th>
          <td>{{ bookInfo.title }}</td>
          <th>책 소개</th>
          <td>{{ bookInfo.introduction }}</td>
          <th>저자</th>
          <td>{{ bookInfo.writer }}</td>
          <th>출판사</th>
          <td>{{ bookInfo.publisher }}</td>
          <th>출판일</th>
          <td>{{ bookInfo.publication_date }}</td>
          <th>가격</th>
          <td>{{ bookInfo.price }}</td>
          <th>페이지 수</th>
          <td>{{ bookInfo.page }}</td>
          <th>ISBN</th>
          <td>{{ bookInfo.isbn }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default{
    data(){
      return{
        searchNo: "",
        bookInfo: {},
      }
    },
    created(){
      this.searchNo = this.$route.query.id;
      this.getBookInfo();
    },
    methods:{
      async getBookInfo() {
        let book = await axios.get(`/api/book/${this.searchNo}`);
        this.bookInfo = book.data[0];
      },
      goList(){
        this.$router.push({ path: "/bookList" });
      }
    }
  }
</script>