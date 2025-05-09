<template>
  <div class="book-detail-wrapper">
    <h1 style="text-align: center; font-weight: bold;" >도서 상세페이지</h1>
    <button class="btn btn-secondary mt-3" @click="goList">목록으로</button>
    <div class="book-detail-container">
      <div class="book-image">
        <img :src="`http://localhost:3000/uploads/${bookInfo.image}`" alt="bookImage">
      </div>
      <div class="book-info">
        <h2 style="font-weight: bold; font-size: 2rem;">{{ bookInfo.title }}</h2>
        <br>
        <h3 style="font-size: 1.3rem;">{{ bookInfo.sub_title }}</h3>
        <br>
        <p style="font-size: 1.2rem;"><strong>저자:</strong> {{ bookInfo.writer }}</p>
        <br>
        <p style="font-size: 1.2rem;"><strong>출판사:</strong> {{ bookInfo.publisher }}</p>
        <br>
        <p style="font-size: 1.2rem;"><strong>가격:</strong> {{ bookInfo.price }} 원</p>
        <p style="line-height: 2;"><strong>책 소개</strong><br> {{ bookInfo.introduction }}</p>
        <div class="book-subinfo">
          <table class="table table-bordered">
            <tr>
              <th>출판일</th> 
              <td>{{ bookInfo.publication_date }}</td>
            </tr>
            <tr>
              <th>페이지 수</th>
              <td>{{ bookInfo.page }} 쪽</td>
            </tr>
            <tr>
              <th>ISBN</th>
              <td>{{ bookInfo.isbn }}</td>
            </tr>
          </table>
        </div>
      </div>
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
<style>
.book-detail-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.book-detail-container {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.book-image img {
  max-width: 550px;

  /* border: 1px solid #ddd; */
}

.book-info {
  flex: 1;
}

.book-subinfo {
  margin-top: 40px;
  width: 600px;
}
</style>