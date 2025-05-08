<template>
  <div class="container">
    <form @submit.prevent>
      <label for="title">제목</label>
      <input type="text" v-model="bookInfo.title" id="title" />
      <label for="writer">저자</label>
      <input type="text" v-model="bookInfo.writer" id="writer" />
      <label for="introduction">책 설명</label>
      <input type="text" v-model="bookInfo.introduction" id="introduction" />
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
      <label for="file"></label>
      <input type="file" @change="setFile" />

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
        if (this.file) {
          const formData = new FormData();
          formData.append("file", this.file);

          const fileUploadRes = await axios.post("/api/book/uploads", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          });

          this.bookInfo.image = fileUploadRes.data.fileName; 
        }
        const url = "/api/book";
        let param = {
        title: this.bookInfo.title,
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
/* Style inputs with type="text", select elements and textareas */
input[type="text"],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
button[type="button"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
button[type="button"]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>