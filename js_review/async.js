// 비동기 : ajax
axios = require('axios')

// function getBoard() {
//   axios("http://localhost:3000/board/1")
//   .then( res => console.log("2", res.data.title) )
// }

// getBoard();
// console.log("1","the end");

//동기
  async function getBoard() {
    let res = await axios("http://localhost:3000/board/1")
    //then 절 필요 x
    console.log("2:", res.data.title);
  }
  console.log("1","the end");

