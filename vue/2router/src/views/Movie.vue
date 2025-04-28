<script>
export default{
      data() {
        return{ 
          targetDt : '20250424' ,
          movies : [  ]
         };
      },
	    methods : { 
        getMovie(){
          fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=12664b24453335d2c3eca0fdc4b3b013&targetDt='+this.targetDt)
            .then(response => response.json())
            .then(response => this.movies = response.boxOfficeResult.dailyBoxOfficeList)
        }
       },  
      mounted(){
       this.getMovie();
    }  
    }
</script>
<template>
<input v-model="targetDt" @keyup.enter="getMovie()">
   <button @click="getMovie()">조회하기</button>
  <table border="1" >
    <th>순위</th>
    <th>제목</th>
    <th>cd</th>
    <th>상영일</th>
    <tr v-for="movie in movies">
      <td>{{ movie.rank }}</td>
      <td>{{ movie.movieNm }}</td>
      <td>{{ movie.movieCd }}</td>
      <td>{{ movie.openDt }}</td>
    </tr>
  </table>
</template>
<style>

</style>