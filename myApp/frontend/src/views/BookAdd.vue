<template>
  <div class="container" >
    <h1 style="text-align: center; font-weight: bold;">도서 등록</h1>
    <form @submit.prevent>
      <label for="title">제목</label>
      <input type="text" v-model="bookInfo.title" id="title" />
      <label for="sub_title">부제</label>
      <input type="text" v-model="bookInfo.sub_title" id="sub_title" />
      <label for="writer">저자</label>
      <input type="text" v-model="bookInfo.writer" id="writer" />
      <label for="introduction">책 설명</label>
      <textarea v-model="bookInfo.introduction" id="introduction" rows="5"></textarea>
      <label for="publisher">출판사</label>
      <input type="text" v-model="bookInfo.publisher" id="publisher" />
      <label for="publication_date">출판일</label>
      <input type="text" v-model="bookInfo.publication_date" id="publication_date" />
      <label for="price">가격</label>
      <input type="text" v-model="bookInfo.price" id="price" />
      <label for="page">페이지</label>
      <input type="text" v-model="bookInfo.page" id="page" />
      <label for="isbn">ISBN</label>
      <input type="text" v-model="bookInfo.isbn" id="isbn" />
      <label for="file">도서 이미지 등록</label><br>
      <input type="file" id="file" @change="setFile" />

      <button type="button" class="btn btn-info" @click="addBook">등록하기</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
import BookInfo from './BookInfo.vue';

export default{
  data() {
    return {
      searchNo: "",
      bookInfo: {  },
      file: null
    };
  },
  created() {
    this.searchNo = this.$route.query.id || "";
    if (this.searchNo > 0) {
      this.getBookInfo();
    }
  },
  methods: {
    async getBookInfo() {
      let result = await axios.get(`/api/book/${this.searchNo}`);
      this.bookInfo = result.data;
    },
    setFile(event) {
      this.file = event.target.files[0];
    },
    async addBook() {
      try {
        //첨부파일 업로드
        if (this.file) {
          const formData = new FormData();
          formData.append("file", this.file);

          const fileUploadRes = await axios.post("/api/book/uploads", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          });

          this.bookInfo.image = fileUploadRes.data.fileName; 
        }

        //도서등록
        const url = "/api/book";
        let param = {
        title: this.bookInfo.title,
        sub_title: this.bookInfo.sub_title,
        writer: this.bookInfo.writer,
        introduction: this.bookInfo.introduction,
        publisher: this.bookInfo.publisher,
        publication_date: this.bookInfo.publication_date,
        price: this.bookInfo.price,
        page: this.bookInfo.page,
        isbn: this.bookInfo.isbn,
        image: this.bookInfo.image
        };
        const result = await axios.post(url, param);
        alert("등록이 완료되었습니다.")
        this.$router.push({path: "/bookList"});
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped>
.container {
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

textarea {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  resize: vertical;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  font-weight: 600;
  margin-bottom: 5px;
}

input[type="text"],
input[type="file"] {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

input[type="file"] {
  padding: 5px;
}

button.btn {
  align-self: flex-end;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 6px;
}
</style>